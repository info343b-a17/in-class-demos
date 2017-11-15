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
    this.tasksRef = firebase.database().ref('tasks');
    this.tasksRef.on('value', (snapshot) => {
      this.setState({tasks: snapshot.val()})
    });
  }

  componentWillUnmount() {
    this.tasksRef.off()
  }

  toggleFinished(taskId){
    let localTask = this.state.tasks[taskId];
    this.tasksRef.child(taskId).update({
        complete: !localTask.complete
      })
      .catch(err => console.log(err));
  }

  addTask(description){
    let newTask = {
      description: description,
      complete: false
    }

    this.tasksRef.push(newTask)
      .catch(err => console.log(err));
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
  