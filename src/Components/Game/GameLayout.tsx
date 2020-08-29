import React from "react";
import Square from "./Square";
import "./GameLayout.scss";
interface GameLayoutProps {
  squares: any[];
  onClick: any;
}

const GameLayout = (props: GameLayoutProps) => {
  const { squares, onClick } = props;
  return (
    <div className="layout">
      {squares.map((square: any, i: number) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default GameLayout;
