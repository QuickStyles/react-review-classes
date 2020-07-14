import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return(
    <div className='navbar'>
      <NavLink to='/cards'>Cards Index Page</NavLink>
      <NavLink to='/sign_in'>Sign In</NavLink>
      <NavLink to='/users/new'>Create User</NavLink>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default Navbar;
