import { render, screen } from '@testing-library/react'

const Header = () => {
  return <>Rockets</>
};
 
test('should display the nav text Rockets', () => {
  render(<Header />);
  screen.debug();
});