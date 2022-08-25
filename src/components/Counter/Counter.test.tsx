import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Given a Counter component", () => {
  describe("When instantiated and it receives a time object", () => {
    test("Then it should show 4 divs with the properties of the object", () => {
      const time = {
        daysLeft: 4,
        hoursLeft: 3,
        minutesLeft: 2,
        secondsLeft: 1,
      };

      render(<Counter time={time} />);
      const timeDivs = [
        screen.getByText(time.daysLeft),
        screen.getByText(time.hoursLeft),
        screen.getByText(time.minutesLeft),
        screen.getByText(time.secondsLeft),
      ];

      timeDivs.forEach((div) => {
        expect(div).toBeInTheDocument();
      });
    });
  });
});
