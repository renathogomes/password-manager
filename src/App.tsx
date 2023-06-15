import { useState } from 'react';
import './App.css';
import Form, { Servico } from './components/Form';

function App() {
  const [formSwitch, setFormSwitch] = useState(false);
  const [servicos, setServicos] = useState<Servico[]>([]);

  const handleSwitch = () => {
    setFormSwitch(!formSwitch);
  };

  const removeServicos = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id } = event.target as HTMLButtonElement;
    const elementoResgatado = servicos.slice(Number(id), Number(id + 1));
    const novoServico = servicos.filter((servico) => servico !== elementoResgatado[0]);
    setServicos(novoServico);
  };

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>Gerenciador de Senhas</h1>
      <label htmlFor="checkbox">
        Esconder senhas
        <input
          id="checkbox"
          onChange={ () => setChecked(!checked) }
          type="checkbox"
        />
      </label>
      {
        formSwitch ? <Form
          handleSwitch={ handleSwitch }
          servicos={ servicos }
          setServicos={ setServicos }
        />
          : <button onClick={ handleSwitch }>Cadastrar nova senha</button>
      }
      <div>
        { servicos.length === 0
          ? <p>Nenhuma senha cadastrada</p>
          : (
            <ul>
              {servicos.map((servico, index) => (
                <li key={ servico.nome }>
                  <a href={ servico.url }>
                    {servico.nome}
                  </a>
                  <p>{ servico.login }</p>
                  {checked ? '******' : <p>{ servico.senha }</p>}
                  <button
                    id={ index.toString() }
                    onClick={ (e) => removeServicos(e) }
                    data-testid="remove-btn"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>)}

      </div>
    </div>
  );
}

export default App;
