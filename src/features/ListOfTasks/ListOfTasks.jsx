import { useTasksStore } from "../../stores/todos/todos.store";
import "./ListOfTasks.style.css";
import EditTodoModal from "../../components/Dialog/EditTodoDialog/EditTodoModal";
import DeleteTodoModal from "../../components/Dialog/DeleteTodoDialog/DeleteTodoModal";
import ListHero from "./components/ListHero";
import ListTasks from "./components/ListTasks";

const ListOfTasks = () => {
  const { tasks } = useTasksStore();

  return (
    <div className="main-list-of-tasks">
      {tasks.length === 0 ? (
        <h2>There are no tasks available!</h2>
      ) : (
        <div className="container-tasks">
          <ListHero />
          <ListTasks />
        </div>
      )}
      <EditTodoModal />
      <DeleteTodoModal />
    </div>
  );
};

export default ListOfTasks;
