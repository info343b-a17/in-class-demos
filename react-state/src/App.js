import React, { Component } from 'react';

const SAMPLE_TASKS = [
  {id:1, description:'Learn JSX', complete:true},
  {id:2, description:'Learn about React State', complete:false},
  {id:3, description:'Get some sleep', complete:false} 
];


class App extends Component {

  render() {
    return (
      <div className="container">
        <Clock />
        <p className="lead">Things I have to do (2+)</p>
        <TaskList />
        <AddTaskForm />
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
        <div className="font-italic">{"demo o'clock"}</div>
    );  
  }
}

class TaskList extends Component {  
  render() {   
    return (
      <ol>
        <Task />
        {/* tasks go here */}
      </ol>
    );
  }
}

class Task extends Component {

  render() {

    return (
      <li>
        task description
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
