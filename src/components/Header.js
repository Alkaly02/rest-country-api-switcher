import React from 'react';
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  return (
    <nav className='d-flex justify-content-between align-items-center shadow p-2'>
        <h3 style={{fontSize: '0.9rem'}}  className="navbar-brand m-0">Where in the world</h3>
        <button style={{fontSize: '0.8rem'}}  className='btn py-0'><FaMoon className='me-1 mb-1' />Dark Mode</button>
    </nav>
  )
}

export default Header