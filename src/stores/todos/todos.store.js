import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [{ title: "dfdsfdf" }],
  toggleTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        taskId === task.id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    }));
  },
}));
