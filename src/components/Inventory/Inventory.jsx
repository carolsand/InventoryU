import React from 'react';
// import roomService from '../../utils/roomService';
// import userService from '../../utils/userService';
import './Inventory.css';


// function Inventory(){
//   return(
//     <div> 
//       <Inventory room='Living Room' />
//     </div>
//   );
// }

// function Inventory ({rooms}) {
//   return (
//     <div>
//     <h2>Take Inventory Before Disaster Strikes </h2>
//     <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     {/*Inventory.map(invent => <li key={invent}>{invent}</li>)*/}
//     <ul>
//       {/*props.state.room*/}
//       {/*props.inventory.map(inventory =>
//        <button key={inventory}>{inventory}</button>
//       ) */}
//     </ul>
//     <h3>Your Inventory </h3> 
//     <ul> Rooms </ul>
//       <li>{rooms} </li>

//   </div>
//   );
// }

const Inventory = (props) => {
    return (
      <div>
        <h2>Take Inventory Before Disaster Strikes </h2>
        <h3>The time is: {new Date().toLocaleTimeString()}.</h3>
        <h4>Inventory Of Rooms </h4>
        <h5>Inventory List For</h5>
        <button className="square" onClick={() => alert('click')}>
           {/* {this.props.value} */}
        </button>
         {/*<Inventory desc={props.inventory} /> */}
        {/*Inventory.map(invent => <li key={invent}>{invent}</li>)*/}
        <ul>
          <li>{}</li>
          {/*props.inventory.map(inventory =>
           <button key={inventory}>{inventory}</button>
          ) */}
        </ul> 
      </div>
    );
}

export default Inventory;