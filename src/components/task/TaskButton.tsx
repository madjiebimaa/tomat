'use client';

import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import TaskModal from './TaskModal';

export default function TaskButton() {
  const [isModalShow, setIsModalShow] = useState(false);

  const handleAddTaskClick = () => {
    setIsModalShow(true);
  };

  return isModalShow ? (
    <TaskModal handleCancelClick={() => setIsModalShow(false)} />
  ) : (
    <button
      onClick={handleAddTaskClick}
      className="flex justify-center items-center gap-2 py-4 rounded-md border-2 border-dashed border-red-400 bg-red-600 hover:opacity-80"
    >
      <BsFillPlusCircleFill size={20} className="text-white" />
      <p className="text-lg text-white font-medium">Add Task</p>
    </button>
  );
}
