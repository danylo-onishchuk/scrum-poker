import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { GameButtons } from './components/GameButtons/GameButtons';
import { Login } from './components/Login/Login';
import { BasicTable } from './components/Table/Table';
import { VoteForm } from './components/VoteForm/VoteForm';
import { WSEvents } from './components/wsEvents';

const client = new W3CWebSocket('ws://localhost:9000');

export function App() {
  const [clients, setClients] = useState([]);
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
          setClients(serverData);
          break;
        case 'finishVoteFromServer':
          setPointsOpacity(1);
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

  return (
    <div className="gameWrapper">
      <Login loginClick={loginClick} />
      <VoteForm voteClick={voteClick} />
      <GameButtons
        startClick={startClick}
        finishClick={finishClick}
      />
      <BasicTable clients={clients} opacity={pointsOpacity} />
    </div>
  );
}
