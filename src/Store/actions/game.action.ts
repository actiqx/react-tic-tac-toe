import * as actionTypes from "../definations";

export const userMove = (pos: number) => {
  return {
    type: actionTypes.USER_MOVE,
    pos,
  };
};

export const checkForWinner = () => {
  return {
    type: actionTypes.CHECK_FOR_WINNER,
  };
};

export const resetGame = () => {
  return {
    type: actionTypes.RESET_GAME,
  };
};
