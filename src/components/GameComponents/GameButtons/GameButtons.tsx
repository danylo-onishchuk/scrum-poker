import { FC } from 'react';
import { CurrentGameStage } from '../../../types';
import './GameButtons.css';

interface Props {
  startClick: (event: any) => void;
  finishClick: (event: any) => void;
  currentGameStage: CurrentGameStage;
  allVoted: boolean;
}

export const GameButtons:FC<Props> = (props) => {
  const {
    startClick,
    finishClick,
    currentGameStage,
    allVoted,
  } = props;

  return (
    <div className="loginWrapper">
      <button
        type="button"
        className='btn btn-primary btn-lg'
        onClick={startClick}
        disabled={currentGameStage === CurrentGameStage.Game}
      >
        Start Game
      </button>
      <button
        type="button"
        className='btn btn-primary btn-lg'
        onClick={finishClick}
        disabled={!allVoted}
      >
        Finish Game
      </button>
    </div>
  );
};
