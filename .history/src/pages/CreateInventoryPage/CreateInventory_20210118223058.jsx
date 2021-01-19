import React from 'react';
import InventoryForm from '../../components/InventoryForm/InventoryForm'
import './CreateInventory.css';

// I want to show all the users experiences on this page


const CreateInventory = (props) => (
  <div className= "container">
    <InventoryForm
    />
    {/* <div className="card-body">
      {props.inventory.map((inventory, idx) =>
          <div className="InventoryPage" key={idx}>
            <span key={1 + idx}>Name: {inventory.name}</span>
            <span key={2 + idx}>Description: {inventory.description}</span>
            <span key={3 + idx}>Location: {inventory.location}</span>
            <span key={4 + idx}>Item: {inventory.item}</span>
            <span key={5 + idx}>Room: {inventory.room}</span>
            <span key={6 + idx}>Country: {inventory.country}</span>
          </div>
      )}
    </div> */}
  </div>
);

export default CreateInventory;