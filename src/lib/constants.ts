import { Phase } from './types';

export const PHASE_TYPES: {
  [key: string]: Phase;
} = {
  POMODORO: {
    name: 'POMODORO',
    duration: 25 * 60 * 1000,
    category: 'FOCUS',
  },
  SHORT_BREAK: {
    name: 'SHORT_BREAK',
    duration: 5 * 60 * 1000,
    category: 'BREAK',
  },
  LONG_BREAK: {
    name: 'LONG_BREAK',
    duration: 15 * 60 * 1000,
    category: 'BREAK',
  },
};
