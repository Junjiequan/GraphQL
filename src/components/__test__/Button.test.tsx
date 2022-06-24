import Button from '../Button/Button';
import { createRoot } from 'react-dom/client';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

const root = createRoot(document.createElement('div'));

it('renders without crashing', async () => {
  await act(async () => {
    root.render(<Button label={''}></Button>);
  });
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label='click me'></Button>);
  expect(getByTestId('button')).toHaveTextContent('click me');
});
