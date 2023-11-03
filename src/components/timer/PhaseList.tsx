'use client'

import { PHASE_TYPES } from '@/lib/constants';
import { PhaseName } from '@/lib/types';
import { usePhaseActions, useSelectedPhase } from '@/store/phase';
import { MouseEvent } from 'react';

const phases: { name: PhaseName; text: string }[] = [
  {
    name: PHASE_TYPES.POMODORO.name,
    text: 'Pomodoro',
  },
  {
    name: PHASE_TYPES.SHORT_BREAK.name,
    text: 'Short Break',
  },
  {
    name: PHASE_TYPES.LONG_BREAK.name,
    text: 'Long Break',
  },
];

export default function PhaseList() {
  const selectedPhase = useSelectedPhase();
  const phaseActions = usePhaseActions();

  const handlePhaseClick = (event: MouseEvent<HTMLButtonElement>) => {
    phaseActions.changePhase(
      event.currentTarget.getAttribute('data-value') as PhaseName
    );
  };

  const isSelectedPhase = (name: PhaseName) =>
    selectedPhase.name === name ? 'font-semibold bg-red-500' : '';

  return (
    <div className="flex justify-evenly items-center">
      {phases.map((phase) => (
        <button
          key={phase.name}
          data-value={phase.name}
          className={`px-4 rounded-md text-lg text-white font-medium hover:opacity-80 
            ${isSelectedPhase(phase.name)}
          `}
          onClick={handlePhaseClick}
        >
          {phase.text}
        </button>
      ))}
    </div>
  );
}
