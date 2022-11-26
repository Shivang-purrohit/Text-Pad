
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const switchMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2c3e59'
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
   <>
  
  <Router>
 <Navbar title="TextPad" mode={mode} switchMode={switchMode}  />
 <Alert alert={alert} />
 <div className="container my-3">
 
 {/* <About /> */}

           <Routes>
          <Route path="/about" element={<About mode={mode} />}/>
           
           
           

           
          <Route path="/home" element={ <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}/>
           
            
            </Routes>
            
        {/*   <Router path="/">
         
          </Router>
           */}
 </div>
 </Router>

   </>
  );
}

export default App;
