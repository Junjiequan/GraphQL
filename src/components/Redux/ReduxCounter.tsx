import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, CounterState, increment, decrement, incrementByAmount } from '../../redux__classic/store';

const ReduxCounter = () => {
  const [amount, setAmount] = useState<number>(0);
  const count: CounterState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div>
        <input
          style={{ height: '100%' }}
          type='number'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.currentTarget.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>change by amount</button>
      </div>
      <h1 style={{ color: 'red', fontWeight: 'bold' }}> {count.value}</h1>
    </>
  );
};

export default ReduxCounter;
