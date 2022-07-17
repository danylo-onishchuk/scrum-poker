import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { GameButtons } from './components/GameButtons/GameButtons';
import { Login } from './components/Login/Login';
import { BasicTable } from './components/Table/Table';
import { Client, CurrentGameStage } from './types';
import { VoteForm } from './components/VoteForm/VoteForm';
import { WSEvents } from './wsEvents';
import { checkIfAllVoted } from './components/helpers';

const client = new W3CWebSocket('wss://danylo-scrum-poker.herokuapp.com');

export function App() {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentGameStage, setCurrentGameStage] = useState(CurrentGameStage.Login);
  const [pointsOpacity, setPointsOpacity] = useState(1);

  useEffect(() => {
    client.onopen = () => {
      client.send([WSEvents.OpenConnection, 'open']);
    };

    client.onmessage = (message: any) => {
      const serverData = JSON.parse(message.data);
      const [event] = serverData;

      serverData.shift();

      switch (event) {
        case 'openFromServer':
          setClients(serverData);
          break;

        case 'loginFromServer':
          setClients(serverData);
          break;

        case 'choosedCardFromServer':
          setClients(serverData);
          break;

        case 'startVoteFromServer':
          setPointsOpacity(0);
          setCurrentGameStage(CurrentGameStage.Game);
          setClients(serverData);
          break;
        case 'finishVoteFromServer':
          setPointsOpacity(1);
          setCurrentGameStage(CurrentGameStage.Overview);
          setClients(serverData);
          break;

        default:
          break;
      }
    };
  }, []);

  const loginClick = (event: any) => {
    event.preventDefault();

    const name = event.target.name.value;

    client.send([WSEvents.Login, name]);
    setCurrentGameStage(CurrentGameStage.Preparing);
  };

  const voteClick = (event: any) => {
    event.preventDefault();

    const points = event.target.points.value;

    client.send([WSEvents.ChoosedCard, points]);
  };

  const startClick = () => {
    client.send([WSEvents.StartVote, 'startVote']);
  };

  const finishClick = () => {
    client.send([WSEvents.FinishVote, 'finishVote']);
  };

  const clientsPoints = clients.map(clientOne => Number(clientOne.points));

  let averagePoint = 0;

  if (clientsPoints.length > 0) {
    averagePoint = clientsPoints
      .reduce((a, b) => (a + b)) / clientsPoints.length;
  }

  const gamers = clients.filter(client => client.name !== 'anonym');
  const allVoted = checkIfAllVoted(gamers);

  return (
    <div className="gameWrapper">
      {currentGameStage === CurrentGameStage.Login && (
        <Login loginClick={loginClick} />
      )}
      {currentGameStage === CurrentGameStage.Game && (
        <VoteForm voteClick={voteClick} />
      )}
      {currentGameStage !== CurrentGameStage.Login && (
        <GameButtons
          startClick={startClick}
          finishClick={finishClick}
          currentGameStage={currentGameStage}
          allVoted={allVoted}
        />
      )}
      <BasicTable clients={gamers} opacity={pointsOpacity} />
      <br />
      {currentGameStage === CurrentGameStage.Overview && (
        <div>
          Average:
          {Math.round(averagePoint)}
        </div>
      )}
    </div>
  );
}
