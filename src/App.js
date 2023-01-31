import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
<Navbar title = "Textutils2"  aboutText= "About TextUtils"/>
<div className="container  my-3">
<Textform heading="Enter Text"/>
</div>

    </>
  );
}

export default App;
