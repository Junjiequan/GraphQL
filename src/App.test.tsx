import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux__classic/store';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/testApp/i);
  expect(linkElement).toBeInTheDocument();
});
