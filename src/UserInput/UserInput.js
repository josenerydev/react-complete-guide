import React from 'react';
import './UserInput.css';

const UserInput = props => {
  return (
    <input className="UserInput" type="text" onChange={props.change} value={props.value} />
  );
};

export default UserInput;