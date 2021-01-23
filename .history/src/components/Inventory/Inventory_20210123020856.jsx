import React from 'react';
import { Navbar } from 'react-bulma-components';
import './Inventory.css';
import Inventory from '../../pages/InventoryPage/InventoryPage';

const Inventory = (props) => {
    return (
      <div>
        <h2>Your Inventory 
          {props.user} </h2>
      </div>
    );
  }

export default Inventory;