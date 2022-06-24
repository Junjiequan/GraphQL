import React from 'react';
import './Button.scss';

export type Label = {
  label: string;
};
const Button = ({ label }: Label) => {
  return (
    <button data-testid='button' className='button'>
      {label}
    </button>
  );
};

export default Button;
