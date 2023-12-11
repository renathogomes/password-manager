import React from 'react';

import styles from './Button.module.css';

import '../global.css';

type ButtonProps = {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ text, handleClick }: ButtonProps) {
  return (
    <button
      onClick={ handleClick }
      className={ styles.btn }
    >
      { text }
    </button>
  );
}

export default Button;
