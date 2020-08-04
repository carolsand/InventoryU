import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


/* The following imports are named exports from inventoryu */
// import HomePage from '../HomePage/HomePage';
import InventoryPage from '../InventoryPage/InventoryPage';
import CreateInventory from '../CreateInventory/CreateInventory';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import ProfilePage from '../ProfilePage/ProfilePage';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        // Initialize user if there's a token, otherwise null
        user: userService.getUser(),
        profile: userService.getUser(),
      };
    }

    // history = useHistory();
    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
      }
      handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    render() {
        return (
          <div className="">
            <header className='container'> &nbsp;&nbsp;&nbsp; InventoryU </header>
              <NavBar
                user={this.state.user}
                handleLogout={this.handleLogout}
                />
            <BrowserRouter>
             <Routes>
              <Route exact path='/' render={({ history }) =>
                < InventoryPage
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
              <Route exact path='/profile-page' render={() =>
                this.state.user ?
                <ProfilePage
                  user={this.state.user}
                  />
                :
                <Link to="/home-page" />
              } />
              <Route exact path='/create-inventory' render={() =>
                this.state.user ?
                <CreateInventory
                 user={this.state.user}
                />
                :
                <Link to="/inventory-page" />
              }/>
              <Route exact path='/inventory-page' render={() =>
                  this.state.user ?
                  <InventoryPage
                  user={this.state.user}
                  />
                  :
                  <Link to="/home-page"> Home Page </Link>
              } />
              :
              </Routes>
            </BrowserRouter>
          </div>
        );
      }
    }
export default App;