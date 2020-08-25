import React from 'react';
import { fireEvent, getByLabelText, getByRole, getByText, render, screen, waitFor, act } from '@testing-library/react';
import App from './App';



test('renders Client Profile label', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Client Profile/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders email required error', async() => {
  const { getByText, getByTestId, findAllByText } = render(<App />);

  const saveButton = getByTestId('_saveButtonTest');
  const emailInput = getByTestId('_emailInputTest');

  fireEvent.change(emailInput, {
    target: { value: 'hayashiki@example.com' }
  })
  fireEvent.click(saveButton);
  expect(findAllByText( 'This field is required')).toBeTruthy()
});
