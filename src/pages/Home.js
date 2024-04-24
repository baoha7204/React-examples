import { PureComponent } from "react";
import { Link } from "react-router-dom";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    this.isComponentMounted = true;

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
    const response = await fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    });
    const resData = await response.json();
    const data = resData.data.getPosts.posts;
    if (this.isComponentMounted) {
      console.log("Data from server");
      this.setState({ data });
      console.log("Set state from unmounted component Home");
    }
    // this.setState({ data });
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Home page</h1>
        <Link to="/about">About</Link>
        <ul>
          {this.state.data.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
