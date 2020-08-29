import { combineReducers } from "redux";
import player from "./player.reducer";
import game from "./game.reducer";
const rootReducer = combineReducers({ player, game });
export default rootReducer;
