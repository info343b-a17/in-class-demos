import React, { Component } from 'react';

import { Button } from 'reactstrap'


let app = new App();

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      welcomed: false,
      dataICareAbout: [] //initially I have no data
    };
  }

  componentDidMount() {
    //called when the component is shown on the screen
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //I have the data I downloaded! Muahahaha

        //processing... mapping, filter, reducing, etc.

        this.setState({dataICareAbout: processedData});
      });
  }


  helper() {
    console.log(this);
    this.setState({welcomed:true});
  }

  handleGoodbye() {
    console.log("Bye!");
    this.setState({welcomed:false})
    this.helper();
  }

  render() {



    let content;

    let whichCallback = this.helper; //which function to use

    if(this.state.welcomed) {
      content = (<div>
                  <h1>Welcome!</h1>
                  <GoodbyeButton callback={() => this.handleGoodbye()} />
                </div>)
    } else {
      content = <Button 
              onClick={whichCallback}
              >Hello</Button>
    }
 
    // return <div>{content}</div>;

    //alternative
    return (
      <div>
        {/* Always show hello button */}
        <Button 
            onClick={ () => this.helper() } >Hello</Button>

        {/* Sometimes!! show the goodbye button */}
        {this.state.welcomed && 
          <div>
            <h1>Welcome!</h1>
            <GoodbyeButton callback={() => this.handleGoodbye()} />
          </div>
        }
        <div>{this.state.dataICareAbout}</div>
      </div>);
    


  }
}

//Show a Goodbye Button
class GoodbyeButton extends Component {
  render() {
    
    let randomNumber = Math.floor(Math.random()*3); //between 0 and 4
    switch(randomNumber) {
      case 0:
        return <Button color="primary" onClick={this.props.callback}>See you later, alligator!</Button>;
      case 1:
        return <Button color="warning" onClick={this.props.callback}>After a while, crocodile!</Button>;    
      case 2:
        return <Button color="primary" onClick={this.props.callback}>Time to go, buffalo!</Button>;          
    }
  }
}

//this example
// let bark = function() {
//   console.log(this.name + " woof");
// }

// let fido = {
//   name:'Fido',
//   bark: bark 
// };
// let rover = {
//   name:'Rover',
//   bark: bark
// };

// fido.bark() //=> "Fido woof"
// rover.bark() //=> "Rover woof"

// bark();


export default App;
