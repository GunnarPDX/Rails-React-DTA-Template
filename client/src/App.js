import React from 'react';
import './App.css';

import SessionManager from "./authentication/SessionManager";
import ValidationTest from "./authentication/ValidationTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
        >
          Hello!
        </a>

          <SessionManager/>

          <ValidationTest/>

      </header>

    </div>
  );
}

export default App;
