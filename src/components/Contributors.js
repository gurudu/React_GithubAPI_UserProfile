import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Contributors extends Component {

  render() {
    return (
       <div class="l-items">
        <span>
          Built By
          <ul>
          {/*if(this.state.contributors){
            this.state.contributors.map((item,index) => {
              return <li key={index}> <img alt={item.name} title="" src={item.avatar_url} height="20" width="20" /></li>
            })
          }else{
            <li>Loading...</li>
          } */}
          <a href={this.props.contributors_url}>  <li> Contributors-{this.state.contributors}</li> </a>

          </ul>
          </span>
       </div>
     );
  }
}
export default Contributors;
