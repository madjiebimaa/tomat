export type Color = {
  primary: {
    text: string;
    background: string;
    border: string;
  };
  secondary: {
    text: string;
    background: string;
    border: string;
  };
  tertiary: {
    text: string;
    background: string;
    border: string;
  };
};

export type PhaseName = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
export type PhaseCategory = 'FOCUS' | 'BREAK';
export type Phase = {
  name: PhaseName;
  duration: number;
  category: PhaseCategory;
};
