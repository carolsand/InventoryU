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
      <div>
        <h1>Your Inventory </h1> 
        <h2>Inventory Profile </h2>
          <h3> {props.inventory} 
        </h3>
      </div>
    );
  }

export default Inventory;