import React, { useState } from 'react';
// import DivMensagem from './DivMensagem';
import { FormProps, Service } from '../../types';

function Form({ handleSwitch, service, setService }: FormProps) {
  const [nameService, setNameService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [formValido, setFormValido] = useState(false);

  // const passwordRegexLetras = /[a-zA-Z]/;
  // const passwordRegexNumeros = /[0-9]/;
  // const passwordRegexSimbolos = /[!@#$%¨&*()|{}<>,]/;

  // const validacaoForm = () => {
  //   setFormValido(
  //     nameService !== '' &&
  //     login !== '' &&
  //     password !== '' &&
  //     password.length >= 8 &&
  //     password.length <= 16 &&
  //     passwordRegexLetras.test(password) &&
  //     passwordRegexNumeros.test(password) &&
  //     passwordRegexSimbolos.test(password)
  //   );
  // };

  const estadoInicial = () => {
    setNameService('');
    setLogin('');
    setPassword('');
    setUrl('');
    setFormValido(false);
  };

  const handlenameService = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameService(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleCadastrar = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const novoServico: Service = {
      name: nameService,
      login,
      password,
      url,
    };
    handleSwitch();
    setService([...service, novoServico]);

    estadoInicial();
  };

  return (
    <form onSubmit={ handleCadastrar }>
      <label htmlFor="NomeDoServiço">Nome do Serviço</label>
      <input
        type="text"
        id="NomeDoServiço"
        value={ nameService }
        onChange={ handlenameService }
      />
      <label htmlFor="Login">Login</label>
      <input
        type="text"
        id="Login"
        value={ login }
        onChange={ handleLogin }
      />
      <label htmlFor="password">password</label>
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
      {/* <DivMensagem password={ password } /> */}
      <button type="submit" disabled={ !formValido }>Cadastrar</button>
      <button type="submit" onClick={ handleSwitch }>Cancelar</button>
    </form>
  );
}

export default Form;
