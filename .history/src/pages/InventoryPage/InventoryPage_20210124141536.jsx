import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import './InventoryPage.css';

 const InventoryPage = () => {
    return (
      <div className="InventoryPage">
        <Navbar />
        <h2>Take Inventory Before Disaster Strikes </h2>
        <ul>
          {props.state.room}
        </ul>
      </div>
    );
  }

export default InventoryPage;