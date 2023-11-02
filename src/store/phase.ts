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
    nextPhase: () => void;
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

const phaseStore = create<PhaseState & PhaseActions>()((set, get) => ({
  ...initialState,
  actions: {
    changePhase: (name) =>
      set({
        selectedPhase: PHASE_TYPES[name],
        timer: PHASE_TYPES[name].duration,
      }),
    nextPhase: () =>
      set((state) => {
        switch (state.selectedPhase) {
          case PHASE_TYPES.POMODORO:
            return { selectedPhase: PHASE_TYPES.SHORT_BREAK };
          case PHASE_TYPES.SHORT_BREAK:
            return { selectedPhase: PHASE_TYPES.LONG_BREAK };
          case PHASE_TYPES.LONG_BREAK:
            return { selectedPhase: PHASE_TYPES.POMODORO };
          default:
            return state;
        }
      }),
    decreaseTimer: () => set((state) => ({ timer: state.timer - 1000 })),
    toggleTimer: () => set((state) => ({ isTimerStart: !state.isTimerStart })),
    resetTimer: () =>
      set((state) => {
        state.actions.nextPhase();

        return {
          timer: get().selectedPhase.duration,
          isTimerStart: initialState.isTimerStart,
        };
      }),
  },
}));

export const useSelectedPhase = () =>
  phaseStore((state) => state.selectedPhase);
export const useTimer = () => phaseStore((state) => state.timer);
export const useIsTimerStart = () => phaseStore((state) => state.isTimerStart);
export const usePhaseActions = () => phaseStore((state) => state.actions);
