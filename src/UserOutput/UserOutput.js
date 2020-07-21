import React from 'react';

import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Hello {props.username}</p>
      <p>How're you {props.username}</p>
    </div>
  );
};

export default UserOutput;