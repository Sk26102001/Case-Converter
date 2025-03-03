// import React, { useState } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
//  //"
//  import Navbar from "./components/Navbar";

// import TextForm from './components/TextForm';
// import About from './components/About';
// import Alert from './components/Alert';

// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

// import  "./App.css";

// function App(){
//   const [mode,setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert=(message, type)=>{
//     setAlert({
//       msg:message,
//       type:type
//     })
//     setTimeout(() => {
//       setAlert(null);
      
//     }, 2000);
//   }

//   const toggleMode=()=>{
//     if(mode==='light'){
//       setMode('dark');
//       document.body.style.backgroundColor="#042743";
//       showAlert("Dark mode is enable","success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor="white";
//       showAlert("light mode is enable","success");
//     }
//   }

//   return( 
//     <>
 
      
      
//     <Router>
  
// <Navbar title="More" name="House" aboutText="About" mode={mode} toggleMode={toggleMode}/>
// <Alert alert={alert}/>

// <div className='container'>

 
// <Routes>
//           <Route path="/" element={<TextForm showAlert={showAlert} heading="Convert case:" mode={mode} />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>
// </div>
// </Router>



//     </>

//   );
// }
// export default App;

import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="More" name="House" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Convert case:" mode={mode} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
