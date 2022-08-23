import styled from "styled-components";

const CounterStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  .counter {
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__description {
      color: #ebedec;
      font-size: 0.9rem;
    }
    &__time {
      padding: 16px 26px;
      background-color: #ffc700;
      border-radius: 10px;
      width: 20px;
      color: #243342;
      font-size: 2rem;
      display: flex;
      justify-content: center;
    }
  }
`;

export default CounterStyled;
