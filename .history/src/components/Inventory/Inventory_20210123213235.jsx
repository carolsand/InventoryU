import React from 'react';
import { Navbar } from 'react-bulma-components';
import './Inventory.css';


// function Inventory(){
//   return(
//     <div> 
//       <Inventory room='Living Room' />
//     </div>
//   );
// }
const Inventory = (props) => {
    return (
      <div className="card-image">
        <h1>Your Inventory {props.user.name} </h1>
        
        <h4>Inventory Profile {props.inventory} </h4>
      </div>
    );
  }

export default Inventory;