import React, { Component } from 'react';

import 'whatwg-fetch'; //load the polyfill

const SAMPLE_TASKS = [
  {id:1, description:'Learn JSX', complete:true},
  {id:2, description:'Learn about React State', complete:false},
  {id:3, description:'Get some sleep', complete:false} 
];


class App extends Component {

  constructor(props){
    super(props) //hey dad, set up this.props

    //initial state values
    this.state = {
      currentTime: new Date(),
      incompleteCount: 'A lot',
      tasks: [] //initially empty      
    };

    window.setInterval(() => {

      let updatedState = {currentTime: new Date()};
      this.setState(updatedState);

    }, 1000);
  }

  //lifecycle event!!
  componentDidMount() {
    //download the data
    fetch('tasks.json')
      .then((response) => {
        return response.json();
      })
      .then((data)=>{
        this.setState({tasks:data}); //set the loaded data to be the tasks
      });
  }


  //yoinked from TaskList
  toggleFinished(taskId){
    let updatedTasks = this.state.tasks.map((task) => {
      if(task.id === taskId){
        task.complete = !task.complete; //toggle
      }
      return task;
    })

    this.setState({tasks:updatedTasks});
  }

  addTask(description){
    let newTask = {
      id:this.state.tasks.length+1,
      description: description,
      complete: false
    }

    let updatedTasks = this.state.tasks.concat(newTask);
    this.setState({tasks:updatedTasks});
  }

  render() {
    return (
      <div className="container">
        <Clock time={this.state.currentTime} />
        <p className="lead">Things I have to do ({this.state.incompleteCount})</p>
        <TaskList 
          tasks={this.state.tasks}
          toggleCallback={(taskId) => {this.toggleFinished(taskId)}}
          />
        <AddTaskForm submitCallback={(descr) => {this.addTask(descr)}} />
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
        <div className="font-italic">{this.props.time.toLocaleTimeString()}</div>
    );  
  }
}

class TaskList extends Component {  

  // constructor(props){
  //   super(props);

  //   //initial values
  //   this.state = {
  //     tasks: SAMPLE_TASKS    
  //   }
  // }

  render() { 
    
    //[{} {} {}] ==> [<Task> <Task> <Task>]
    let taskItemsArray = this.props.tasks.map((task) => {
      return <Task 
                key={task.id} 
                task={task} 
                toggleCallback={ this.props.toggleCallback }  
                />;
    })

    return (
      <ol>
        {taskItemsArray}
      </ol>
    );
  }
}

class Task extends Component {

  handleClick() {
    console.log('You clicked on #', this.props.task.id);
    this.props.toggleCallback(this.props.task.id);
  }

  render() {

    let className = this.props.task.complete ? 'font-strike' : '';

    return (
      <li className={className} onClick={() => {this.handleClick()} }>
        {this.props.task.description}
      </li>
    );
  }
}

class AddTaskForm extends Component {
  constructor(props){
    super(props);

    //initial state
    this.state = {value: ''}

  }

  handleChange(event){
    this.setState({value: event.target.value}, () => {
      console.log(this.state.value); //do this when done setting state      
    });
  }

  handleClick(event){
    event.preventDefault();
    this.props.submitCallback(this.state.value);
    this.setState({value:''}); //reset once finished    
  }

  render() {
    return (
      <form>
        <input 
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={this.state.value}
          onChange={(event) => {this.handleChange(event) } }
          />
        <button 
          className="btn btn-primary" 
          onClick={(event) => {this.handleClick(event)}}
          >
            Add task to list
        </button>
      </form>
    );
  }
}

export default App;
