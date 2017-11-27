import React, { Component } from 'react';
// import {store, createBakeAction, createEatAction} from './store';
import {createBakeAction, createEatAction} from './store';
import { connect } from 'react-redux';

/** Components **/

class App extends Component {
  constructor(props){
    super(props) //hey dad, set up this.props

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  addCookie(flavor){
    store.dispatch(createBakeAction(flavor));
  }

  eatCookie(cookieId) {
    store.dispatch(createEatAction(cookieId));
  }

  render() {
    return (
      <div className="container">
        <CookieButton
          flavor='ChocolateChip'
          makeCookieCallback={(c) => this.props.addCookie(c)}
          />
        <CookieButton
          flavor='Rainbow'
          makeCookieCallback={(c) => this.props.addCookie(c)}
          />
        <CookieSheet 
          cookies={this.props.cookies} 
          eatCookieCallback={(c) => this.props.eatCookie(c)}
          />
      </div>
    );
  }
}

class CookieButton extends Component {
  handleClick(){
    this.props.makeCookieCallback(this.props.flavor);
  }

  render() {
    return <button 
      className="btn btn-secondary ml-2"
      onClick={() => this.handleClick()} 
      >
      Make {this.props.flavor} Cookie
      </button>
  }
}

class CookieSheet extends Component {
  render() {
    let cookieImgs = this.props.cookies.map((c) => {
      return <img 
        key={c.cookieId} 
        src={'img/'+c.flavor.toLowerCase()+'-cookie.png'} 
        alt={c.flavor}
        onClick={() => this.props.eatCookieCallback(c.cookieId)}
        />
    });

    return (
      <div className="my-3">{cookieImgs}</div>
    )
  }
}

//Connecting with react-redux
function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    addCookie: (flavor) => dispatch(createBakeAction(flavor)),
    eatCookie: (cookieId) => dispatch(createEatAction(cookieId)),
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
const ConnectedApp = connectComponent(App);

export default ConnectedApp;
