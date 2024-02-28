import React, {} from 'react';
import './App.css';
import LoginSignup from './containers/LoginSignup.js'

/*import Table from './Table.js'
import {BrowserRouter,Routes, Route} from 'react-router-dom'*/
function App() {
  return(
    /*<BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignup/>} ></Route>
    </Routes> 
    </BrowserRouter>*/
    <div>
      <LoginSignup/>
    </div>
  );
}

export default App;
