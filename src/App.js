import React, {} from 'react';
import './App.css';
import LoginSignup from './containers/LoginSignup.js'
import ParticlesBg from 'particles-bg'
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
      <ParticlesBg type="tadpole" bg={true} />
      <LoginSignup/>
    </div>
  );
}

export default App;
