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


class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      room: [],
      item: [],
      profile: []
    };
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
    this.setState({user: userService.getUser()})
    const inventory = inventoryService.create();
  }

  handleCreateRoom = () => {
    const room = this.setState({user: roomService.create(room)})
  }

  handleGetInventory = () => {
    const inventory = inventoryService.getInventory();
    this.setState({user: inventoryService.show(inventory)})
  }

  async componentDidMount () {
    let inventory = await inventoryService.getInventory(this.user);
    // const inventory = await inventoryService.getInventory();
    this.setState({inventory: inventoryService.getInventory(inventory)});
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
              history={history}
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
              handleGetProfile={this.handleGetProfile}
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