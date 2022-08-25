import styled from "styled-components";
import Header from "../Header/Header";
import calculateTime from "../../utils/calculateTime";
import { useState } from "react";
import { Counter } from "../Counter/Counter";

const deadLine = new Date("aug 25, 2022 00:00:00 GMT+2");

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const Layout = (): JSX.Element => {
  const [time, setTime] = useState({
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0,
  });

  setInterval(() => {
    setTime(calculateTime(deadLine));
  }, 1000);

  return (
    <StyledContainer>
      <Header />
      <Counter time={time} />
    </StyledContainer>
  );
};

export default Layout;
