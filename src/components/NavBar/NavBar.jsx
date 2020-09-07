import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Navbar } from 'react-bulma-components';

const NavBar = (props) => {
    let nav = props.user ?
    <div className='navbar'>
        <Link to='/home-page' className='nav-link'>Home</Link> 
        &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
        
        <Link to='/create-inventory-page' className='nav-link'>Make Your Rooms</Link> 
        &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
        
        <Link to='rooms' className='nav-link'>Rooms</Link> 
        &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
        
        <Link to='/inventory-page' className='nav-link'>Inventory</Link> 
        &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
        
        <Link to='/profile-page' className='nav-link'>Profile</Link> 
        &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
        
        <Link to='' className='nav-link' onClick={props.handleLogout}>LOG OUT</Link>
         &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    </div>
    :
    <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

    return(
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;