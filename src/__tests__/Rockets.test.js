import { render, screen } from '@testing-library/react'

const Rockets = () => {
  return <>Rockets</>
};
 
test('should display the nav text Rockets', () => {
  render(<Rockets />);
  screen.debug();
});