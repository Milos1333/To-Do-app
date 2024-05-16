import { useTasksStore } from "../../stores/todos/todos.store";
import "./ListOfTasks.style.css";
import RenameIcon from "../../assets/RenameIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";

const ListOfTasks = () => {
  const { tasks, toggleTask } = useTasksStore();

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className="main-list-of-tasks">
      {tasks.length === 0 ? (
        <h2>There are no tasks available.</h2>
      ) : (
        <div className="container-tasks">
          <div className="task-head">
            <div className="task-details">
              <h2>Finished tasks!</h2>
              <p>Continue like that!</p>
            </div>
            <span>
              <b>
                {completedTasks}/{tasks.length}
              </b>
            </span>
          </div>
          <div className="task-items">
            {tasks.map((task) => (
              <div className={`task-item`} key={task.id}>
                <div
                  className={`container-check`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.isCompleted ? <span>&#10003;</span> : null}
                </div>
                <div className="title">
                  <p className={task.isCompleted ? "strikethrough" : ""}>
                    <b>{task.title}</b>
                  </p>
                </div>
                <>
                  <img src={RenameIcon} width="20px" alt="Rename icon" />
                  <img src={DeleteIcon} width="23px" alt="Delete icon" />
                </>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListOfTasks;
