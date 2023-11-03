'use client';

import { Task } from '@/lib/types';
import { useSelectedTask, useTaskActions } from '@/store/task';
import { MouseEvent } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const selectedTask = useSelectedTask();
  const taskActions = useTaskActions();

  const isSelectedTask = selectedTask?.id === task.id;
  const isCompletedTask = task.isComplete;

  const handleToggleTask = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    taskActions.toggleTask(task.id);
  };

  return (
    <div
      onClick={() => taskActions.selectTask(task.id)}
      className={`flex justify-between items-center p-4 bg-white rounded-md border-l-8 ${
        isSelectedTask
          ? 'border-red-950 hover:border-red-950'
          : 'border-transparent hover:border-gray-300'
      } cursor-pointer hover:border-l-8`}
    >
      <div className="flex items-center gap-2">
        <button onClick={handleToggleTask} className="hover:opacity-80">
          <AiFillCheckCircle
            size={30}
            className={`${isCompletedTask ? 'text-red-600' : 'text-gray-300'}`}
          />
        </button>
        <p
          className={`font-semibold ${
            isCompletedTask ? 'text-gray-300 line-through' : 'text-red-950'
          }`}
        >
          {task.name}
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-gray-300 font-medium">{task.estimation}</p>
      </div>
    </div>
  );
}
