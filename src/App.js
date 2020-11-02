import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';

function App() {
  return (
    <div className="App">
      <SignUpComponent />
      <LoginComponent />
    </div>
  );
}

export default App;
