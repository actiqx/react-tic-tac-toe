import React from "react";
import "./WinnerPage.scss";
interface Props {
  winner: string;
  player: string;
  playerNo: string;
}

const WinnerPage = (props: Props) => {
  const { winner, player, playerNo } = props;
  return (
    <div className="winner-page">
      <div className="winner-header">Winner !</div>
      <div className="winner-name">
        <div className="header">{playerNo}</div>
        <div className="name">{player}</div>
        <div className="img-holder">{winner}</div>
      </div>
    </div>
  );
};

export default WinnerPage;
