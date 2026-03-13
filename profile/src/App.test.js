import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navbar branding', () => {
  render(<App />);
  const heroHeading = screen.getByRole('heading', {
    name: /vishank singh/i,
    level: 1,
  });
  expect(heroHeading).toBeInTheDocument();
});
