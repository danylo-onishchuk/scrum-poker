import { FC } from 'react';
import './VoteForm.css';

interface Props {
  voteClick: (event: any) => void;
  enable: boolean;
}

export const VoteForm:FC<Props> = (props) => {
  const { voteClick, enable } = props;

  const points = [1, 2, 3, 5, 8, 13];

  return (
      <form onSubmit={voteClick} className="voteWrapper">
        <select
          className='form-select form-select-lg'
          name="points"
          id="points"
        >
          {points.map(point => (
            <option value={point} key={point}>{point}</option>
          ))}
        </select>
        <button
          className='btn btn-primary btn-lg'
          type="submit"
          disabled={!enable}
        >
          Vote
        </button>
      </form>
  );
}
