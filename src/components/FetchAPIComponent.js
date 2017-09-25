import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
//import {Form,Panel, Button,Label} from 'react-bootstrap';
//import Contributors from './Contributors';
import  UserInfo from './UserInfo';
import Repos from './Repos';

//list of repositories of a  owner
// https://api.github.com/users/${login}/repos

//list repositories by repository name of a user
//https://api.github.com/repos/${login}/${repository_name}

//list contributors
//GET /repos/:owner/:repo/contributors

class FetchAPIComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      repos:[],
      login:'',
      contributors:[]
    };
  }
//https://api.github.com/search/repositories?q=user:${user}
//https://api.github.com/users/${user}/repos
fetchUser1(user) {
  let url = `https://api.github.com/users/${user}`;
  return axios.get(url);
}
fetchRepos1(user) {
  let url = `https://api.github.com/users/${user}/repos`;
  return axios.get(url);
}
  fetchUser(user) {
    let url = `https://api.github.com/users/${user}`;
    axios.get(url)
       .then((response) => {
          this.setState({ userInfo: response.data});
          console.log(response);
        })
       .catch((error) => {
          console.log(error);
        });
  }
  fetchRepos(user) {
    let url = `https://api.github.com/users/${user}/repos`;
    axios.get(url)
       .then((response) => {
          this.setState({ repos: response.data});
          //console.log(this.state.repos);
        })
       .catch((error) => {
          console.log(error);
        });
  }

  componentDidMount() {
    this.fetchUser(this.state.login);
    this.fetchRepos(this.state.login);
    //console.log(this.state.login);

  }
  handleSubmit(event){
    this.fetchUser(this.state.login);
    this.fetchRepos(this.state.login);
     event.preventDefault();
  }
  handleChange(e){
      this.setState({ login: e.target.value });
  }
  render() {

console.log(this.state.userInfo.length);
    return (
         <div className="container">
           <form className="form-inline form-1" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group mx-sm-3">
              <input type="text" className="form-control" value={this.state.value} placeholder="enter user name" onChange={this.handleChange.bind(this)}/>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
              { this.state.userInfo.name  &&
                <UserInfo info={this.state.userInfo} /> }
              {this.state.repos.length>0 &&
                <Repos repos={this.state.repos} />
              }
            </div>
          )
  }
}
  export default FetchAPIComponent;
