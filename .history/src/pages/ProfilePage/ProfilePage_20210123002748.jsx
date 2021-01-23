import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import './ProfilePage.css';

 const ProfilePage = (props) => {
    return (
      <div className="ProfilePage">
        <Navbar />
       <h1> {props.user.profile} </h1>
       
      </div>
    );
  }

export default ProfilePage;