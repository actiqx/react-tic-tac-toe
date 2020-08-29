import { GameModel } from "../model/game.model";
import * as ActionTypes from "../definations";
import { produce } from "immer";
import { calculateWinner } from "../../utils/util";

const initialState: GameModel = {
  board: Array(9).fill(null),
  turn: "",
  message: "",
  winner: null,
  moves: 0,
  history: [],
  draw: false,
};

const game = produce((state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.USER_MOVE:
      let turn = { ...state.turn };
      const board = state.board.map((val: any, i: any) => {
        turn = state.turn === "O" || state.turn === "" ? "X" : "O";
        if (i === action.pos) val = turn;
        return val;
      });
      state.turn = turn;
      state.board = board;
      state.moves = state.moves + 1;

      return state;

    case ActionTypes.CHECK_FOR_WINNER: {
      const winnerResult = calculateWinner(state.board);
      const winner = winnerResult ? state.turn : null;

      if (winner) {
        state.winner = winner;

        return state;
      }
      state.draw = state.winner === null && state.moves > 8;
      return state;
    }
    case ActionTypes.RESET_GAME: {
      state = initialState;
      return state;
    }
    default:
      return state;
  }
});

export default game;
