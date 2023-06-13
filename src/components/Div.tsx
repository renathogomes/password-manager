type DivProp = {
  senha: string
};

function DivMensagem({ senha }:DivProp) {
  const valido = 'valid-password-check';
  const invalido = 'invalid-password-check';
  const temLetraENumeros = /[a-zA-Z0-9][0-9]/;
  const temSimbolos = /[!@#$%¨&*()|{}<>,]/;
  return (
    <div>
      <p className={ senha.length >= 8 ? valido : invalido }>
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={ (senha.length >= 1
        && senha.length <= 16)
          ? valido : invalido }
      >
        Possuir até 16 caracteres
      </p>
      <p className={ temLetraENumeros.test(senha) ? valido : invalido }>
        Possuir letras e números
      </p>
      <p className={ temSimbolos.test(senha) ? valido : invalido }>
        Possuir algum caractere especial
      </p>
    </div>
  );
}

export default DivMensagem;
