import { CounterStyled } from "./ConterStyled";

const Counter = (): JSX.Element => {
  return (
    <CounterStyled>
      <li className="counter__item">
        <div className="counter__time">02</div>
        <span className="counter__description">days</span>
      </li>
      <li className="counter__item">
        <div className="counter__time">20</div>
        <span className="counter__description">hours</span>
      </li>
      <li className="counter__item">
        <div className="counter__time">34</div>
        <span className="counter__description">minutes</span>
      </li>
      <li className="counter__item">
        <div className="counter__time">09</div>
        <span className="counter__description">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
