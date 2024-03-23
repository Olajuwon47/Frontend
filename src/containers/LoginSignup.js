import React, {useEffect, useState } from 'react';
import '../components/LoginSignup.css';
import Validation from '../components/LoginSignupValidation.js';

import email_icon from '../Assest/email.svg';
import password_icon from'../Assest/password.svg';
import user_icon from '../Assest/user.svg';
const LoginSignup= () => {
  const [action, setAction]= useState('Login');
  const [values, setValues]=useState({
    surname: '',
    firstname: '',
    lastname: '',
    date: '',
    email: '',
    password: ''
})
/*const LoginSignup = () => {
  const handleLogin = () => {
    // Implement login logic
    console.log('Login button clicked');
  };

  const handleSignup = () => {
    // Implement signup logic
    console.log('Signup button clicked');
  };*/
useEffect(()=>{
  fetch('http://localhost:3000/todos')
  .then(response=> response.json())
  .then(data=>this.setTodos(data));
},[]);
  const [errors, setErrors]=useState({})
  const handleInput =(event) =>{
    setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
  }
  const handleSubmit=(event) =>{
    event.preventDefault();
    setErrors(Validation(values));
  }
  return (
      <form action="" onSubmit={handleSubmit} className='container'>
       <div className='header'>
       <div className='text'>{action}</div>
        <div className='underline'> </div>
        </div>
        <div className='inputs'>
        {action==='Login'?<div></div>: <div className='input'>
          <input type='surname'placeholder='surname' id='text' name='surname'
          onChange={handleInput}/>
           {errors.surname && <span className='text danger'> {errors.surname} </span> } 
      </div>} 
      {action==='Login'?<div></div>: <div className='input'>
          <input type='firstname'placeholder='firstname' id='text' name='firstname' 
          onChange={handleInput}/>
           {errors.firstname && <span className='text danger'> {errors.firstname} </span> } 
      </div>}
      {action==='Login'?<div></div>: <div className='input'>
          <input  type='lastname'placeholder='lastname' id='text' name='lastname' 
          onChange={handleInput}/>
           {errors.lastname && <span className='text danger'> {errors.lastname} </span> } 
      </div>}
      {action==='Login'?<div></div>:<div className='input'>
          <img src={user_icon} alt="" />
          <input type='user'placeholder='username'  />
       </div>}
      {action==='Login'?<div></div>: <div className='input'>
          <input type="date" id="dob" name="date of birth" 
         onChange={handleInput} />
          {errors.date && <span className='text danger'> {errors.date} </span> } 
      </div>}
          <div className='input'>
          <img src={email_icon} alt=""/>
          <input type='email'placeholder='@gmail.com' id='email' name='email'
          onChange={handleInput} />
          {errors.email && <span className='text danger'> {errors.email} </span> } 
        </div>
      <div className='input'>
          <img src={password_icon} alt=""/>
          <input type='password' placeholder='*******' id='password'  maxLength="8" minLength="6" name='password' required  
          onChange={handleInput}/>
           {errors.password && <span className='text danger'> {errors.password} </span> }
      </div>
      {action==='Login'?<div></div>: <div className='input'>
      <img src={password_icon} alt=""/>
          <input type='Repeat password'placeholder='Repeat password' id='password' maxLength="8" minLength="6" name='password' required />
      </div>}
       {action==='Sign up'?<div></div>:<div className='forgot-password '>forgot password?<span>click here!</span></div>}
       {action==='Login'?<div></div>:<div className=''>you have agreed with the term and policies of the company </div>}
       <div className='submit-container'>
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign up</div>
        <div className={action==='Sign up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
        </div>
        </form>
  );
}
export default LoginSignup;
