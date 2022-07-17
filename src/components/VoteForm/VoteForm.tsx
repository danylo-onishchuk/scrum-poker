export function VoteForm(props: any) {
  const { voteClick } = props;

  const points = [1, 2, 3, 5, 8, 13];

  return (
    <div className="loginWrapper">
      <form onSubmit={voteClick}>
        <select
          name="points"
          id="points"
        >
          {points.map(point => (
            <option value={point}>{point}</option>
          ))}
        </select>
        <button
          type="submit"
        >
          Vote
        </button>
      </form>
    </div>
  );
}
