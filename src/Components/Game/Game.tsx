import React, { useRef, useEffect } from "react";
import GameLayout from "./GameLayout";
import Logo from "../../assets/TicTacToe.svg";
import "./Game.scss";
import { connect } from "react-redux";
import {
  userMove,
  checkForWinner,
  resetGame,
} from "../../Store/actions/game.action";
import { savePlayerWin } from "../../Store/actions/player.action";
import WinnerPage from "./WinnerPage";
interface GameProps {
  board: any;
  turn: string;
  message: string;
  winner: string;
  moves: number;
  player1: string;
  player2: string;
  draw: boolean;
  player1Win: number;
  player2Win: number;
  totalnoofgame: number;
  userMove: (pos: number) => void;
  gameMessage: (msg: string) => void;
  checkForWinner: () => void;
  resetGame: () => void;
  savePlayerWin: (player: any) => void;
}

const Game = (props: GameProps) => {
  const {
    board,
    turn,
    winner,
    moves,
    player1,
    player2,
    draw,
    totalnoofgame,
    player1Win,
    player2Win,
  } = props;
  const boardRef = useRef([]);

  const handleSquareClick = (index: number) => {
    if (!board[index] && winner === null) {
      props.userMove(index);
    }
  };

  useEffect(() => {
    if (boardRef.current !== board && moves >= 2) {
      props.checkForWinner();
      boardRef.current = board;
    }
  }, [board, moves]);

  useEffect(() => {
    if (winner === "X") {
      props.savePlayerWin("player1Win");
    } else if (winner === "O") {
      props.savePlayerWin("player2Win");
    }
    if (draw) {
      props.savePlayerWin(["player1Win", "player2Win"]);
    }
  }, [draw, winner]);

  return (
    <div className="login-layout">
      <div className="logo">
        <img src={Logo} alt="App Logo" />
      </div>
      <div>
        {player1Win !== 6 && player2Win !== 6 ? (
          <>
            <div className="text-holder">
              {winner === "X" ? (
                <div className="winner-tag">Winner</div>
              ) : draw ? (
                <div className="draw-tag">Draw</div>
              ) : (turn === "O" || turn === "") && winner === null ? (
                <div className="turn-tag">Your Turn</div>
              ) : null}
            </div>
            <div className={`player-name ${winner === "X" ? "winner" : ""}`}>
              <div className="header">PLAYER 1</div>
              <div className="name">{player1}</div>
              <div className="img-holder">X</div>
            </div>
            <div className="dot-container">
              {Array.from(Array(totalnoofgame).keys()).map((i: number) => (
                <span
                  className={`dot ${
                    i <= player1Win - 1 && player1Win !== 0 ? "active" : ""
                  }`}
                ></span>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="login-holder">
        <div className="login-card">
          {player1Win !== 6 && player2Win !== 6 ? (
            <GameLayout squares={board} onClick={handleSquareClick} />
          ) : player1Win === 6 ? (
            <WinnerPage winner="X" player={player1} playerNo="player 1" />
          ) : player1Win === 6 ? (
            <WinnerPage winner="O" player={player2} playerNo="player 2" />
          ) : null}
        </div>
        <div className="btn-holder">
          {player1Win !== 6 && player2Win !== 6 && (winner !== null || draw) ? (
            <button className="btn-nxt" onClick={props.resetGame}>
              Next Match
            </button>
          ) : null}
        </div>
      </div>

      <div>
        {player1Win !== 6 && player2Win !== 6 ? (
          <>
            <div className="text-holder">
              {winner === "O" ? (
                <div className="winner-tag">Winner</div>
              ) : draw ? (
                <div className="draw-tag">Draw</div>
              ) : turn === "X" && winner === null ? (
                <div className="turn-tag">Your Turn</div>
              ) : null}
            </div>
            <div className="player-name">
              <div className="header">PLAYER 2</div>
              <div className="name">{player2}</div>
              <div className="img-holder">O</div>
            </div>
            <div className="dot-container">
              {Array.from(Array(totalnoofgame).keys()).map((i: number) => (
                <span
                  className={`dot ${
                    i <= player2Win - 1 && player2Win !== 0 ? "active" : ""
                  }`}
                ></span>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  board: state.game.board,
  turn: state.game.turn,
  message: state.game.message,
  winner: state.game.winner,
  moves: state.game.moves,
  draw: state.game.draw,
  player1: state.player.player1,
  player1Win: state.player.player1Win,
  player2: state.player.player2,
  player2Win: state.player.player2Win,
  totalnoofgame: state.player.totalnoofgame,
});

const mapDispatchToProps = (dispatch: any) => ({
  userMove: (pos: number) => dispatch(userMove(pos)),
  checkForWinner: () => dispatch(checkForWinner()),
  resetGame: () => dispatch(resetGame()),
  savePlayerWin: (player: any) => dispatch(savePlayerWin(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
