import { render, screen } from '@testing-library/react'

const Missions = () => {
  return <>Missions</>
};
 
test('should display the nav text Missions', () => {
  render(<Missions />);
  screen.debug();
});