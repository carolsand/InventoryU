import React from 'react';
import { Navbar } from 'react-bulma-components';
import './Inventory.css';


function Inventory(){
  return(
    <div> 
      <Inventory room='Living Room' />
    </div>
  );
}
// const Inventory = (props) => {
//     return (
//       <div>
//         <h1>Your Inventory {props.user} </h1>
//         <h4>Inventory Profile {props.profile} </h4>
//       </div>
//     );
//   }

export default Inventory;