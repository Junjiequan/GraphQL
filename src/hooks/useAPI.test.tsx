import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import '@testing-library/jest-dom';
import useAPI from './useAPI';
const URL = 'http://localhost:3000';

const server = setupServer(
  rest.get(`${URL}/api`, (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'helloooo',
      })
    );
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetch data correctly', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());
  await waitForNextUpdate();
  expect(result.current).toEqual({ name: 'helloooo' });
});
