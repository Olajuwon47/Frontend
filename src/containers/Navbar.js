import React from 'react'
import logo_icon from '../Assest/logo.jpeg'
import search_icon from '../Assest/search.png'
import search_icon_light from '../Assest/icons8-search-50.png'
import toogle_light from '../Assest/dark_mode.png'
import toogle_dark from '../Assest/icons8-brightness-50.png'

const Navbar = ({theme, setTheme}) => {

  const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <img src={logo_icon} alt="" className='logo' />
      <ul>
       
      </ul>

    <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon} alt="" />
    </div>

    <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon' />

    </div>
  )
}

export default Navbar
