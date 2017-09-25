import React, { Component } from 'react';
import '../App.css';
import {Link } from 'react-router-dom';
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days:0,
      hours:0,
      minutes:0,
      seconds: 0
    }
  }
  //Before rendering the Component
  componentWillMount() {
      this.getTimeUntil(this.props.deadline);
  }
  //After rendering the Component
  componentDidMount() {
    setInterval( () => this.getTimeUntil(this.props.deadline),1000);
  }
  leading0(num){
    return num<10 ?'0'+num : num ;
  }
  getTimeUntil(deadline) {
   const time = Date.parse(deadline) - Date.parse(new Date());
   const seconds = Math.floor((time/1000) % 60);
   const minutes = Math.floor((time/1000/60) % 60);
   const hours = Math.floor(time/(1000*60*60) % 24);
   const days = Math.floor(time/(1000*60*60*24));
   this.setState({days,hours,minutes,seconds});
   if(hours == 0 && minutes == 0 && seconds == 0 ){
    alert('time is over');
   }
  }
  render() {

    return (
      <div className="App">
      <div className="container container-fluid">
        Countdown to {this.props.deadline}
       </div>
       <div className="Clock-days">{this.leading0(this.state.days)} days</div>
       <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
       <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
       <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }

}
export default Clock;
