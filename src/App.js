import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/header-component/header-component'
function App() {
  return (
    <div className="App">
      <HeaderComp></HeaderComp>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NSX 2019
        </a>
      </header>
    </div>
  );
}

export default App;
