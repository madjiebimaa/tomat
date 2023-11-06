import { Task } from '@/lib/types';
import { create } from 'zustand';

type TaskState = {
  selectedTask: Task | null;
  tasks: Task[];
};

type TaskActions = {
  actions: {
    addTask: (name: string, estimation: number) => void;
    editTask: (newTask: Task) => void;
    deleteTask: (id: string) => void;
    selectTask: (id: string) => void;
    toggleTask: (id: string) => void;
  };
};

const initialState: TaskState = {
  selectedTask: null,
  tasks: [],
};

const taskStore = create<TaskState & TaskActions>()((set) => ({
  ...initialState,
  actions: {
    addTask: (name, estimation) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            name,
            estimation,
            isComplete: false,
          },
        ],
      })),
    editTask: (newTask) =>
      set((state) => {
        const taskToEdit = state.tasks.find((task) => task.id === newTask.id);
        if (!taskToEdit) {
          return state;
        }

        const nextTasks = state.tasks.map((task) => {
          if (task.id === taskToEdit.id) {
            return {
              ...task,
              ...newTask,
            };
          }

          return task;
        });

        return {
          tasks: nextTasks,
        };
      }),
    deleteTask: (id) =>
      set((state) => {
        const taskToDelete = state.tasks.find((task) => task.id === id);
        if (!taskToDelete) {
          return state;
        }

        const nextTasks = state.tasks.filter(
          (task) => task.id !== taskToDelete.id
        );
        return {
          tasks: nextTasks,
        };
      }),
    selectTask: (id) =>
      set((state) => {
        const selectedTask = state.tasks.find((task) => task.id === id);
        if (!selectedTask) return state;

        return { selectedTask };
      }),
    toggleTask: (id) =>
      set((state) => {
        const nextTasks = state.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, isComplete: !task.isComplete };
          }

          return task;
        });

        return { tasks: nextTasks };
      }),
  },
}));

export const useSelectedTask = () => taskStore((state) => state.selectedTask);
export const useTasks = () => taskStore((state) => state.tasks);
export const useTaskActions = () => taskStore((state) => state.actions);
