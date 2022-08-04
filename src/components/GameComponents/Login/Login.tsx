import { FC } from 'react';

interface Props {
  loginClick: (event: any) => void;
}

export const Login:FC<Props> = (props) => {
  const { loginClick } = props;

  return (
    <>
      <form onSubmit={loginClick}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </>
  );
}