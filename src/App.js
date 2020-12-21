import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import { produtoData,produtoData2 } from './components/Produtos/data'; 
import Features from './components/Features';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Produtos heading='Escolha o seu favorito!' data={produtoData}/>
      <Features />
      <Produtos heading='Mais Pratos, Escolha!' data={produtoData2}/>
      <Footer />
    </Router>
  );
}

export default App;
