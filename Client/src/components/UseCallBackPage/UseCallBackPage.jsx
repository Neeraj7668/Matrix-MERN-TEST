import React, { useState, useCallback } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const testFunCounts = new Set();
const UseCallBackPage = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  testFunCounts.add(handleIncrement);
  testFunCounts.add(handleDecrement);

  return (
    <div>
      <h2>Increment and Decrement in useCallback Test</h2>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>
        {" "}
        <AddIcon />{" "}
      </button>
      <button onClick={handleDecrement}>
        <RemoveIcon />{" "}
      </button>
    </div>
  );
};

export default UseCallBackPage;
