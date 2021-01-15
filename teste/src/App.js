import React, { useState } from 'react';
import './App.css';

function App() {

  const [recebe, manda] = useState(0);

  function somando() {
    manda(recebe + 1);
  }

  return (
    <>
      <h1>Contador: {recebe} </h1>

      <button onClick={somando}>Mais 1</button>
    </>
  );
}

export default App;
