import React from 'react';
import './Inventory.css';
import '../NavBar/NavBar';

const Inventory = () => {
    return (
      <div className="InventoryPage">
        <Navbar />
        <h2>Your Inventory </h2>
      </div>
    );
  }

export default Inventory;