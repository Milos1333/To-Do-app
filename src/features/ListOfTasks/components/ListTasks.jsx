import { useTasksStore } from "../../../stores/todos/todos.store";
import ListTask from "./ListTask";

const ListTasks = () => {
  const { tasks } = useTasksStore();
  return (
    <div className="task-items">
      {tasks.map((task) => (
        <ListTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ListTasks;
