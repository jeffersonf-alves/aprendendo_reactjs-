import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';


function App() {
  return (
  
    <BrowserRouter>
      <header>
      <h1>Minha página</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
      </header>
      <hr/>

      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/Sobre">
            <Sobre/>
        </Route>
      </Switch>
      <hr/>

      <footer>
        Todos os direitos Reservados
      </footer>

      
    </BrowserRouter>
  );
}

export default App;
