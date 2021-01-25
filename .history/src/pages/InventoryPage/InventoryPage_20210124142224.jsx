import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import './InventoryPage.css';

 const InventoryPage = (props) => {
    return (
      <div className="InventoryPage">
        <Navbar />
        <h2>Take Inventory Before Disaster Strikes </h2>
      </div>
    );
  }

export default InventoryPage;