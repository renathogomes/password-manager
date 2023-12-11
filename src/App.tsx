import React, { useState } from 'react';
import Form from './components/Form';
import { Service } from './types';
import Header from './components/Header';
import Button from './components/Button';
import AbsenceFrom from './components/AbsenceFrom';

import styles from './App.module.css';

function App() {
  const [formSwitch, setFormSwitch] = useState(false);
  const [service, setService] = useState<Service[]>([]);

  const handleSwitch = () => {
    setFormSwitch(!formSwitch);
  };

  const removeServices = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { id } = event.target as HTMLButtonElement;
    const elementoResgatado = service.slice(
      Number(id),
      Number(id + 1),
    );
    const newService = service.filter(
      (sv) => sv !== elementoResgatado[0],
    );
    setService(newService);
  };

  const [checked, setChecked] = useState(false);

  return (
    <div className={ styles.disp }>
      <Header />
      {
      service.length > 0
      && (
        <label
          htmlFor="checkbox"
          className={ styles.btn }
        >
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
        <Button
          text="Adicionar nova senha"
          handleClick={ handleSwitch }
        />)}
      <div>
        {service.length === 0 ? (
          <AbsenceFrom />
        ) : (
          <ul className={ styles.list }>
            {service.map((servic, index) => (
              <li
                key={ servic.name }
                className={ styles.regis }
              >
                <a href={ servic.url }>{servic.name}</a>
                <p>{servic.login}</p>
                {checked ? '******' : <p>{servic.password}</p>}
                <button
                  id={ index.toString() }
                  onClick={ (e) => removeServices(e) }
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
