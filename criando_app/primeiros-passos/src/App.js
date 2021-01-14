import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Header name="Ola mundo" lista={["Home","About", "Login"]}></Header>
  );
}

export default App;
