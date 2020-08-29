import React from "react";
import "./Square.scss";
interface SquareProps {
  value: string;
  onClick: any;
}

const Square = (props: SquareProps) => {
  const { value, onClick } = props;
  const style = value ? `square ${value}` : "square";
  return (
    <div className={style} onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
