type DivProp = {
  senha: string
};

function DivMensagem(senha:DivProp) {
  return (
    <div>
      <p className={ senha.length >= 8 } />
    </div>
  );
}
