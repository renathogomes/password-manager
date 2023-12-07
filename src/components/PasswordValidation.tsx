import styles from './PasswordValidation.module.css';

type PasswordValidationProp = {
  password: string;
};

function PasswordValidation({ password }: PasswordValidationProp) {
  const available = 'valid-password-check';
  const unavailable = 'invalid-password-check';
  const hasLettersAndNumbers = /[a-zA-Z0-9][0-9]/;
  const hasSymbols = /[!@#$%¨&*()|{}<>,]/;

  return (
    <div>
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
        className={ hasLettersAndNumbers.test(password)
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
  );
}

export default PasswordValidation;
