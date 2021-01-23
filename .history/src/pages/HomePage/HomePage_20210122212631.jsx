import React from 'react';
// import Footer from '../Footer';
import { Navbar } from 'react-bulma-components';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
           <h1 Welcome Home 
           name={props.user.name}
           inventory={props.inventory}
           room={props.room}
           email={props.user.email}
          // name={props.inventory.name}
          // description={props.inventory.description}
          />
  </div>
);

export default HomePage;