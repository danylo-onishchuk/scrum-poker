export type Client = {
  id: number,
  name: string,
  points: number,
  ready: boolean,
};

export const enum WSEvents {
  OpenConnection = 'openConnection',
  Login = 'login',
  StartVote = 'startVote',
  FinishVote = 'finishVote',
  ChoosedCard = 'choosedCard',
  Ping = 'ping',
}

export const enum CurrentGameStage {
  Login = 'login',
  Preparing = 'preparing',
  Game = 'game',
  Overview = 'overview',
}
