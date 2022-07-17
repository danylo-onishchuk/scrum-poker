import { FC } from 'react';
import { CurrentGameStage } from '../../types';

interface Props {
  startClick: (event: any) => void;
  finishClick: (event: any) => void;
  currentGameStage: CurrentGameStage;
  allVoted: boolean;
}

export const GameButtons:FC<Props> = (props: any) => {
  const {
    startClick,
    finishClick,
    currentGameStage,
    allVoted,
  } = props;

  console.log(allVoted);

  return (
    <div className="loginWrapper">
      <button
        type="button"
        onClick={startClick}
        disabled={currentGameStage === CurrentGameStage.Game}
      >
        Start Game
      </button>
      <button
        type="button"
        onClick={finishClick}
        disabled={!allVoted}
      >
        Finish Game
      </button>
    </div>
  );
};
