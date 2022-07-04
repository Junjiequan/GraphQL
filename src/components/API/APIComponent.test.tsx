import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import APIComponent from './APIComponent';

const URL = 'http://localhost:3000';
const server = setupServer(
  rest.get(`${URL}/api`, (req, res, ctx) => {
    return res(ctx.json({ name: 'John son' }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders data correctly', async () => {
  render(<APIComponent />);

  const data = await waitFor(() => screen.getByRole('contentinfo'));
  expect(data.textContent).toBe('hello');
});
