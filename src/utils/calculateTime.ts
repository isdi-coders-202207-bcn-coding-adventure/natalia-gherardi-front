const calculateTime = (deadLine: Date) => {
  const currentDate = new Date();

  const timeDifference = deadLine.getTime() - currentDate.getTime();
  const calculation = 1000 * 60 * 60 * 24;
  const daysLeft = Math.floor(timeDifference / calculation);
  const hoursLeft = Math.floor(
    (timeDifference % calculation) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
};

export default calculateTime;
