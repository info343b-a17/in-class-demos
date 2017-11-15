import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  //A callback function for registering new users
  handleSignUp() {
    this.setState({errorMessage:null}); //clear old error

  }

  //A callback function for logging in existing users
  handleSignIn() {
    this.setState({errorMessage:null}); //clear old error
    
  }

  //A callback function for logging out the current user
  handleSignOut(){
    this.setState({errorMessage:null}); //clear old error
    
  }

  render() {
    return (
      <div className="container">
        {this.state.errorMessage &&
          <p class="alert alert-danger">{this.state.errorMessage}</p>
        }


        <div className="form-group">
          <label>Email:</label>
          <input className="form-control"
            name="email"
            value={this.state.email}
            onChange={(event) => {this.handleChange(event) } }
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control"
            name="password" 
            value={this.state.password}
            onChange={(event) => {this.handleChange(event) } }
            />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input className="form-control"
            name="username"
            value={this.state.username}
            onChange={(event) => {this.handleChange(event) } }
            />
        </div>

        <div className="form-group">
          <button className="btn btn-primary mr-2" onClick={() => this.handleSignUp()}>
            Sign Up
          </button>
          <button className="btn btn-success mr-2" onClick={() => this.handleSignIn()}>
            Sign In
          </button>
          <button className="btn btn-warning mr-2" onClick={() => this.handleSignOut()}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

export default App;