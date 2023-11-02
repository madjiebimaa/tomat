'use client';

import { useCountDown } from '@/hooks/useCountDown';
import { toTwoDigits } from '@/lib/utils';
import { useIsTimerStart } from '@/store/phase';
import PhaseList from './PhaseList';
import SkipButton from './SkipButton';
import TimerButton from './TimerButton';

export default function Timer() {
  const isTimerStart = useIsTimerStart();
  const { minutes, seconds } = useCountDown(isTimerStart);

  const time = `${toTwoDigits(minutes)}:${toTwoDigits(seconds)}`;

  return (
    <div className="flex flex-col gap-8 p-4 rounded-md bg-red-400">
      <PhaseList />
      <div className="flex justify-center items-center">
        <p className="text-8xl text-white font-bold">{time}</p>
      </div>
      <div className="relative flex justify-center items-center">
        <TimerButton />
        {isTimerStart ? (
          <div className="absolute right-10">
            <SkipButton />
          </div>
        ) : null}
      </div>
    </div>
  );
}
