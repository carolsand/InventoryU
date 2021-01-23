import React from 'react';
import './Rooms.css';
import { Navbar } from 'react-bulma-components';

const Rooms = (props) => {
    return (
      <div className="Room">
        <h2>You Rooms Inventory </h2>
        <p> {props.room} </p>
        <p> {props.user.profile} </p>
      </div>
    );
  }

export default Rooms;