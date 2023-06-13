type DivProp = {
  senha: string
};

function DivMensagem(senha:DivProp) {
  const valido = 'senha e/ou login válido';
  const invalido = 'senha e/ou login inválido';
  return (
    <div>
      <p className={ senha.length >= 8 ? valido : invalido } />
    </div>
  );
}

export default DivMensagem;
