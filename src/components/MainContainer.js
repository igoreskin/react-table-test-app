import React, { Component } from 'react';
import axios from 'axios';

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
        console.log(this.state.users)
      })
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div>Main Container</div>
    )
  }



}

export default MainContainer;