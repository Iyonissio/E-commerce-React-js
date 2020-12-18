import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import { produtoData } from './components/Produtos/data'; 


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Produtos heading='Escolha o seu favorito' data={produtoData}/>
    </Router>
  );
}

export default App;
