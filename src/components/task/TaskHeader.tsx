'use client';

import { useSelectedTask } from '@/store/task';

export default function TaskHeader() {
  const selectedTask = useSelectedTask();

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <p className="text-gray-200 font-medium">#1</p>
      <p className="text-center text-white font-medium">
        {selectedTask ? selectedTask.name : 'Time to focus!'}
      </p>
    </div>
  );
}
