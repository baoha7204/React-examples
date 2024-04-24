import { useState } from "react";

// 1. overview
// 2. callback with setState, initial state
// 3. set state = replace COMPLETELY old state with new state

const orders = [100, 150, 175];

// const total = orders.reduce((acc, cur) => acc + cur, 0);

// const UseStateDemo = () => {
//   const [info, setInfo] = useState({
//     name: "Bao Ha",
//     age: 30,
//   });

//   const handleShow = () => {
//     setInfo((prev) => ({
//       ...prev,
//       address: "Tay Ninh",
//     }));
//   };

//   return (
//     <div>
//       <h1>useState Demo</h1>
//       {/* <h2>Count: {count}</h2> */}
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleShow}>Show more</button>
//     </div>
//   );
// };

const UseStateDemo = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1); 
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default UseStateDemo;
