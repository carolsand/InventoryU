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
        <h2>Inventory Profile </h2>
          <h3> {props.state.user} 
        </h3>
        {/*Inventory.map(invent => <li key={invent}>{invent}</li>)*/}
        <ul>
          {props.state.inventory}
          {props.state.room}
        </ul>
        <h1>Your Inventory </h1> 
      </div>
    );
  }

export default Inventory;