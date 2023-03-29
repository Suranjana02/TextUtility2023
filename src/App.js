import  {useState} from 'react'
import './Appa.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import  Navbar from './Components/Navbar';
import  TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   //Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light'); // state variable which tells whether dark mode is enabled or not
const [alert, setAlert] = useState(null); 

const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);

}


const togglemode =()=> {
  if(mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled" , "success"); // dont make S in success as capital, it a bootstrap alert class and is used to display color accordingly based on call in alert.js
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled" , "success");
  }
}

  return (
    <>
    {/* <Navbar/> */}
    {/* <Router> */}
      <Navbar title="TextUtility"  mode={mode} togglemode={togglemode} /> 
      <Alert   alert={alert} />
      <div className="container my-3">
         {/* <Routes>   */}
           {/* Switch has been replaced by routes */}
              {/* <Route path="/" component={Home} />    to below */}
              {/* <Route path='/welcome' element={<Home/>} /> */}

            {/* <Route path="/about" element ={<About/>} > </Route>      */}
            {/* single quote and double quote in PATH both will work */}
            
             {/* <Route path = "/" element = {<TextForm   showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} ></Route>  */}

             <TextForm   showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 


         {/* </Routes>    */}
      </div>
        
    {/* </Router> */}
    </>
  );
}

export default App;
