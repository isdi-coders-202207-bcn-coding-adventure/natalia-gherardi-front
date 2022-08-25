import CounterStyled from "./ConterStyled";

interface CounterProps {
  time: {
    daysLeft: number;
    hoursLeft: number;
    minutesLeft: number;
    secondsLeft: number;
  };
}

const Counter = ({
  time: { daysLeft, hoursLeft, minutesLeft, secondsLeft },
}: CounterProps): JSX.Element => {
  return (
    <CounterStyled>
      <li className="counter__item">
        <div className="counter__time">{daysLeft}</div>
        <span className="counter__description">days</span>
      </li>
      <li className="counter__item">
        <div className="counter__time">{hoursLeft}</div>
        <span className="counter__description">hours</span>
      </li>
      <li className="counter__item">
        <div className="counter__time">{minutesLeft}</div>
        <span className="counter__description">minutes</span>
      </li>
      <li className="counter__item">
        <div className="counter__time">{secondsLeft}</div>
        <span className="counter__description">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
