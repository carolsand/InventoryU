import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import { Switch } from "react-router";

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar'


class App extends Component {
    constructor() {
      super();
      this.state = {
        // Initialize user if there's a token, otherwise null
        user: userService.getUser(),
        profile: userService.getUser(),
      };
    }

    history = useHistory();
    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
      }
      handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    render() {
        return "STripped App namespace";
       
        }
    }

        export default App;