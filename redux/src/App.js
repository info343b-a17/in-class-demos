import React, { Component } from 'react';

/** Components **/

class App extends Component {
  constructor(props){
    super(props) //hey dad, set up this.props

    // initial state values
    this.state = {
      cookies: [],
      baked: 0
    };
  }

  addCookie(flavor){
    let allCookies = this.state.cookies.concat({
      cookieId: this.state.baked,
      flavor:flavor
    });
    this.setState({
      cookies:allCookies, 
      baked:this.state.baked+1
    });
  }

  eatCookie(cookieId) {  
    let remainingCookies = this.state.cookies.filter((c) => c.cookieId !== cookieId);
    this.setState({cookies: remainingCookies});
  }

  render() {
    return (
      <div className="container">
        <CookieButton
          flavor='ChocolateChip'
          makeCookieCallback={(c) => this.addCookie(c)}
          />
        <CookieButton
          flavor='Rainbow'
          makeCookieCallback={(c) => this.addCookie(c)}
          />
        <CookieSheet 
          cookies={this.state.cookies} 
          eatCookieCallback={(c) => this.eatCookie(c)}
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

export default App;
