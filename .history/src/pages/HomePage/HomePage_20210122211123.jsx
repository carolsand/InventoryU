import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
      <div>{props.rowIdx +1}</div>
           <HomePage
          // name={props.inventory.name}
          // description={props.inventory.description}
           />
  </div>
);

export default HomePage;