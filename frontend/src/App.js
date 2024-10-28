import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'; // Use 'black' for dark mode
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Use 'white' for light mode
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
