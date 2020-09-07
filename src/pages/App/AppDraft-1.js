// import React, {useState} from 'react';
import React, {Component, useState} from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';

/* The following imports are named exports from inventoryu */
import HomePage from '../HomePage/HomePage';
import InventoryPage from '../InventoryPage/InventoryPage';
import CreateInventory from '../CreateInventory/CreateInventory';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import ProfilePage from '../ProfilePage/ProfilePage';

// import logo from './logo.svg';

// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         // Initialize user if there's a token, otherwise null
//         user: userService.getUser(),
//         // profile: userService.getUser(),
//       };
//     }

    // history = useHistory();


// handleSignupOrLogin = (setUser()) => {
//         userService.getUser() });

function App() {
      
    // const [user, setUser] = useState(userService.getUser());
    const user = userService.getUser();

    console.log('Running App');
    console.log('The value of user is--->', user);

    const handleLogout = () => {
        userService.logout();
        //setUser(null);
    };

    const handleSignupOrLogin = () => {
        //setUser(userService.getUser());
        console.log('The value from getUser is', userService.getUser());
        console.log('The value of user is--->', user);

    };
        return (
          <div className="">
            <header className='container'> &nbsp;&nbsp;&nbsp; InventoryU </header>
              <NavBar
                user={user}
                handleLogout={handleLogout}
                />
            <Switch>
              <Route exact path='/signup' render={() =>
                < SignupPage
                  handleSignupOrLogin={handleSignupOrLogin}
                />
              } />
              <Route exact path='/login' render={() =>
                <LoginPage
                  handleSignupOrLogin={handleSignupOrLogin}
                />
              } />
              <Route exact path='/home-page' render={() =>
                <HomePage
                  handleSignupOrLogin
                />
              } />
              <Route exact path='/profile' render={() =>
                user ?
                <ProfilePage
                  user={user}
                  />
                :
                <Redirect to="/home-page" />
              } />
              <Route exact path='/create-inventory' render={() =>
                user ?
                <CreateInventory
                 user={user}
                />
                :
                <Redirect to="/inventory-page" />
              }/>
              <Route exact path='/inventory-page' render={() =>
                  user ?
                  <InventoryPage
                  user={user}
                  />
                  :
                  <Redirect to="/home-page" />
              } />
              :
              </Switch>
          </div>
        );
}
    
export default App;