import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './componentes/Searchbox';



function App() {
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox frasePronta="Faça sua busca..."/>

      <SearchBox frasePronta="Digite seu Nome"/>


    </>
  );
}

export default App;
