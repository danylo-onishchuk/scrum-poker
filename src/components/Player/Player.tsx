export function Player(props: any) {
  const { player } = props;
  const { name } = player;

  return (
    <div>{name}</div>
  );
}
