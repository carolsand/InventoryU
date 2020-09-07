import React, { Component } from 'react';
import InventoryForm from '../../components/InventoryForm/InventoryForm'
// import './CreateInventory.css';

// I want to show all the users experiences on this page
class CreateInventory extends Component {
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
        <div className='CreateInventory'>
          <InventoryForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
  
  export default CreateInventory;