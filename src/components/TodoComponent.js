import React, { Component } from 'react';
import '../App.css';

class TodoComponent extends Component {
  constructor(){
    super();
    this.state = {
      todos:['Do','First','things','First'],
      age:30
    }
  }
 componentDidMount(){
    setInterval( () => this.updateAge(),1000);
  }
  updateAge(){
    this.setState({
      age:35
    });
  }
  render(){
    let todos = this.state.todos;
    todos = todos.map((item,index) => {
       return (
         <li key={index}>{ item }</li>
       )
    });
    //this.updateAge();
    let a ="Hallo";
    return(
       <div>
        <p> {a} </p>
         {this.state.age}
        <ul>
         {todos}
        </ul>
       </div>
    )
  }

}
export default TodoComponent;
