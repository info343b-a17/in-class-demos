import React, { Component } from 'react';

import firebase from 'firebase/app';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  componentDidMount() {
    this.unregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser){ //someone logged in!
        this.setState({user: firebaseUser});
      }
      else { //someone logged out
        this.setState({user:null});
      }
    });
  }

  componentWillUnmount() {
    this.unregisterFunction();
  }

  //A callback function for registering new users
  handleSignUp() {
    this.setState({errorMessage:null}); //clear old error

    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((firebaseUser) => {
          //do some stuff with the user
          let promise = firebaseUser.updateProfile({displayName:this.state.username});
          return promise;
        })
        .catch((err) => this.setState({errorMessage: err.message}))
        .then(() => {
          this.setState({email:'',password:'',username:''});          
        })
  }

  //A callback function for logging in existing users
  handleSignIn() {
    this.setState({errorMessage:null}); //clear old error

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((err) => this.setState({errorMessage: err.message}))    
  }

  //A callback function for logging out the current user
  handleSignOut(){
    this.setState({errorMessage:null}); //clear old error
    
    firebase.auth().signOut()
      .catch((err) => this.setState({errorMessage: err.message}))    
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    let changes = {};
    changes[field] = value;
    this.setState(changes);
  }

  render() {
    return (
      <div className="container">
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }

        {this.state.user && 
          <div className="alert alert-success">
            <h1>Logged in as {this.state.user.displayName}</h1>
          </div>
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