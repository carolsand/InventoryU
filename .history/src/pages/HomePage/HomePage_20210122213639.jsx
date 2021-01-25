import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
//import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
     <h2>Take Inventory Before Disaster Strikes </h2>
     <div>
           name={props.user.name}
           inventory={props.inventory}
           room={props.room}
           email={props.user.email}
      </div>
  </div>
);

export default HomePage;