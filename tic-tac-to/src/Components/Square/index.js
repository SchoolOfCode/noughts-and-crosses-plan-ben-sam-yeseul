import React from "react";

export default function Square({ num, square, setTurn, turn, setSquares }) {
  const handleClick = (num) => {
    if (square[num] !== "") {
      alert("already clicked");
      return;
    }
    let squares = [...square];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    setSquares(squares);
  };
  return <td onClick={() => handleClick(num)}>{square[num]}</td>;
}
