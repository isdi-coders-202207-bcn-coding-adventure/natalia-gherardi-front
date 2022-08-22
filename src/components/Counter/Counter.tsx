const Counter = (): JSX.Element => {
  return (
    <ul className="counter">
      <li>
        <div className="counter__time">
          02
          <h2 className="counter__description">days</h2>
        </div>
      </li>
      <li>
        <div className="counter__time">
          20
          <h2 className="counter__description">hours</h2>
        </div>
      </li>
      <li>
        <div className="counter__time">
          34
          <h2 className="counter__description">minutes</h2>
        </div>
      </li>
      <li>
        <div className="counter__time">
          09
          <h2 className="counter__description">seconds</h2>
        </div>
      </li>
    </ul>
  );
};

export default Counter;
