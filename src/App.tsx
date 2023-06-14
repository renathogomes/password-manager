import { useState } from 'react';
import './App.css';
import Form, { Servico } from './components/Form';

function App() {
  const [formSwitch, setFormSwitch] = useState(false);
  const [servicos, setServicos] = useState<Servico[]>([]);

  const handleSwitch = () => {
    setFormSwitch(!formSwitch);
  };

  return (
    <div>
      <h1>Gerenciador de Senhas</h1>
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
              {servicos.map((servico) => (
                <li key={ servico.nome }>
                  <a href={ servico.url }>
                    {servico.nome}
                  </a>
                  <p>{ servico.login }</p>
                  <p>{ servico.senha }</p>
                </li>
              ))}
            </ul>)}

      </div>
    </div>
  );
}

export default App;
