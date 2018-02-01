import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sports Event Signup</h1>
        </header>
        <div className="Form-wrapper">

 <div class="form-collection">
    <div class="card elevation-3 limit-width log-in-card below turned">
      <div class="card-body">
        <div class="input-group email">
          <input type="text" placeholder="Email"/>
        </div>
        <div class="input-group password">
          <input type="password" placeholder="Password"/>
        </div>
        <a href="#" class="box-btn">Forgot Password?</a>
      </div>
      <div class="card-footer">
        <button type="submit" class="login-btn">Log in</button>
      </div>
    </div>

    <div class="card elevation-2 limit-width sign-up-card above">
      <div class="card-body">
        <div class="input-group fullname">
          <input type="text" placeholder="Full Name"/>
        </div>
        <div class="input-group email">
          <input type="email" placeholder="Email"/>
        </div>
        <div class="input-group password">
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="signup-btn">Sign Up</button>
      </div>
    </div>
  </div>
  </div>







        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Name:
        //     <input type="text" value={this.state.value} onChange={this.handleChange} />
        //   </label>
        //   <input type="submit" value="Submit" />
        // </form>
        </div>
      </div>
);
}
}

export default App;
