import React from 'react';
import './Rooms.css';

const Rooms = (props) => {
    return (
      <div>
        <h2>Your Rooms Inventory </h2>
        <h3> List of Rooms </h3>
        <p> {props.room} {console.log("value of props --->", props)} </p>
      </div>  
    );
  }

export default Rooms;