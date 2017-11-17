import React, { Component } from 'react';

import firebase from 'firebase/app';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    // TODO: make a reference to the task key in the firebase database
    // TODO: make your task ref listen for value changes
    //       and when they occur, set the state to the value of the snapshot
  }

  componentWillUnmount() {
    // TODO: close the listener when a client is about to leave
  }

  toggleFinished(taskId){
    // TODO: toggle the task to complete and send it to firebase
  }

  addTask(description){
    // TODO: add a new task and sen it to firebase
    // TODO: if you don't see a task appearing, look at the console
    //       and be sure to set up open security rules
    //       https://info343.github.io/firebase.html#security-rules
  }

  render() {
    return (
      <div className="container">
        <p className="lead">Things <strong>WE</strong> have to do</p>
        <TaskList
          tasks={this.state.tasks}
          toggleCallback={(taskId) => {this.toggleFinished(taskId)}}
          />
        <AddTaskForm submitCallback={(descr) => {this.addTask(descr)}} />
      </div>
    );
  }
}

class TaskList extends Component {
  render() {

    if(this.props.tasks == null) return null;

    //this is _slightly_ different!
    let taskIds = Object.keys(this.props.tasks);
    let taskItemsArray = taskIds.map((id) => {
      let task = this.props.tasks[id];
      task.id = id; //pass in the id with the task!
      return <Task
                key={id}
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
    this.state = {value: ''}; //initial state
  }

  handleChange(event){
    this.setState({value: event.target.value});
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
