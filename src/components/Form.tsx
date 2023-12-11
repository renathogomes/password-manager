import React, { useState } from 'react';
import PasswordValidation from './PasswordValidation';
import { FormProps, Service } from '../types';

import styles from './Form.module.css';

function Form({ handleSwitch, service, setService }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [formValid, setFormValid] = useState(false);

  const passwordRegexLetras = /[a-zA-Z]/;
  const passwordRegexNumeros = /[0-9]/;
  const passwordRegexSimbolos = /[!@#$%¨&*()|{}<>,]/;

  const validacaoForm = () => {
    setFormValid(
      serviceName !== ''
      && login !== ''
      && password !== ''
      && password.length >= 8
      && password.length <= 16
      && passwordRegexLetras.test(password)
      && passwordRegexNumeros.test(password)
      && passwordRegexSimbolos.test(password),
    );
  };

  const initialState = () => {
    setServiceName('');
    setLogin('');
    setPassword('');
    setUrl('');
    setFormValid(false);
  };

  const handleServiceName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServiceName(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    validacaoForm();
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    validacaoForm();
  };

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    validacaoForm();
  };

  const handleRegister = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newService: Service = {
      name: serviceName,
      login,
      password,
      url,
    };
    handleSwitch();
    setService([...service, newService]);

    initialState();
  };

  return (
    <>
      <form
        onSubmit={ handleRegister }
        className={ styles.frm }
      >
        <label htmlFor="serviceName">Nome do Serviço</label>
        <input
          type="text"
          id="serviceName"
          value={ serviceName }
          onChange={ handleServiceName }
        />
        <label htmlFor="Login">Login</label>
        <input
          type="text"
          id="Login"
          value={ login }
          onChange={ handleLogin }
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={ password }
          onChange={ handlePassword }
        />
        <label htmlFor="URL">URL</label>
        <input
          type="text"
          id="URL"
          value={ url }
          onChange={ handleUrl }
        />
        <div className={ styles.btns }>
          <button
            type="button"
            onClick={ handleSwitch }
            className={ styles.btn2 }
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={ !formValid }
            className={ !formValid ? styles.btnDisabled : styles.btn }
          >
            Cadastrar
          </button>
        </div>
      </form>
      <PasswordValidation password={ password } />
    </>
  );
}
export default Form;
