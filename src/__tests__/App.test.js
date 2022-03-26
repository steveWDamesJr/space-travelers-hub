import { render, screen } from '@testing-library/react';

const Header = () => <>Rockets</>;

test('should display the nav text Rockets', () => {
  render(<Header />);
  screen.debug();
});
