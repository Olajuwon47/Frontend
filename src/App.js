import React, {} from 'react';
import './App.css';
import LoginSignup from './containers/LoginSignup.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LocationTracker from './LocationTracker';
import ParticlesBg from 'particles-bg'
/*import Table from './Table.js'*/
import {BrowserRouter,Routes, Route} from 'react-router-dom'
const App = () => {
  return(
    <div>
    <Router>
    <Switch>
      <Route path="/" exact component={LocationTracker} />
      <Route path="/login" component={LoginSignup} />
      <Route path="/signup" component={LoginSignup} />
    </Switch>
  </Router>
  {/*<BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignup/>} ></Route>
    </Routes> 
    </BrowserRouter>*/}
      <ParticlesBg type="tadpole" bg={true} />
      <LoginSignup/>
    </div>
  );
}

export default App;
