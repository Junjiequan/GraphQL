import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment', () => {
  const { result } = renderHook(() => useCounter(1));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);
});
