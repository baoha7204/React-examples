// useContext sytax: const value = useContext(SomeContext)

import { useContext } from "react";
import Content from "../components/Content";
import { ThemeContext } from "../components/ThemeContext";

// root => Comp A => Comp B => Comp C => Comp D
const UseContextDemo = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
};

export default UseContextDemo;
