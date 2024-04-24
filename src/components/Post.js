import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <p>Post ID: {params.id}</p>
      <button onClick={() => navigate("../")}>Go Back</button>
      <button onClick={() => navigate(-1)}>Go Back 2</button>
      <button onClick={() => navigate("/")}>Go home</button>
    </div>
  );
};

export default Post;
