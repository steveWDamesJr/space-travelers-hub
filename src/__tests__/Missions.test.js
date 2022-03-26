import { render, screen } from '@testing-library/react'

const Description = () => {
  return <>Description</>
};
 
test('should display the nav text Description', () => {
  render(<Description />);
  screen.debug();
});