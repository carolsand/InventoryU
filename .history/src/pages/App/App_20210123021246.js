import React, {Component} from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';

/* The following imports are named exports from inventoryu */
import userService from '../../utils/userService';
import roomService from '../../utils/roomService';
import inventoryService from '../../utils/inventoryService';
import HomePage from '../HomePage/HomePage';
import InventoryPage from '../InventoryPage/InventoryPage';
import CreateInventory from '../CreateInventoryPage/CreateInventory';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Inventory from '../../components/Inventory/Inventory.jsx';
import Profile from '../../components/Profiles/Profile.jsx';
import Room from '../../components/Rooms/Rooms.jsx';
import Rooms from '../../components/Rooms/Rooms.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      room: roomService.getRooms(),
      profile: userService.getUser().profile,
      inventory: inventoryService.getInventory(userService.getUser().profile)
    };
  }

  async componentDidMount () {
    console.log("componentDidMount--->");
    let user = await userService.getUser();
    // const inventory = await inventoryService.getInventory();
    this.setState({inventory: inventoryService.getInventory(user)});
  }


  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
    //console.log("Logged in usr---->", user);
  }

  handleCreateInventory = () => {
    const inventory = inventoryService.create();
    console.log("Logged in user's Inventory---->", inventory);
  }

  handleCreateRoom = () => {
    const room = this.setState({room: roomService.create()});
    console.log("This is the handleCreateRoom Function in App.js ----->");
  }

  handleGetInventory = () => {
    const inventory = inventoryService.getInventory(); 
    console.log("Inventory in database -------------->", inventory);
    this.setState({user: inventoryService.show(inventory)})
  }

  
  render() {
    return ( 
      <div className=""> 
        <header className='container'> &nbsp;&nbsp;&nbsp; Take Inventory Before Disaster Strikes  </header>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
         <Switch>
          <Route exact path='/' render={({ history }) =>
            <Inventory
              history={history}
              handleGetInventory={this.handleGetInventory}
              user={this.getUser}
            />
            
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/profile-page' render={() =>
            this.state.user ?
            <Profile
              handleGetProfile={this.handleGetProfile}
            />
            :
              <Redirect to='/inventory-page' />
          } />
          
          <Route exact path='/rooms-page' render={() =>
            this.state.user ?
            <Rooms 
             inventory={this.state.inventory}
             handleGetInventory={this.handleGetInventory}
            />
            :
              <Redirect to='/inventory-page' />
          } />
          <Route exact path='/create-inventory-page' render={() =>
              this.state.user ?
              <CreateInventory
              handleCreateInventory={this.handleCreateInventory}             
              />
              :
              <Redirect to='/inventory-Page' />
          } />
          <Route exact path='/inventory-page' render={() =>
              this.state.user ?
              <Inventory
              handleGetInventory={this.handleGetInventory}             
              />
              :
              <Redirect to='/profile-Page' />
          } />
        </Switch> 
      </div>
    );
  }
}

export default App;