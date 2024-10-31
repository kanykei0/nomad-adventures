import Main from "modules/Main/Main";
import Button from "ui/Button/Button";
import Typography from "ui/Typography/Typography";

const Home = () => {
  return (
    <div>
      <Main />
      <Typography variant="h1">Hello World</Typography>
      <Button text="Button" />
    </div>
  );
};

export default Home;
