'use client';

import { useCountDown } from '@/hooks/useCountDown';
import { PHASE_TYPES } from '@/lib/constants';
import { PhaseName } from '@/lib/types';
import {
  useIsTimerStart,
  usePhaseActions,
  useSelectedPhase,
} from '@/store/phase';
import { MouseEvent } from 'react';

export default function Timer() {
  const selectedPhase = useSelectedPhase();
  const isTimerStart = useIsTimerStart();
  const { minutes, seconds } = useCountDown(isTimerStart);
  const phaseActions = usePhaseActions();

  const handlePhaseClick = (event: MouseEvent<HTMLButtonElement>) => {
    phaseActions.changePhase(
      event.currentTarget.getAttribute('data-value') as PhaseName
    );
  };

  const handleTimerClick = async () => {
    await new Audio('/audio/switch.mp3').play();
    phaseActions.toggleTimer();
  };

  const isSelectedPhase = (name: PhaseName) =>
    selectedPhase.name === name ? 'font-semibold bg-red-500' : '';

  return (
    <div className="flex flex-col gap-8 p-4 rounded-md bg-red-400">
      <div className="flex justify-evenly items-center">
        <button
          data-value={PHASE_TYPES.POMODORO.name}
          className={`px-4 rounded-md text-lg text-white font-medium hover:opacity-80 ${isSelectedPhase(
            PHASE_TYPES.POMODORO.name
          )}`}
          onClick={handlePhaseClick}
        >
          Pomodoro
        </button>
        <button
          data-value={PHASE_TYPES.SHORT_BREAK.name}
          className={`px-4 rounded-md text-lg text-white font-medium hover:opacity-80 ${isSelectedPhase(
            PHASE_TYPES.SHORT_BREAK.name
          )}`}
          onClick={handlePhaseClick}
        >
          Short Break
        </button>
        <button
          data-value={PHASE_TYPES.LONG_BREAK.name}
          className={`px-4 rounded-md text-lg text-white font-medium hover:opacity-80 ${isSelectedPhase(
            PHASE_TYPES.LONG_BREAK.name
          )}`}
          onClick={handlePhaseClick}
        >
          Long Break
        </button>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-8xl text-white font-bold">
          {minutes}:
          {seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleTimerClick}
          className={`py-4 px-16 text-2xl font-semibold uppercase bg-white rounded-md hover:opacity-80 text-red-500`}
        >
          {isTimerStart ? 'pause' : 'start'}
        </button>
      </div>
    </div>
  );
}
