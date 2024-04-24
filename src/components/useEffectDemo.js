// useEffect(callback) is called after mounted and every render
import { useEffect, useState } from "react";

// DOM title changes after every render
// const UseEffectDemo = () => {
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     document.title = title;
//   });

//   return (
//     <div>
//       <h1>useEffect Demo</h1>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//     </div>
//   );
// };

// API call
// useEffect(callback, []) is called once after mounted
// const UseEffectDemo = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>useEffect Demo</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// API call dependency
// useEffect(callback, [deps]) is called once after mounted
const tabs = ["posts", "comments", "albums"];
const UseEffectDemo = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [type]);

  return (
    <div>
      <h1>useEffect Demo</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { backgroundColor: "#333", color: "#fff" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectDemo;
