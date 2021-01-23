import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
      {props.Inventory.map((inventory, idx) =>
          <div className="HomePage" key={idx}>
            <span key={1 + idx}>Name: {inventory.user}</span>
            <span key={2 + idx}>Activity: {inventory.description}</span>
            <span key={3 + idx}>Description: {inventory.roomLocation}</span>
          </div>
      )}
  </div>
);

export default HomePage;