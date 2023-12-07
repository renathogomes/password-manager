import React, { useState } from 'react';
import Form from './components/Form/Form';
import { Service } from './types';

function App() {
  const [formSwitch, setFormSwitch] = useState(false);
  const [service, setService] = useState<Service[]>([]);

  const handleSwitch = () => {
    setFormSwitch(!formSwitch);
  };

  const removeServicos = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { id } = event.target as HTMLButtonElement;
    const elementoResgatado = service.slice(
      Number(id),
      Number(id + 1),
    );
    const novoServico = service.filter(
      (sv) => sv !== elementoResgatado[0],
    );
    setService(novoServico);
  };

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>Gerenciador de Senhas</h1>
      {
      service.length > 0
      && (
        <label htmlFor="checkbox">
          Esconder senhas
          <input
            id="checkbox"
            onChange={ () => setChecked(!checked) }
            type="checkbox"
          />
        </label>
      )
      }
      {formSwitch ? (
        <Form
          handleSwitch={ handleSwitch }
          service={ service }
          setService={ setService }
        />
      ) : (
        <button onClick={ handleSwitch }>Cadastrar nova senha</button>
      )}
      <div>
        {service.length === 0 ? (
          <p>Nenhuma senha cadastrada</p>
        ) : (
          <ul>
            {service.map((servic, index) => (
              <li key={ servic.name }>
                <a href={ servic.url }>{servic.name}</a>
                <p>{servic.login}</p>
                {checked ? '******' : <p>{servic.password}</p>}
                <button
                  id={ index.toString() }
                  onClick={ (e) => removeServicos(e) }
                  data-testid="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
