import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light'); // wheather dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000)
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#252729';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }


  return (
    <Router>
      <Navbar title = "Word God" mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container  my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert}  heading="Enter Text"  mode={mode}/>
          </Route>
        </Switch>

    
      </div>

    </Router>
  );
}

export default App;
