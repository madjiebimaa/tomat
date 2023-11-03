'use client';

import { Task } from '@/lib/types';
import { AiFillCheckCircle } from 'react-icons/ai';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-md border-l-8 border-transparent hover:border-l-8 hover:border-gray-300">
      <div className="flex items-center gap-2">
        <button className="hover:opacity-80">
          <AiFillCheckCircle size={30} className="text-gray-300" />
        </button>
        <p className="text-red-950 font-semibold">{task.name}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-gray-300 font-medium">{task.estimation}</p>
      </div>
    </div>
  );
}
