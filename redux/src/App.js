import React, { Component } from 'react';

import { connect } from 'react-redux';
import {createBakeAction, createEatAction} from './store';

/** Components **/

class App extends Component {
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


function mapStatetoProps(state){
  return state; //one-to-one mapping
}

function mapDispatchToProps(dispatch) {
  return {
    addCookie: (flavor) => dispatch(createBakeAction(flavor)),
    eatCookie: (cookieId) => dispatch(createEatAction(cookieId))
  }
}

const connectComponentFunction = connect(mapStatetoProps, mapDispatchToProps);
const ConnectedApp = connectComponentFunction(App);

export default ConnectedApp;
