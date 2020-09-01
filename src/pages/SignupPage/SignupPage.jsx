import React, { Component } from 'react';
// import React, { useState, Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

/* Refactored to use declarative function instead of class  */

// function SignupPage(props) {
//   const [message, setMessage] = useState('');
//   console.log("Hey the signup page");
 
//   return (
//     <div className='SignupPage'>
//       <SignupForm {...props} updateMessage={setMessage} />
//       <p>{console.log("In the return section --->")}</p>
//       <p>{message}</p>
//     </div>
//   );
// };  

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' }
    console.log("In the constructor section --->", props);
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{console.log("In the return section --->")}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;