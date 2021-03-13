import React from 'react';
// import Footer from '../Footer';
import '../../components/Inventory/Inventory';
//import './HomePage.css';

const HomePage = (props) => (
  <div className= "HomePage">
     <h2>Take Inventory Before Disaster Strikes </h2>
           {props.user}
           inventory={props.inventory}
           room={props.room}
           {props.profile} 
  </div>
);

export default HomePage;