import { create } from "zustand";

export const useTodosStore = create((set) => ({
  tasks: [],
  toggleTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        taskId === task.id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    }));
  },
  addTask: (text) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: state.tasks.length + 1, title: text, isCompleted: false },
      ],
    }));
  },
}));
