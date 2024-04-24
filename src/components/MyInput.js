const MyInput = ({ label, type, name, value, onChange, onBlur, children }) => {
  return (
    <>
      <label htmlFor="">{label}: </label>
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {children}
      <br />
    </>
  );
};

export default MyInput;
