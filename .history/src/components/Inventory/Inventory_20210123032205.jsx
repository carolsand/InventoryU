import React from 'react';
import { Navbar } from 'react-bulma-components';
import './Inventory.css';


const Inventory = (props) => {
    return (
      <div>
        <h2>Your Inventory {props.Inventory} </h2>
      </div>
    );
  }

export default Inventory;