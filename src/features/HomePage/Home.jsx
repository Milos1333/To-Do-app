import "./Home.style.css";
import Button from "../../components/Button/MyButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("../createtask");
  };

  return (
    <div className="main-home">
      <div className="container-home">
        <h2>What are you planning for today?</h2>
        <h2>Create your new task!</h2>
        <Button
          textColor="black"
          buttonText="Create"
          handleToButton={handleNavigate}
        />
      </div>
    </div>
  );
};

export default Home;
