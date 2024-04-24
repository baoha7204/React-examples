// useReducer syntax:
// const [state, setState] = useState(initialState);
// const [state, dispatch] = useReducer(reducer, initialArg, init?)
// 1. Initial state
// 2. Actions
// 3. Reducer
// 4. Dispatch
// Note
// 1. State as a snapshot (same as useState)
// 2. Third arg? => avoid recreating the initial state
// 3. Immutable update pattern

import { useReducer, useState } from "react";
// 1. Initial state
const createInitialState = () => {
  console.log("T1 thua roi...");
  return initialState;
};
const initialState = 0;
// 2. Actions
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
// 3. Reducer
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerDemo1 = () => {
  const [count, dispatch] = useReducer(reducer, null, createInitialState);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(ACTIONS.INCREMENT)}>Increment</button>
      <button onClick={() => dispatch(ACTIONS.DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(ACTIONS.RESET)}>Reset</button>
    </div>
  );
};
export default UseReducerDemo1;
