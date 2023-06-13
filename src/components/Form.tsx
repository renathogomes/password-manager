import { useState } from "react";

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

  return (
    <form action="">
      <label htmlFor="NomeDoServiço">Nome do Serviço</label>
      <input type="text" id="NomeDoServiço" />

      <label htmlFor="Login">Login</label>
      <input type="text" id="Login" />

      <label htmlFor="Senha">Senha</label>
      <input type="password" id="Senha" />

      <label htmlFor="URL">URL</label>
      <input type="text" id="URL" />

      <button type="submit">Cadastrar</button>

      <button type="submit" onClick={ handleSwitch }>Cancelar</button>
    </form>
  );
}

export default Form;
