import { useState } from "react";

// response from API
// const courses = [
//   { id: 1, name: "React" },
//   { id: 2, name: "Angular" },
//   { id: 3, name: "Vue" },
// ];

const TwoWayBindingDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
      <button onClick={() => setChecked(!checked)}>Toggle</button>
    </div>
  );
};

// const TwoWayBindingDemo = () => {
//   const [checked, setChecked] = useState(1);

//   const handleSubmit = () => {
//     console.log({ id: checked });
//   };

//   return (
//     <div>
//       {courses.map((course) => {
//         return (
//           <div key={course.id}>
//             <input
//               type="radio"
//               checked={checked === course.id}
//               onChange={(e) => setChecked(course.id)}
//             />
//             <label>{course.name}</label>
//           </div>
//         );
//       })}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// };

export default TwoWayBindingDemo;
