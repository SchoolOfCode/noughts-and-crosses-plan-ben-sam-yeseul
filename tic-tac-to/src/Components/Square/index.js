import React from "react";

export default function Square({ num }) {
  const handleClick = (num) => {
    alert(num);
  };
  return <td onClick={() => handleClick(num)}>-</td>;
}
