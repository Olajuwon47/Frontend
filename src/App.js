import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import LoginSignup from './containers/LoginSignup.js';
import Location from './containers/Location';
import Geomap from './containers/Geomap';
import Review from './containers/Review';
import Bottom from './containers/Bottom';
import Navbar from './containers/Navbar';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import LocationTracker from './LocationTracker';
//import ParticlesBg from 'particles-bg'
/*import Table from './Table.js'*/
// import {BrowserRouter,Routes, Route} from 'react-router-dom'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() =>{
      localStorage.setItem('current_theme', theme);
    }, [theme])

  return(
    <div className={`containerr ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      
       {/* <Router>
        <Switch>
          <Route path="/" exact component={LocationTracker} />
          <Route path="/login" component={LoginSignup} />
          <Route path="/signup" component={LoginSignup} />
        </Switch>
      </Router> */}
      {/*<BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignup/>} ></Route>
        </Routes> 
        </BrowserRouter>*/}
         <ParticlesBg type="tadpole" bg={true} /> 
          <LoginSignup/> 
          <Location />
          <Geomap /> 
          <Review />
      <Bottom />
    </div>
  );
}

export default App;
