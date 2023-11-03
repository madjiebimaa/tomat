'use client'

import { useTasks } from '@/store/task';
import TaskCard from './TaskCard';

export default function TaskList() {
  const tasks = useTasks();

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
