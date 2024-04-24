import useFetch2 from "../hooks/useFetch2";

const MyFetchCounter = ({ counter }) => {
  // useFetch and useFetch2 are used in this Assignment 5
  const { status, data, error, clearCache } = useFetch2(
    `https://jsonplaceholder.typicode.com/posts/${counter}`
  );
  console.log("Parent component", status, data, error);
  if (status === "fetching") return <p>Loading...</p>;
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      <button onClick={clearCache}>Clear Cache</button>
    </>
  );
};

export default MyFetchCounter;
