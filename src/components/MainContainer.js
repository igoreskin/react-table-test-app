import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    let users = [];
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        users = response.data;
        this.setState({
          users: users,
        });
      })
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div><Table users={this.state.users} /></div>
    )
  }
}

export default MainContainer;