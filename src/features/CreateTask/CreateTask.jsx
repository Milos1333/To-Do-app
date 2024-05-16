import "./CreateTask.style.css";
import MyButton from "../../components/Button/MyButton";

const CreateTask = () => {
  return (
    <div className="main-div-create-task">
      <div className="container-create-task">
        <h2>What is your next task?</h2>
        <input placeholder="Type..." />
        <MyButton buttonText="Save task" />
      </div>
    </div>
  );
};

export default CreateTask;
