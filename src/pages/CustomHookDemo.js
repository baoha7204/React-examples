import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

// const CustomHookDemo = () => {
//   const [firstName, setFirstName] = useState("F-code");
//   const [lastName, setLastName] = useState("CLB");

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p>
//         <b>
//           Good morning, {firstName} {lastName}.
//         </b>
//       </p>
//     </>
//   );
// };

const CustomHookDemo = () => {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
};

export default CustomHookDemo;
