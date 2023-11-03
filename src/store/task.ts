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
        tasks: [...state.tasks, { id: crypto.randomUUID(), name, estimation }],
      })),
    selectTask: (id) =>
      set((state) => {
        const selectedTask = state.tasks.find((task) => task.id === id);
        return { selectedTask };
      }),
  },
}));

export const useSelectedTask = () => taskStore(state => state.selectedTask)
export const useTasks = () => taskStore((state) => state.tasks);
export const useTaskActions = () => taskStore((state) => state.actions);
