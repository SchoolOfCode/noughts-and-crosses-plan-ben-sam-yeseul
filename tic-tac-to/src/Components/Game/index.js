import React from "react";
import Board from "../Board";
import PlayerTurn from "../PlayerTurn";
import Winner from "../Winner";

export default function Game() {
  return (
    <>
      <Board />
      <PlayerTurn />
      <Winner />
    </>
  );
}
