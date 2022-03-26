import { render, screen } from '@testing-library/react';

const Rockets = () => <>Rockets</>;

test('should display the nav text Rockets', () => {
  render(<Rockets />);
  screen.debug();
});
