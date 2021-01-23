import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
   <div className="card-body">
      {props.Inventory.map((inventory, idx) =>
          <div className="HomePage" key={idx}>
            <span key={1 + idx}>Name: {inventory.name}</span>
            <span key={2 + idx}>Activity: {inventory.activity}</span>
            <span key={3 + idx}>Description: {inventory.description}</span>
            <span key={4 + idx}>City: {inventory.city}</span>
            <span key={5 + idx}>State: {inventory.state}</span>
            <span key={6 + idx}>Country: {inventory.country}</span>
          </div>
      )}
      </div>
  </div>
);

export default HomePage;