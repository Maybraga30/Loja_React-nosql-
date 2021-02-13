import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import contato from "./screens/contato";
import ondeestamos from "./screens/nossaslojas";
import nossaslojas from "./screens/nossaslojas";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Watercolor</a>
          <a className="" href="/nossaslojas">Onde Estamos</a>
          <a className="" href="/contato">Contato</a>
        </div>
        <div>
          <a href="/cart">Carrinho</a>
          <a href="/signin">Entrar</a>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/contato" component={contato} />
          <Route path="/nossaslojas" component={nossaslojas} />
        
      </main>
      <footer className="row center">Todos os direitos reservados</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
