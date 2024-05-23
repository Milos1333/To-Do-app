import RenameIcon from "../../../assets/renameIcon.png";
import DeleteIcon from "../../../assets/deleteIcon.png";
import { useTasksStore } from "../../../stores/todos/todos.store";
import useNotificationStore from "../../../stores/notification/notification.store";

const ListTask = ({ task }) => {
  const { toggleTask, setDialog } = useTasksStore();
  const { setNotification } = useNotificationStore();

  const handleToggle = (task) => {
    if (!task.isCompleted) {
      setNotification(true, "Task completed successfully!", "success");
    }
    toggleTask(task.id);
  };

  return (
    <div className={`task-item`}>
      <div className={`container-check`} onClick={() => handleToggle(task)}>
        {task.isCompleted ? <span>&#10003;</span> : null}
      </div>
      <div className="title">
        <p className={task.isCompleted ? "strikethrough" : ""}>
          <b>{task.title}</b>
        </p>
      </div>
      <>
        <img
          src={RenameIcon}
          width="20px"
          alt="Rename icon"
          onClick={() => setDialog(true, task, "edit")}
        />
        <img
          src={DeleteIcon}
          width="23px"
          alt="Delete icon"
          onClick={() => setDialog(true, task, "delete")}
        />
      </>
    </div>
  );
};

export default ListTask;
