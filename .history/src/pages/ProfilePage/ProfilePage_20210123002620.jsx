import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import './ProfilePage.css';

 const ProfilePage = (props) => {
    return (
      <div className="ProfilePage">
        <Navbar />
        props.user.profile;
        <h2>Take Inventory Before Disaster Strikes </h2>
      </div>
    );
  }

export default ProfilePage;