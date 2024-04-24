import { useState, useRef } from "react";

// Syntax: const ref = useRef(initialValue)

// can place here but not recommended
// let interval;

// const UseRefDemo = () => {
//   const [count, setCount] = useState(60);

//   // TODO: replace by useRef
//   let interval = useRef();

//   const handleStart = () => {
//     interval.current = setInterval(() => {
//       setCount((prev) => prev - 1);
//     }, 1000);
//     console.log("Start -> ", interval.current);
//   };

//   const handleStop = () => {
//     clearInterval(interval.current);
//     console.log("Stop -> ", interval.current);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// };

// Manipulating DOM with ref
const UseRefDemo = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
};

export default UseRefDemo;
