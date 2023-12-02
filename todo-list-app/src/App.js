import React,{Component} from "react";
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [],
    newTodo: '',
  };

  handleNewTodoChange = (e) => {
    this.setState({newTodo: e.target.value});
  };

  addTodo = () => {
    if(this.state.newTodo){
      this.setState((prevState) => ({
        todos: [...prevState.todos,prevState.newTodo],
        newTodo: '',
      }));
    }
  };

  render(){
    return(
      <div className="APP">
        <h1>Todo List</h1>
        <div>
          <input type="text" placeholder="New Todo"
          value={this.state.newTodo} onChange={this.handleNewTodoChange}></input>
          <button onClick={this.addTodo}>Add</button>
        </div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;