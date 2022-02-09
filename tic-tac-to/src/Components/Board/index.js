import React from "react";
import Square from "../Square";

export default function Board() {
  return (
    <div className="squares">
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
    </div>
  );
}
