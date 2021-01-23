import React from 'react';
import './Room.css';
import { Navbar } from 'react-bulma-components';

const Room = () => {
    return (
      <div className="Room">
        <Navbar />
        <h2>You Rooms Inventory </h2>
      </div>
    );
  }

export default Room;