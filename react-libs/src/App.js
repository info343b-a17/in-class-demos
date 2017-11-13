import React, { Component } from 'react';

class App extends Component {

  handleGoodbye() {
    console.log("Bye!");
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <GoodbyeButton callback={() => this.handleGoodbye()} />
      </div>
    );
  }
}

//Show a Goodbye Button
class GoodbyeButton extends Component {
  render() {
    return (
       <button onClick={this.props.callback}>See you later, alligator!</button>
    );
  }
}

export default App;
