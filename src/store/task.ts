import { Task } from '@/lib/types';
import { create } from 'zustand';

type TaskState = {
  tasks: Task[];
};

type TaskActions = {
  actions: {
    addTask: (name: string, estimation: number) => void;
    // editName: (name: string) => void;
    // editEstimation: (estimation: number) => void;
    // increaseEstimation: () => void;
    // decreaseEstimation: () => void;
  };
};

const initialState: TaskState = {
  tasks: [],
};

const taskStore = create<TaskState & TaskActions>()((set) => ({
  ...initialState,
  actions: {
    addTask: (name, estimation) =>
      set((state) => ({
        tasks: [...state.tasks, { id: crypto.randomUUID(), name, estimation }],
      })),
  },
}));

export const useTasks = () => taskStore((state) => state.tasks);
export const useTaskActions = () => taskStore((state) => state.actions);
