import { useCallback, useState } from "react";
import Content from "../components/Content";
// Syntax

// const cachedFn = useCallback(fn, dependencies)
// Reference types: objects, arrays, functions
// ===

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  // TODO: use useCallback() to prevent re-rendering of Content component
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  // const handleIncrease = () => {
  //   setCount((prev) => prev + 1);
  // };

  return (
    <div>
      <Content onIncrease={handleIncrease} />
      <h2>Count: {count}</h2>
    </div>
  );
};

export default UseCallbackDemo;
