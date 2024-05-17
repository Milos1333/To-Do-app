import "./CreateTask.style.css";
import Button from "../../components/Button/MyButton";
import { useState } from "react";
import { useTasksStore } from "../../stores/todos/todos.store";
import useNotificationStore from "../../stores/notification/notification.store";

const CreateTask = () => {
  const { setNotification } = useNotificationStore();
  const { addTask } = useTasksStore();
  const [taskText, setTaskText] = useState("");

  // Creating tasks

  const handleAddTask = () => {
    if (taskText !== "") {
      setNotification(true, "The task was successfully created!", "success");
      addTask(taskText);
      setTaskText("");
    } else {
      alert("You cannot enter an empty task.");
    }
  };

  return (
    <div className="main-div-create-task">
      <div className="container-create-task">
        <h2>What is your next task?</h2>
        <input
          placeholder="Type..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button buttonText="Save task" handleToButton={handleAddTask} />
      </div>
    </div>
  );
};

export default CreateTask;
