'use client';

import { BiDotsVertical } from 'react-icons/bi';
import TaskButton from './TaskButton';
import TaskHeader from './TaskHeader';
import TaskList from './TaskList';

export default function Task() {
  return (
    <div className="flex flex-col gap-2">
      <TaskHeader />
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-white font-semibold">Tasks</h3>
        <button className="flex justify-center items-center h-8 w-8 rounded-md hover:opacity-80 bg-red-400">
          <BiDotsVertical size={20} className="text-white" />
        </button>
      </div>
      <hr className="border border-white my-2" />
      <TaskList />
      <TaskButton />
    </div>
  );
}
