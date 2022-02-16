import { render, screen } from '@testing-library/react';
import App from './App';

test('Inputs should initially be empty', () => {
  render(<App />);
  const emailInputElement = screen.getByRole('textbox');
  expect(emailInputElement.value).toBe('');
});
