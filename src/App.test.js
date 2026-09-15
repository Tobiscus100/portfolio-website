import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading and projects link', () => {
  render(<App />);
  
  // Checks that your name renders in the hero section
  const headingElement = screen.getByRole('heading', {
    name: /adeyinka oluwatobiloba/i,
  });
  expect(headingElement).toBeInTheDocument();

  // Checks that the primary project CTA exists
  const projectLink = screen.getByRole('link', {
    name: /explore projects/i,
  });
  expect(projectLink).toBeInTheDocument();
});