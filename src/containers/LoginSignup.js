 import React, { useState } from 'react';
import '../components/LoginSignup.css';
import email_icon from '../Assest/email.svg';
import password_icon from'../Assest/password.svg';
import user_icon from '../Assest/user.svg';
const LoginSignup= () => {
  const [action, setAction]= useState('Login');
  return (
      <form className='container'>
       <div className='header'>
       <div className='text'>{action}</div>
        <div className='underline'> </div>
        </div>
        <div className='inputs'>
        {action==='Login'?<div></div>:<div className='input'>
          <img src={user_icon} alt="" />
          <input type='user'placeholder='username' />
       </div>}
       {action==='Login'?<div></div>: <div className='input'>
          <input type='surname'placeholder='surname' id='name' name='surname'/>
      </div>}
      {action==='Login'?<div></div>: <div className='input'>
          <input type='first name'placeholder='first name' id='name' name='first name'/>
      </div>}
      {action==='Login'?<div></div>: <div className='input'>
          <input  type='last name'placeholder='last name' id='name' name='last name'/>
      </div>}
      {action==='Login'?<div></div>: <div className='input'>
          <input type="date" id="birthday" name="birthday" />
      </div>}
          <div className='input'>
          <img src={email_icon} alt=""/>
          <input type='email'placeholder='@gmail.com'id='email' name='email' />
        </div>
      <div className='input'>
          <img src={password_icon} alt=""/>
          <input type='password'placeholder='********' id='password' maxlength="12" minLength="6" name='password' required />
      </div>
      {action==='Login'?<div></div>: <div className='input'>
      <img src={password_icon} alt=""/>
          <input type='Repeat password'placeholder='Repeat password' id='password' maxlength="12" minLength="6" name='password' required/>
      </div>}
       {action==='Sign up'?<div></div>:<div className='forgot-password '>forgot password?<span>click here!</span></div>}
       <div className='submit-container'>
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign up</div>
        <div className={action==='Sign up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
        </div>
        </form>
  );
}

export default LoginSignup;
