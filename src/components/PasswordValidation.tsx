import styles from './PasswordValidation.module.css';

import '../global.css';

type PasswordValidationProp = {
  password: string;
};

function PasswordValidation({ password }: PasswordValidationProp) {
  const available = 'valid-password-check';
  const unavailable = 'invalid-password-check';
  const hasNumbers = /[a-zA-Z0-9][0-9]/;
  const hasLetters = /[a-zA-Z0-9][a-zA-Z]/;
  const hasSymbols = /[!@#$%¨&*()|{}<>,]/;

  return (
    <div>
      <h4
        className={ styles.title }
      >
        A senha deve possuir:

      </h4>
      <div className={ styles.bodyValidations }>
        <p className={ password.length >= 8 ? styles[available] : styles[unavailable] }>
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={
          password.length >= 1
          && password.length <= 16 ? styles[available] : styles[unavailable]
        }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ hasNumbers.test(password) && hasLetters.test(password)
            ? styles[available]
            : styles[unavailable] }
        >
          Possuir letras e números
        </p>
        <p
          className={ hasSymbols.test(password)
            ? styles[available]
            : styles[unavailable] }
        >
          Possuir algum caractere especial
        </p>
      </div>
    </div>
  );
}

export default PasswordValidation;
