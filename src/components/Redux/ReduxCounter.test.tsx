import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../redux__classic/store';
import ReduxCounter from './ReduxCounter';

import '@testing-library/jest-dom';

test('redux increment', () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent('0');

  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);

  expect(counter).toHaveTextContent('1');
});

test('redux increment again', () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent('0');

  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);

  expect(counter).toHaveTextContent('1');
});
