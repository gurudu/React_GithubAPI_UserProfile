import React, { Component } from 'react';
import '../App.css';
import FetchAPIComponent from './FetchAPIComponent';
//import {Form,FormControl} from 'react-bootstrap';
//list of repositories of a  owner
// https://api.github.com/users/${login}/repos

//list repositories by repository name of a user
//https://api.github.com/repos/${login}/${repository_name}

//list contributors
//GET /repos/:owner/:repo/contributors

class GetUser extends Component {
  constructor() {
    super();
    this.changeLogin = this.changeLogin.bind(this);
    this.state = {
      login: 'gurudu',
    };
  }

  changeLogin(e) {
    this.setState({ login: e.target.value });
  }

  render() {
    return (
       <div className="container">
       <form>
       <input className="form-control"
            type="text"
            value={this.state.value}
            placeholder="Enter user name"
            onChange={this.changeLogin}
          />

       </form>
       <FetchAPIComponent user={this.state.login}/>
       </div>
     );
  }
}
export default GetUser;
