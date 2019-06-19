import React from 'react';
import 'App.css';
import { ReactComponent as Logo } from 'assets/img/pride-march-logo-white.svg';
import Eyebrow from 'components/atoms/Eyebrow';
import H1 from 'components/atoms/H1';
import Year from 'components/atoms/Year';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Eyebrow>Eyebrow</Eyebrow>
        <H1>H1</H1>
        <Year>1969-2019</Year>
      </header>
    </div>
  );
}

export default App;
