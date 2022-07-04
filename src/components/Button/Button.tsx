import useCounter from '../../hooks/useCounter';
import './Button.scss';

const Button = ({ label }: { label: string }) => {
  const { count, increment, setCount } = useCounter(5);

  const multiplyBy2 = () => setCount((prev) => prev * 2);
  return (
    <>
      <button onClick={increment()}>add1</button>
      <button onClick={multiplyBy2}>multiply</button>
      <button data-testid='button' className='button' onClick={increment(100)}>
        {label}
      </button>
      <div>{count}</div>
    </>
  );
};

export default Button;
