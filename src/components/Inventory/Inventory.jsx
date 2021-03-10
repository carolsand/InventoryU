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

function Inventory (props) {
  return (
    <div>
    <h2>Take Inventory Before Disaster Strikes </h2>
     {/*<Inventory desc={props.inventory} /> */}
    {/*Inventory.map(invent => <li key={invent}>{invent}</li>)*/}
    <ul>
      {/*props.state.room*/}
      {/*props.inventory.map(inventory =>
       <button key={inventory}>{inventory}</button>
      ) */}
    </ul>
    <h3>Your Inventory </h3> 
  </div>
  )
}

// const Inventory = (props) => {
//     return (
//       <div>
//         <h2>Inventory Profile </h2>
//          {/*<Inventory desc={props.inventory} /> */}
//         {/*Inventory.map(invent => <li key={invent}>{invent}</li>)*/}
//         <ul>
//           {/*props.state.room*/}
//           {/*props.inventory.map(inventory =>
//            <button key={inventory}>{inventory}</button>
//           ) */}
//         </ul>
//         <h1>Your Inventory </h1> 
//       </div>
//     );
//   }

export default Inventory;