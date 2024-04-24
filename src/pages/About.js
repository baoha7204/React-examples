import Button from "../components/Button";

const About = () => {
  // const handleClick = () => {
  //   alert("You clicked me!");
  // };

  const handleSmash = (message) => () => {
    alert(message);
  };
  return (
    <div>
      <h1>Welcome to the About page</h1>
      {/* <button onClick={handleClick}>Click here</button> */}
      <Button onSmash={handleSmash("Playing!")}>Play movie</Button>
      <Button onSmash={handleSmash("Uploading!")}>Upload image</Button>
    </div>
  );
};

export default About;
