import React from 'react';
import { Navbar } from 'react-bulma-components';
import './Inventory.css';


const Inventory = (props) => {
    return (
      <div>
        <h1>Your Inventory {props.profile} </h1>
      </div>
    );
  }

export default Inventory;