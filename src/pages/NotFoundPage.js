import { Link, NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Oops! Where are you?</h1>
      <p>Here are some helpful links:</p>
      <nav id="sidebar">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};
export default NotFoundPage;
