import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="content main">
        <h1>Scroll to main</h1>
      </div>
    </div>
  );
}

export default App;
