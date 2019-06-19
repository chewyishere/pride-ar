import React from 'react';
import logo from 'logo.svg';
import 'App.css';
import { ReactComponent as Logo } from 'assets/img/pride-march-logo-white.svg';
import Eyebrow from 'components/atoms/Eyebrow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
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
          Learn React
        </a>
        <Eyebrow>TEST</Eyebrow>
      </header>
    </div>
  );
}

export default App;
