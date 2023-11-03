'use client'

import { useIsTimerStart, usePhaseActions } from '@/store/phase';

export default function TimerButton() {
  const isTimerStart = useIsTimerStart();
  const phaseActions = usePhaseActions();

  const handleTimerClick = async () => {
    await new Audio('/audio/switch.mp3').play();
    phaseActions.toggleTimer();
  };

  return (
    <button
      onClick={handleTimerClick}
      className={`py-4 px-16 text-2xl font-semibold uppercase bg-white rounded-md hover:opacity-80 text-red-500`}
    >
      {isTimerStart ? 'pause' : 'start'}
    </button>
  );
}
