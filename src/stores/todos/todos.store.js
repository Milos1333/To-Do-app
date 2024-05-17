import { create } from "zustand";

export const useTasksStore = create((set) => ({
  tasks: [],
  dialog: {
    isOpen: false,
    task: null,
    type: null,
  },
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
  renameTask: (taskId, updatedTodo) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        taskId === task.id ? { ...task, ...updatedTodo } : task
      ),
    }));
  },
  setDialog: (isOpen, task, type) => {
    set({ dialog: { isOpen, task, type } });
  },
  deleteTask: (removeTaskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== removeTaskId),
    }));
  },
}));
