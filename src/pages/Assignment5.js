import useCounter from "../hooks/useCounter";
import MyFetchCounter from "../components/MyFetchCounter";

const Assignment5 = () => {
  const { count, setCount, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>5. Custom useFetch hook</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <MyFetchCounter counter={count} />
    </div>
  );
};

export default Assignment5;
