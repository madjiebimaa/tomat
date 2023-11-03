'use client';

import { Task } from '@/lib/types';
import { useSelectedTask, useTaskActions } from '@/store/task';
import { MouseEvent, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiDotsVertical } from 'react-icons/bi';
import TaskModal from './TaskModal';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const [isModalShow, setIsModalShow] = useState(false);

  const selectedTask = useSelectedTask();
  const taskActions = useTaskActions();

  const isSelectedTask = selectedTask?.id === task.id;
  const isCompletedTask = task.isComplete;

  const handleToggleTask = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    taskActions.toggleTask(task.id);
  };

  const handleEditClick = () => {
    setIsModalShow(true);
  };

  return isModalShow ? (
    <TaskModal
      id={task.id}
      name={task.name}
      estimation={task.estimation}
      handleCancelClick={() => setIsModalShow(false)}
    />
  ) : (
    <div
      onClick={() => taskActions.selectTask(task.id)}
      className={`flex justify-between items-center gap-4 p-4 bg-white rounded-md border-l-8 ${
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
      <div className="flex items-center gap-4">
        <p className="text-gray-300 font-medium">{task.estimation}</p>
        <button
          onClick={handleEditClick}
          className="flex justify-center items-center h-8 w-8 rounded-md bg-white hover:bg-gray-200 border-2 border-gray-300"
        >
          <BiDotsVertical size={20} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}
