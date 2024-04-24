import { memo } from "react";
import Paragraph from "./Paragraph";

const Content = ({ onIncrease }) => {
  console.log("re-render");
  return (
    <>
      <h2>Hello F-code</h2>
      <button onClick={onIncrease}>Click me</button>
      <Paragraph />
    </>
  );
};

export default memo(Content);
