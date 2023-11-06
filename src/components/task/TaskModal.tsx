'use client';

import { Task } from '@/lib/types';
import { useSelectedTask, useTaskActions } from '@/store/task';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

interface TaskModalProps {
  task?: Task;
  handleCancelClick: () => void;
}

export default function TaskModal({ task, handleCancelClick }: TaskModalProps) {
  const [taskName, setTaskName] = useState(task ? task.name : '');
  const [taskEstimation, setTaskEstimation] = useState(
    task ? task.estimation : 1
  );
  const selectedTask = useSelectedTask();
  const taskActions = useTaskActions();

  const resetState = () => {
    setTaskName('');
    setTaskEstimation(1);
  };

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleTaskEstimationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskEstimation(parseInt(event.target.value));
  };

  const handeIncreaseTaskEstimation = () => {
    setTaskEstimation((prevState) => prevState + 1);
  };

  const handleDecreaseTaskEstimation = () => {
    if (taskEstimation > 0) {
      setTaskEstimation((prevState) => prevState - 1);
    }
  };

  const handleTaskDeleteClick = () => {
    if (task) {
      taskActions.deleteTask(task.id);
    }
  };

  const handleTaskSaveClick = () => {
    if (task) {
      taskActions.editTask({
        ...task,
        name: taskName,
        estimation: taskEstimation,
      });

      if (selectedTask && selectedTask.id === task.id) {
        taskActions.selectTask(task.id);
      }
    } else {
      taskActions.addTask(taskName, taskEstimation);
    }

    resetState();

    if (task) {
      handleCancelClick();
    }
  };

  const handleInputOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleTaskSaveClick();
    }

    if (event.key === 'Escape') {
      resetState();
      handleCancelClick();
    }
  };

  return (
    <form className="flex flex-col gap-2 bg-white rounded-md overflow-hidden shadow-xl">
      <div className="flex flex-col gap-2 p-4">
        <input
          type="text"
          name="task-name"
          value={taskName}
          placeholder="What are you working on?"
          autoComplete="off"
          onChange={handleTaskNameChange}
          onKeyDown={handleInputOnKeyDown}
          className="py-4 text-2xl text-red-950 font-medium focus:outline-none placeholder:text-gray-300 placeholder:italic"
        />
        <p className="text-red-950 font-semibold">Est Pomodoros</p>
        <div className="flex gap-2">
          <input
            type="number"
            name="task-estimation"
            value={taskEstimation}
            onChange={handleTaskEstimationChange}
            onKeyDown={handleInputOnKeyDown}
            className="w-[70px] p-2 text-sm text-red-950 font-medium tracking-widest rounded-md bg-gray-200 focus:outline-none"
          />
          <button
            type="button"
            onClick={handeIncreaseTaskEstimation}
            className="bg-white py-2 px-3 rounded-md shadow-lg border-2 border-gray-400 hover:opacity-80"
          >
            <BiSolidUpArrow size={14} className="text-gray-400" />
          </button>
          <button
            type="button"
            onClick={handleDecreaseTaskEstimation}
            className="bg-white py-2 px-3 rounded-md shadow-lg border-2 border-gray-400 hover:opacity-80"
          >
            <BiSolidDownArrow size={14} className="text-gray-400" />
          </button>
        </div>
      </div>
      <div className="flex justify-between p-2 bg-gray-200">
        {task ? (
          <button
            type="button"
            onClick={handleTaskDeleteClick}
            className="py-2 px-4 rounded-md text-gray-400 font-medium hover:text-gray-500"
          >
            Delete
          </button>
        ) : null}
        <div className="flex flex-1 justify-end gap-2">
          <button
            type="button"
            onClick={handleCancelClick}
            className="py-2 px-4 rounded-md text-gray-400 font-medium hover:text-gray-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleTaskSaveClick}
            className="py-2 px-4 bg-gray-800 font-medium rounded-md text-white hover:opacity-80"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
