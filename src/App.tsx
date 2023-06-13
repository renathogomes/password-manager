import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [formSwitch, setFormSwitch] = useState(false);

  const handleSwitch = () => {
    setFormSwitch(!formSwitch);
  };

  return (
    <div>
      <h1>Gerenciador de Senhas</h1>
      {
        formSwitch ? <Form handleSwitch={ handleSwitch } />
          : <button onClick={ handleSwitch }>Cadastrar nova senha</button>
      }
    </div>
  );
}

export default App;
