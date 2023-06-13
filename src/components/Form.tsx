import { useState } from 'react';

type FormProp = {
  handleSwitch: () => void
};

function Form({ handleSwitch }: FormProp) {
  const [nomeDoServico, setNomeDoServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');
  const [formValido, setFormValido] = useState(false);

  const senhaRegexLetras = /[a-zA-Z]/;
  const senhaRegexNumeros = /[0-9]/;
  const senhaRegexSimbolos = /[!@#$%¨&*()|{}<>,]/;

  const validacaoForm = () => {
    setFormValido(
      nomeDoServico !== ''
      && login !== ''
      && senha !== '' && senha.length >= 8 && senha.length <= 16
      && senhaRegexLetras.test(senha)
      && senhaRegexNumeros.test(senha)
      && senhaRegexSimbolos.test(senha),
    );
  };

  const handleNomeDoServico = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeDoServico(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    validacaoForm();
  };

  const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
    validacaoForm();
  };

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    validacaoForm();
  };

  return (
    <form action="">
      <label htmlFor="NomeDoServiço">Nome do Serviço</label>
      <input
        type="text"
        id="NomeDoServiço"
        value={ nomeDoServico }
        onChange={ handleNomeDoServico }
      />

      <label htmlFor="Login">Login</label>
      <input
        type="text"
        id="Login"
        value={ login }
        onChange={ handleLogin }
      />

      <label htmlFor="Senha">Senha</label>
      <input
        type="password"
        id="Senha"
        value={ senha }
        onChange={ handleSenha }
      />

      <label htmlFor="URL">URL</label>
      <input
        type="text"
        id="URL"
        value={ url }
        onChange={ handleUrl }
      />

      <button type="submit" disabled={ !formValido }>Cadastrar</button>

      <button type="submit" onClick={ handleSwitch }>Cancelar</button>
    </form>
  );
}

export default Form;
