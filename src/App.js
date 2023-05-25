import './App.css'
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from 'react' ;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const  [mode , setMode] = useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
     setAlert(
      {
         msg : message,
         type : type
      }
     )
   setTimeout(()=>{
   setAlert(null);
   },2000)
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#05054d';
      showAlert("Dark mode has been enabled","success");
      // document.title='dark mode';
      // setInterval(()=>{
      //   document.title='Text Utils is amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title=' Install Text Utils';
      // },1500)
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title='light mode';
    }
  }
  
 
  return (
   
    <>
  {/* <Router> */}
    <Navbar title = "TextUtil" helpText="About" mode = {mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
  
    {/* <Switch>
          <Route exact path="/about">
          <About />
          </Route> */}

          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert}  heading="Enter a text form below " mode = {mode}/>
          {/* </Route> */}
    {/* </Switch> */}
  </div>
  {/* </Router> */}
  
   </>
  );
}



export default App;
