import './App.css';
import Home from './views/Home';
import React from 'react';
import { StateContext } from './contexts/StateContext'

function App() {
  return (
    <StateContext>
      <div className="App">
        <section className="App-section">
          <Home />

        </section>
      </div>
    </StateContext>


  );
}

export default App;
