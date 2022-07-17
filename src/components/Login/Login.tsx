export function Login(props: any) {
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
