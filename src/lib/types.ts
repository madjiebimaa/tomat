export type PhaseName = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
export type PhaseCategory = 'FOCUS' | 'BREAK';
export type Phase = {
  name: PhaseName;
  duration: number;
  category: PhaseCategory;
};

export type Task = {
  id: string;
  name: string;
  estimation: number;
};
