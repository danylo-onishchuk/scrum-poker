export function GameButtons(props: any) {
  const { startClick, finishClick } = props;

  return (
    <div className="loginWrapper">
      <button
        type="button"
        onClick={startClick}
      >
        Start Game
      </button>
      <button
        type="button"
        onClick={finishClick}
      >
        Finish Game
      </button>
    </div>
  );
}
