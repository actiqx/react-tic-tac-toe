import * as actionTypes from "../definations/player.defination";
export const savePlayerName = (player1: string, player2: string) => {
  return {
    type: actionTypes.SAVE_PLAYER_NAME,
    player1,
    player2,
  };
};

export const savePlayerWin = (player: any) => {
  return {
    type: actionTypes.ADD_PLAYER_WIN,
    player,
  };
};
