import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeFunc = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const graphqlQuery = {
      query: `
        query GetPosts($page: Int){
            getPosts(page: $page){
            posts {
                _id,
                title,
                content,
                imageUrl,
                creator {
                name
                }
                createdAt
            },
            totalItems
            }
        }`,
      variables: {
        page: 1,
      },
    };

    // https://jsonplaceholder.typicode.com/posts
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // http://localhost:8000/graphql
    // const response = await fetch("http://localhost:8000/graphql", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(graphqlQuery),
    // });
    const data = await response.json();
    // const data = resData.data.getPosts.posts;
    console.log("Data from server");
    setData(data);
    console.log("Set state from unmounted component Home");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <Link to="/about">Go to About</Link>
      <ul>
        {data.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeFunc;
