import React, { useState } from 'react';
import './App.css';

function App() {


  const [recebe, manda] = useState(0);

  const [ tarefa, setTarefa] = useState();

  function somando() {
    manda(recebe + 1);
  }


  function listando() {
      setTarefa(tarefa);
  }

  return (
    <>  
      <h1>Contador: {recebe} </h1>

      <button onClick={somando}>Mais 1</button>

      <input type="text" placeholder="Digite a tarefa" id="tarefa" onChange={listando}></input>

      <h3>Tarefas</h3>
      <p> { tarefa }</p>
    </>
  );

 
}

export default App;
