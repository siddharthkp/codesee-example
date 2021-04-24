import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={() => setCount(count - 1)}> - </button>
          {count}
          <button onClick={() => setCount(count + 1)}> + </button>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
