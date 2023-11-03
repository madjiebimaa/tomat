import { Task } from '@/lib/types';
import { create } from 'zustand';

type TaskState = {
  selectedTask: Task | null;
  tasks: Task[];
};

type TaskActions = {
  actions: {
    addTask: (name: string, estimation: number) => void;
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
          { id: crypto.randomUUID(), name, estimation, isComplete: false },
        ],
      })),
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
