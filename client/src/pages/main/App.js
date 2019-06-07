import React from 'react';
// import logo from '../../assets/images/logo.svg';
import './App.scss';
import HeaderComp from '../../components/header-component/header-component'
import MainRouter from '../../routers';

function App() {
  return (
    <div className="App">
      <HeaderComp></HeaderComp>
      <MainRouter></MainRouter>
    </div>
  );
}

export default App;
