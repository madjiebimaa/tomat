'use client';

import { useSelectedPhase, useTimer } from '@/store/phase';

export default function ProgressBar() {
  const selectedPhase = useSelectedPhase();
  const timer = useTimer();

  const progress = (timer / selectedPhase.duration) * 100;

  return (
    <div className="bg-red-600  h-[1px]">
      <div
        className="bg-white h-[2px]"
        style={{ width: `${100 - progress}%` }}
      />
    </div>
  );
}
