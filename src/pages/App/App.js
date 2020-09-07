import React, {Component} from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';

/* The following imports are named exports from inventoryu */
import userService from '../../utils/userService';
import roomService from '../../utils/roomService';
import inventoryService from '../../utils/inventoryService';
import HomePage from '../HomePage/HomePage';
import InventoryPage from '../InventoryPage/InventoryPage';
import CreateInventory from '../CreateInventory/CreateInventory';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      inventory: inventoryService.getInventory(),
      room: [],
      item: [],
      profile: userService.getUser(),
    };
  }

  async componentDidMount () {
    let inventory = await inventoryService.getInventory();
    // const inventory = await inventoryService.getInventory();
    this.setState({inventory: inventoryService.getInventory(inventory)});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleCreateInventory = () => {
    const inventory = inventoryService.create();
    this.setState({user: inventoryService.create(inventory)})
  }

  handleCreateRoom = () => {
    const room = roomService.create();
    this.setState({user: roomService.showAll(room)})
  }

  handleGetInventory = () => {
    const inventory = inventoryService.getInventory();
    this.setState({user: inventoryService.showAll(inventory)})
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
            < HomePage 
              handleSignupOrLogin={this.handleSignupOrLogin}
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
          <Route exact path='/profile' render={() =>
            this.state.user ?
            <ProfilePage
              user={this.state.user}
              profile={this.state.profile}
              // handleGetProfile={this.handleGetProfile}
              
            />
            :
              <Redirect to='/home-page' />
          } />
          <Route exact path='/inventory-page' render={() =>
            this.state.user ?
            <InventoryPage
             user={this.state.user}
             inventory={this.state.inventory}
             handleGetInventory={this.handleGetInventory}
            />
            :
              <Redirect to='/Home' />
          } />
          <Route exact path='/create-rooms' render={() =>
              this.state.user ?
              <CreateInventory
              handleCreateInventory={this.handleCreateInventory}
              user={this.state.user}              
              inventory={this.state.inventory}
              />
              :
              <Redirect to='/inventory-Page' />
          } />
        </Switch> 
      </div>
    );
  }
}

export default App;