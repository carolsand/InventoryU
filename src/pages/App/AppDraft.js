import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import { Switch } from "react-router";

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar'
import userService from '../../utils/userService';

import HomePage from '../HomePage/HomePage';
import InventoryPage from '../InventoryPage/InventoryPage';
import CreateInventory from '../CreateInventory/CreateInventory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      inventory: [],
      activity: [],
      job: {},
      profile: userService.getUser(),
    };
  }

  async componentDidMount () {
    let inventory = await inventoryService.getInventory();
    const experiences = await experienceService.getAllExperiences();
    this.setState({experience, experiences});
  }

  handleGetAllExperiences = (experiences) => {
    const experience = experienceService.getAllExperiences();
    this.setState({ experience, experiences });
  }

  handleGetNewExperience = (experience) => {
    const newExperience = experienceService.getOneExperience(experience);
    this.setState({newExperience, experience});
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleCreateExperience = () => {
    this.setState({user: experienceService.create()})
  }

  render() {
    return ( 
      <div className=""> 
        <header className='container'> &nbsp;&nbsp;&nbsp; Dream Job Journey </header>
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
          <Route exact path='/profile-page' render={() =>
            this.state.user ?
            <ProfilePage
              user={this.state.user}
              experiences={this.state.experiences}
              handleGetAllExperiences={this.handleGetAllExperiences}
              
            />
            :
              <Redirect to='/Home' />
          } />
          <Route exact path='/inventory-page' render={() =>
            this.state.user ?
            <InventoryPage
             user={this.state.user}
             experiences={this.state.experiences}
             handleCreateExperience={this.handleCreateExperience}
             handleGetNewExperience={this.handleGetNewExperience}
             
            />
            :
              <Redirect to='/Info-Page' />
          } />
          <Route exact path='/create-inventory' render={() =>
              this.state.user ?
              <CreateInventory
              handleGetAllExperiences={this.handleGetAllExperiences}
              user={this.state.user}              
              experiences={this.state.experiences}
                 
              />
              :
              <Redirect to='/Info-Page' />
          } />
        </Switch> 
      </div>
    );
  }
}

export default App;