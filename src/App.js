import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';

function App() {

  const[mode, setMode] = useState('light'); // wheather dark mode is enabled or not

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#252729';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Navbar title = "Word God" mode={mode}  toggleMode={toggleMode} />
      <div className="container  my-3">
      <Textform heading="Enter Text"  mode={mode}/>
      {/* <About/> */}
      </div>

    </>
  );
}

export default App;
