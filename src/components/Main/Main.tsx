import './Main.css';
import { Link } from 'react-router-dom';


export function Main() {
  return (
    <div className="mainWrapper">
      <Link to="/register">
        <button 
          type="button" 
          className='btn btn-primary btn-lg'
        >
          Register new board
        </button>
      </Link>
      <Link to="/game">
        <button 
          type="button" 
          className='btn btn-primary btn-lg'
        >
          Connect to board
        </button>
      </Link>
    </div>
  )
}