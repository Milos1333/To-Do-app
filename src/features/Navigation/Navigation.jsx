import { Link } from "react-router-dom";
import IconLogo from "../../assets/megaphone.png";
import "./Navigation.style.css";

const Navigation = () => {
  return (
    <div className="main-navigation">
      <div className="logo-container">
        <img src={IconLogo} width="30px" />
      </div>
      <div className="links-container">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "create-task" }}>Create task</Link>
        <div className="list-container">
          <Link to={{ pathname: "list-of-tasks" }}>List of tasks</Link>
          <span>0</span>
        </div>
        <Link to={{ pathname: "about-us" }}>About us</Link>
      </div>
    </div>
  );
};

export default Navigation;
