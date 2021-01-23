import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import inventoryService from '../../utils/inventoryService';
import './InventoryForm.css';


class InventoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        description: '',
        rooms: '', 
        city: '',
        state:'',
      };
  }
  
  // handleUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await experienceService.addJobToExperience(this.state);
  //   }catch (err){
  //     console.log('Invalid user data');
  //   }
  // }

  handleChange = (e) => {
    // this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await inventoryService.create(this.state);
    } catch (err) { 
      console.log('Invalid user data');
      // this.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="container">
        <header className="header">Create Your Rooms</header>
        &nbsp;&nbsp;&nbsp;
          <form className="form-inline" onSubmit={this.handleChange} >
            <div className="form-inline">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
              </div>
            </div>
          &nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="city" value={this.state.city} name="city" onChange={this.handleChange} />
              </div>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="state" value={this.state.state} name="state" onChange={this.handleChange} />
              </div>
              <hr />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Rooms</span>
              <select name='rooms'>
                <option value={this.state.rooms}></option>
                <option value={this.state.rooms}>Living</option>
                <option value={this.state.rooms}>Kitchen</option>
                <option value={this.state.rooms}>Bed</option>
                <option value={this.state.rooms}>Entertainment</option>
                <option value={this.state.rooms}>Guest</option>
                <option value={this.state.rooms}>Office</option>
                <option value={this.state.rooms}>Studio</option>
                <option value={this.state.rooms}>Bath</option>
                <option value={this.state.rooms}>Basement</option>
                <option value={this.state.rooms}>Study</option>
                <option value={this.state.rooms}>Play</option>
                <option value={this.state.rooms}>Cabana</option>
                <option value={this.state.rooms}>Gym</option>
              </select>
            </label>
            &nbsp;&nbsp;&nbsp;
            </div>
            <div className="form-group">
              <div className="col-sm-9 text-center">
              &nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Add Room</button>
                <hr />
                <Link to='/'>Cancel</Link>
                <hr />
              </div>
            </div>
          </form>
      </div>
    );
  }
}

export default InventoryForm;
