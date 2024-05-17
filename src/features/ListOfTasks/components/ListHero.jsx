import { useTasksStore } from "../../../stores/todos/todos.store";

const ListHero = () => {
  const { tasks } = useTasksStore();
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
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
    </>
  );
};

export default ListHero;
