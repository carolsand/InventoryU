import React from 'react';
import './Rooms.css';
import { Navbar } from 'react-bulma-components';

const Rooms = (props) => {
    return (
      <div>
        <h2>You Rooms Inventory </h2>
        <h3> List of Rooms </h3>
        <p> {props.room} {console.log("value of props --->", props)} </p>
        <p> {props.profile} </p>
      </div>
    );
  }

export default Rooms;