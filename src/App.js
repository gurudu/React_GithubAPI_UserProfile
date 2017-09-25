import React, { Component } from 'react';
import './App.css';
//import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from '././components/clock';
import moment from 'moment';
import TodoComponent from '././components/TodoComponent';
import FetchAPIComponent from '././components/FetchAPIComponent';
import {BrowserRouter as Router,Link,Route } from 'react-router-dom';
class App extends Component {
  //  deadline:'11 Sep 2017 00:52:00'
  constructor(){
    super();
    this.state = {
      deadline:'31 Oct 2017',
      newDeadline:'',
      a :new Date(),
    }
  }

  changeDeadline(e) {
      this.setState({ newDeadline: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({deadline:this.state.newDeadline});
  }

  render() {
    console.log(this.state.a);
    console.log(Date.parse('2017-09-11T' + '00:43:00' + 'Z'));
    return (
    <Router>
      <div className="container">
       <div className="titles">
        <Link to="/" >  GitHub </Link>
        <Link to="/clockCountdown" >ClockCountdown</Link>
        </div>
        <Route path="/clockCountdown" render ={() =>(
          <div className="App">
          <Clock deadline={this.state.deadline}/>
          <form className="form-inline form-1" onSubmit={this.handleSubmit.bind(this)} >
           <input type="text"  className="form-control" placeholder='enter DD Month YYYY' onChange={this.changeDeadline.bind(this)} />
           <button className="btn btn-primary">
             Submit
           </button>
         </form>
         </div>
        ) } />
        <Route exact path="/" render ={() => (
          <div>
           <FetchAPIComponent />
          </div>
        )} />
      </div>
      </Router>
    );
  }
}

export default App;
