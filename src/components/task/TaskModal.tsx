import { ChangeEvent, useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

interface TaskModalProps {
  handleCancelClick: () => void;
}

export default function TaskModal({ handleCancelClick }: TaskModalProps) {
  const [estPomodoros, setEstPomodoros] = useState(1);

  const handleEstPomodorosChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEstPomodoros(parseInt(event.target.value));
  };

  const handeEstPomdorosIncrease = () => {
    setEstPomodoros((prevState) => prevState + 1);
  };

  const handleEstPomodorosDecrease = () => {
    if (estPomodoros > 0) {
      setEstPomodoros((prevState) => prevState - 1);
    }
  };

  return (
    <form className="flex flex-col gap-2 bg-white rounded-md overflow-hidden shadow-xl">
      <div className="flex flex-col gap-2 p-4">
        <input
          placeholder="What are you working on?"
          className="py-4 text-2xl text-red-950 font-medium focus:outline-none placeholder:text-gray-300 placeholder:italic"
        />
        <p className="text-red-950 font-semibold">Est Pomodoros</p>
        <div className="flex gap-2">
          <input
            type="number"
            name="est-pomodoros"
            value={estPomodoros}
            onChange={handleEstPomodorosChange}
            className="w-[70px] p-2 text-sm text-red-950 font-medium tracking-widest rounded-md bg-gray-200 focus:outline-none"
          />
          <button
            type="button"
            onClick={handeEstPomdorosIncrease}
            className="bg-white py-2 px-3 rounded-md shadow-lg border-2 border-gray-400 hover:opacity-80"
          >
            <BiSolidUpArrow size={14} className="text-gray-400" />
          </button>
          <button
            type="button"
            onClick={handleEstPomodorosDecrease}
            className="bg-white py-2 px-3 rounded-md shadow-lg border-2 border-gray-400 hover:opacity-80"
          >
            <BiSolidDownArrow size={14} className="text-gray-400" />
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-2 p-2 bg-gray-200">
        <button
          onClick={handleCancelClick}
          className="py-2 px-4 rounded-md text-gray-400 font-medium hover:text-gray-500"
        >
          Cancel
        </button>
        <button className="py-2 px-4 bg-gray-800 font-medium rounded-md text-white hover:opacity-80">
          Save
        </button>
      </div>
    </form>
  );
}