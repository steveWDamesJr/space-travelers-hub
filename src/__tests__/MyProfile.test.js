import { render, screen } from '@testing-library/react';

const Missions = () => <>Missions</>;

test('should display the nav text Missions', () => {
  render(<Missions />);
  screen.debug();
});
