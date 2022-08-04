import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  loginClick: (event: any) => void;
}

export const Connect:FC<Props> = (props) => {
  const { loginClick } = props;

  return (
    <>
      <form onSubmit={loginClick}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
          >
            Id of board
          </label>
          <input 
            type="number" 
            className="form-control" 
            id="name" 
            aria-describedby="emailHelp" 
            required
          />
        </div>
        <div className="mb-3">
          <label 
            htmlFor="pass" 
            className="form-label"
          >
              Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="pass" 
            required
          />
        </div>
        <div className="mb-3">
          <label 
            htmlFor="login" 
            className="form-label"
          >
            Your Name
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="login" 
            required
          />
        </div>
        <div className="buttonsWrapper">
          <Link to="/game/1">
            <button className="btn btn-primary">Go</button>
          </Link>
          <button type="submit" className="btn btn-primary">Register</button>
          <Link to="/">
            <button className="btn btn-primary">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}
