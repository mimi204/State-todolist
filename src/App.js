import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         tasks: [
        { id: Math.random(), action: "wake up", isDone: true },
        { id: Math.random(), action: "have coffee", isDone: true },
        { id: Math.random(), action: "check email", isDone: false},
        { id: Math.random(), action: "go out", isDone: false },
      ],
      newText : "",
    }
  }
  //Deliting task from the list
  handleDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) =>
        task.id !== id)
    });
  }

  //handling your finished and unfinished tasks
  handleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id===id ? task.isDone={...task, isDone : !task.isDone} : task)
    });
  }


   //handle changes in the input fieled
  handleChange = (e) => { 
          this.setState({ newText : e.target.value });
  }
   
  //Adding tasks to the list
  handleAdd = (text) => {
    const newTask = {
      id:this.state.tasks.length,
      action : text,
      isDone : false,
    }
    this.state.newText.trim() ===" " ?
    alert('pleas fell out the form') :
      this.setState({
        tasks: [...this.state.tasks, newTask] });
    this.setState({newText: "" });
  }
  
  render() {
    return (
      <div className="main">
        <header><h1>TO DO LIST</h1></header>
        
        {/* add new task */}
        <div className="form" onSubmit={(e)=>e.preventDefault(e)}>
          <input className="todo-input" type="text" placeholder="New taks ...." onChange={this.handleChange} value={this.state.newText}/>
          <button className="todo-button"  onClick={()=>this.handleAdd(this.state.newText)} >Add</button>
        </div>
        
        
        {/* list tasks */}
        <div className="todo-container">
          <ul className="todo-list">
            {this.state.tasks.map((task) =>
              <li className="todo">
                {/* task */}
                  <label id={task.isDone ? "done" : ""}>{task.action}</label>
                {/* complete */}
                <button className="todo-button" onClick={() => this.handleComplete(task.id)}>{task.isDone ? <i class="far fa-check-square"></i> : <i class="fas fa-check-square"></i>}</button>
                {/* delete */}
                <button className="todo-button" onClick={() => this.handleDelete(task.id)} ><i class="fas fa-trash-alt"></i></button>
               

            </li>
            )}
           
          </ul>

        </div>
           

        {/* liste of task */}
         
          </div>
     
    )
  }
}

export default App
