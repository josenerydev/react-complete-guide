import React, { Component } from 'react';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    username: "José Ângelo"
  };

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const style = {
      backgroundColor: '#ccc',
      border: '1px solid #eee',
      borderRadius: '5px',
      width: '60%',
      margin: '1rem auto',
      boxShadow: '10px 20px 30px green'
    };

    return (
      <div className="App" >
        <div style={style}>
          <UserOutput username={this.state.username} />
          <UserInput change={this.nameChangeHandler} value={this.state.username} />
        </div>
      </div>
    );
  }
}

export default App;
