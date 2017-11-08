import React, { Component } from 'react';

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
      incompleteCount: 'A lot'
    };

    window.setInterval(() => {

      let updatedState = {currentTime: new Date()};
      this.setState(updatedState);

    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <Clock time={this.state.currentTime} />
        <p className="lead">Things I have to do ({this.state.incompleteCount})</p>
        <TaskList />
        <AddTaskForm />
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

  constructor(props){
    super(props);

    //initial values
    this.state = {
      tasks: SAMPLE_TASKS    
    }
  }

  toggleFinished(taskId){
    let updatedTasks = this.state.tasks.map((task) => {
      if(task.id === taskId){
        task.complete = !task.complete; //toggle
      }
      return task;
    })

    this.setState({tasks:updatedTasks});
  }

  render() { 
    
    //[{} {} {}] ==> [<Task> <Task> <Task>]
    let taskItemsArray = this.state.tasks.map((task) => {
      return <Task 
                key={task.id} 
                task={task} 
                toggleCallback={(taskId) => {this.toggleFinished(taskId)} }  
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
  render() {
    return (
      <form>
        <input 
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          />
        <button className="btn btn-primary">Add task to list</button>
      </form>
    );
  }
}

export default App;
