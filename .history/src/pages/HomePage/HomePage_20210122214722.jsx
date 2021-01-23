import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
//import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
     <h2>Take Inventory Before Disaster Strikes </h2>
           {props.user}
           inventory={props.inventory}
           room={props.room}
           email={props.user.email} 
  </div>
);

export default HomePage;