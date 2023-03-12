import { useState } from "react";
import App from "./App";

function Test({ countWrong }) {
  return (
    <div>
      This is test {countWrong}
      <h1> {countWrong}</h1>
    </div>
  );
}

export default Test;
