import { FC } from 'react';

interface Props {
  loginClick: (event: any) => void;
}

export const Login:FC<Props> = (props) => {
  const { loginClick } = props;

  return (
    <div className="loginWrapper">
      <form onSubmit={loginClick}>
        <input type="text" name="name" id="name" />
        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
