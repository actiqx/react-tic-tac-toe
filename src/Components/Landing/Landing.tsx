import React, { useState } from "react";
import "./Landing.scss";
import Logo from "../../assets/TicTacToe.svg";
import { connect } from "react-redux";
import { savePlayerName } from "../../Store/actions/player.action";
import { useHistory } from "react-router-dom";
interface LandingProps {
  savePlayerName: (name1: string, name2: string) => void;
}
const Landing = (props: LandingProps) => {
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");

  // Local History
  const history = useHistory();
  return (
    <div className="login-layout">
      <div className="logo">
        <img src={Logo} alt="App Logo" />
      </div>
      <div className="login-holder">
        <div className="login-card">
          <div className="login-header">
            <div className="header-text">Welcome to</div>{" "}
            <div className="highlight">TIC TAC TOE</div>
          </div>
          <div className="player-content">
            <div className="formgroup">
              <div className="label">PLAYER 1</div>
              <input
                type="text"
                className="input-p"
                value={player1}
                onChange={(e) => setplayer1(e.target.value)}
              />
            </div>
            <div className="formgroup">
              <div className="label">PLAYER 2</div>
              <input
                type="text"
                className="input-p"
                value={player2}
                onChange={(e) => setplayer2(e.target.value)}
              />
            </div>
            <button
              className="btn-sub"
              onClick={() => {
                props.savePlayerName(player1, player2);
                history.push("/game");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  savePlayerName: (player1: string, player2: string) =>
    dispatch(savePlayerName(player1, player2)),
});

export default connect(null, mapDispatchToProps)(Landing);
