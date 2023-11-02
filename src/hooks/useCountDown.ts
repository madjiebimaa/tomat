import { getTimerUnit } from '@/lib/utils';
import { useIsTimerStart, usePhaseActions, useTimer } from '@/store/phase';
import { useEffect } from 'react';

export const useCountDown = (isRunning: boolean = false) => {
  const timer = useTimer();
  const isTimerStart = useIsTimerStart();
  const phaseActions = usePhaseActions();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isRunning && timer > 0) {
        phaseActions.decreaseTimer();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timer, isTimerStart, phaseActions]);

  return getTimerUnit(timer);
};
