import { PHASE_TYPES } from '@/lib/constants';
import { Phase, PhaseName } from '@/lib/types';
import { create } from 'zustand';

type PhaseState = {
  selectedPhase: Phase;
  timer: number;
  isTimerStart: boolean;
};

type PhaseActions = {
  actions: {
    changePhase: (name: PhaseName) => void;
    decreaseTimer: () => void;
    toggleTimer: () => void;
    resetTimer: () => void;
  };
};

const initialState: PhaseState = {
  selectedPhase: PHASE_TYPES.POMODORO,
  timer: PHASE_TYPES.POMODORO.duration,
  isTimerStart: false,
};

const phaseStore = create<PhaseState & PhaseActions>()((set) => ({
  ...initialState,
  actions: {
    changePhase: (name) =>
      set({
        selectedPhase: PHASE_TYPES[name],
        timer: PHASE_TYPES[name].duration,
      }),
    decreaseTimer: () => set((state) => ({ timer: state.timer - 1000 })),
    toggleTimer: () => set((state) => ({ isTimerStart: !state.isTimerStart })),
    resetTimer: () =>
      set({
        timer: initialState.timer,
        isTimerStart: initialState.isTimerStart,
      }),
  },
}));

export const useSelectedPhase = () =>
  phaseStore((state) => state.selectedPhase);
export const useTimer = () => phaseStore((state) => state.timer);
export const useIsTimerStart = () => phaseStore((state) => state.isTimerStart);
export const usePhaseActions = () => phaseStore((state) => state.actions);
