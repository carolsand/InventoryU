import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';


function SignupPage(props) {
  const [message, setMessage] = useState('');
  console.log("Hey the signup page");
 
  return (
    <div className='SignupPage'>
      <SignupForm {...props} updateMessage={setMessage} />
      <p>{message}</p>
    </div>
  );
};  


// class SignupPage extends Component {
  // constructor(props) {
    // super(props);
    // this.state = { message: '' }
  // }

  // updateMessage = (msg) => {
    // this.setState({ message: msg });
  // // }

  // render() {
    // return (
  //     // <div className='SignupPage'>
  //       <SignupForm {...this.props} updateMessage={this.updateMessage} />
  //       <p>{this.state.message}</p>
  //     </div>
  //   );
  // }
// }

export default SignupPage;