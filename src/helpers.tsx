import { Client } from './types'

export const checkIfAllVoted = (users: Client[]) => {
  return users.every(user => user.ready === true);
}