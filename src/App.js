import React from 'react';
import NavigationBar from './components/macros/NavigationBar'
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <h1> Here is the title</h1>
        <p>
         here we are
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
