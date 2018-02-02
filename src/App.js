import React, {Component} from 'react';
import logo from './images/sara-logo.png';
// load the compiled styles
import './styles/stylesheets/stylesheets/main.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

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
      <div className="App body">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="title">Sports Event Signup</h1>
      </header>

      <div className="Forms-wrapper">

        <form className="form-collection form-bg">

          <div className="card elevation-3 limit-width log-in-card below turned">
            <div className="card-body">

              <div className="input-group email">
                <input type="text" placeholder="Email"/>
              </div>

              <div className="input-group password">
                <input type="password" placeholder="Password"/>
              </div>
              <a href="#" className="box-btn">Forgot Password?</a>
            </div>

            <div className="card-footer">
              <button type="submit" className="login-btn">Log in</button>
            </div>

          </div>
      </form>
        </div>

      <form className="form-collection form-bg hidden">
        <div className="card elevation-2 limit-width sign-up-card above">
          <div className="card-body">

            <div className="input-group fullname">
              <input type="text" placeholder="Full Name"/>
            </div>

            <div className="input-group email">
              <input type="email" placeholder="Email"/>
            </div>

            <div className="input-group password">
              <input type="password" placeholder="Password"/>
            </div>

            <div className="card-footer">
              <button type="submit" className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
  }
}

export default App;
