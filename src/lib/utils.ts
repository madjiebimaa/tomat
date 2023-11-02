export const getTimerUnit = (duration: number) => {
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);
  return { minutes, seconds };
};

export const toTwoDigits = (num: number) => {
  return num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};
