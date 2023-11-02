import { usePhaseActions } from '@/store/phase';
import { MdSkipNext } from 'react-icons/md';

export default function SkipButton() {
  const phaseActions = usePhaseActions();

  const handleSkipClick = () => {
    phaseActions.resetTimer();
  };

  return (
    <button
      onClick={handleSkipClick}
      className="flex justify-center items-center rounded-md p-2"
    >
      <MdSkipNext size={50} className="text-white" />
    </button>
  );
}
