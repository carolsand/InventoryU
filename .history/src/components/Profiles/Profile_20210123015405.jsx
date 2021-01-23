import React from 'react';
import './Profile.css';
import { Navbar } from 'react-bulma-components';

const Profile = (props) => {
    return (
    <div className='Profile'>
       <Navbar />
       <h1>User Profile
           {props.user}</h1>
    </div>
    );
}

export default Profile;