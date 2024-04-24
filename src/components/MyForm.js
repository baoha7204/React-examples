import { useState } from "react";
import MyInput from "./MyInput";

const FORM = [
  {
    type: "name",
    label: "Student Name",
    errorMsg: "Name must be at least 2 characters",
  },
  {
    type: "email",
    label: "Email",
    errorMsg: "Invalid email",
  },
  {
    type: "code",
    label: "Student ID",
    errorMsg: "Invalid student ID",
  },
  {
    type: "phone",
    label: "Phone number",
    errorMsg: "Invalid phone number",
  },
];

const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexCode = /^(S|s|H|h|D|d)[E|e|A|a|S|s]+([0-9]{6})$/;

const MyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    code: "",
    phone: "",
  });

  const [valid, setValid] = useState({
    name: true,
    email: true,
    code: true,
    phone: true,
  });

  const validate = (type) => {
    switch (type) {
      case "name":
        setValid((prev) => ({
          ...prev,
          name: form.name.length > 2,
        }));
        break;

      case "email":
        setValid((prev) => ({
          ...prev,
          email: regexEmail.test(form.email),
        }));
        break;

      case "code":
        setValid((prev) => ({
          ...prev,
          code: regexCode.test(form.code),
        }));
        break;

      case "phone":
        setValid((prev) => ({
          ...prev,
          phone: form.phone.length >= 10,
        }));
        break;
      default:
        break;
    }
  };

  console.log(form);

  const changeHandler = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (Object.values(valid).every((val) => val === true)) {
      alert(JSON.stringify(form));
    } else {
      alert("Invalid form");
    }
  };

  return (
    <>
      <h1>2. K18 Recruitment</h1>
      <form onSubmit={submitHandler}>
        {FORM.map((item, index) => (
          <MyInput
            key={index}
            name={item.type}
            onChange={changeHandler}
            onBlur={() => validate(item.type)}
            valid={valid[item.type]}
            label={item.label}
          >
            {!valid[item.type] && (
              <p style={{ color: "red" }}>{item.errorMsg}</p>
            )}
          </MyInput>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyForm;
