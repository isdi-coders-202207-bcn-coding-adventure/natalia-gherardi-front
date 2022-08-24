import calculateTime from "../../utils/calculateTime";
import CounterStyled from "./ConterStyled";

const date = new Date("aug 21, 2022 9:31:00 GMT");

calculateTime(date);

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
