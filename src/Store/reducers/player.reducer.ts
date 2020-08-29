import * as actionTypes from "../definations";
import { Player } from "../model/player.model";
import { produce } from "immer";
const initialState: Player = {
  player1: "",
  player2: "",
  player1Win: 0,
  player2Win: 0,
  totalnoofgame: 6,
};

const player = produce((state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SAVE_PLAYER_NAME:
      state.player1 = action.player1;
      state.player2 = action.player2;
      return state;
    case actionTypes.ADD_PLAYER_WIN:
      if (typeof action.player === "string") {
        state[action.player] = state[action.player] + 1;
      } else {
        state[action.player[0]] = state[action.player[0]] + 1;
        state[action.player[1]] = state[action.player[1]] + 1;
      }
      return state;

    default:
      return state;
  }
});
export default player;
