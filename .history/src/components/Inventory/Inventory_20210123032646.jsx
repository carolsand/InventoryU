import React from 'react';
import { Navbar } from 'react-bulma-components';
import './Inventory.css';


const Inventory = (props) => {
    return (
      <div>
        <h2>Your Inventory {props.profile} </h2>
      </div>
    );
  }

export default Inventory;