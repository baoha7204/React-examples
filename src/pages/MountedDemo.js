import { useState } from "react";
import UseEffectDemo from "../components/useEffectDemo";

const MountedDemo = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <UseEffectDemo />}
    </div>
  );
};

export default MountedDemo;
