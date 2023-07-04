export const generateRandomNumber = () => {
  const min = 7200;
  const max = 7560;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
