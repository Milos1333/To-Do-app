import { Link } from "react-router-dom";
import IconLogo from "../../assets/megaphone.png";
import "./Navigation.style.css";
import { useTasksStore } from "../../stores/todos/todos.store";

const Navigation = () => {
  const { tasks } = useTasksStore();
  return (
    <div className="main-navigation">
      <div className="logo-container">
        <img src={IconLogo} width="30px" />
      </div>
      <div className="links-container">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "createtask" }}>Create task</Link>
        <div className="list-container">
          <Link to={{ pathname: "listoftasks" }}>List of tasks</Link>
          <span>{tasks.length}</span>
        </div>
        <Link to={{ pathname: "about" }}>About</Link>
      </div>
    </div>
  );
};

export default Navigation;
