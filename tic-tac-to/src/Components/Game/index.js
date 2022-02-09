import React, { useState } from "react";
import Board from "../Board";
import PlayerTurn from "../PlayerTurn";
import Winner from "../Winner";

export default function Game() {
  const [turn, setTurn] = useState("x");
  const [square, setSquares] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const CheckWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

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
    CheckWinner(squares);
  };
  const Square = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{square[num]}</td>;
  };

  return (
    <>
      Turn: {turn}
      <table>
        <tbody>
          <tr>
            <Square num={0} />
            <Square num={1} />
            <Square num={2} />
          </tr>
          <tr>
            <Square num={3} />
            <Square num={4} />
            <Square num={5} />
          </tr>
          <tr>
            <Square num={6} />
            <Square num={7} />
            <Square num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner!</p>
          <button></button>
        </>
      )}
      {/* <Board />
      <PlayerTurn />
      <Winner /> */}
      <></>
    </>
  );
}
