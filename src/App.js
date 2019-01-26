import React, { Component } from 'react';
import './App.css';
import Task from './Components/tasks/task.js'

class App extends Component {
  constructor(props){
    super(props)
    this.handleNewTaskClick = this.updateTaskList.bind(this)
    this.updateNewTask = this.updateNewTask.bind(this)
    this.state = {
      task:'',
      taskList: []
    }
  }


  updateTaskList(){
        this.setState({taskList: this.task.map(currentTask => currentTask.task) })
    }

  updateNewTask(e){
    this.setState({task: e.target.value })
  }

  render(){
    return (
      <div>
        <header>
          <h1>Task Tracker</h1>
        </header>
        <section  className='task_container'>
          <form>
            <input className='task_creator' onChange={this.updateNewTask} placeholder='Enter your new task!'/>
          </form>
          <article>
            <Task createTask={this.state.task} />
          </article>
          
        </section>
      </div>
    )
  }
}

export default App;
