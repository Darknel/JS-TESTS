import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class="app">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
