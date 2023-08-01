
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
//import About from './components/About';
//import {
 // BrowserRouter as Router,
  //Routes,Route
//} from "react-router-dom";

function App() {

  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState();
  const showAlert = (message,type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
    setAlert();
    },1500)

    
  }
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has enabled","success")
    }
    else
    {
      setMode('light') 
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
 
  return (
  <>
  {/*<Router>*/}
  <Navbar title ="Textutils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
  <div className='container my-3'>
    {/*<Routes>*/}
        {/*<Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />*/}
        {/*<Route exact path="/about" element={<About/>} />*/}
  {/*  </Routes>*/}
  </div>
  {/*</Router> */}
  </>

  );
}

export default App;
