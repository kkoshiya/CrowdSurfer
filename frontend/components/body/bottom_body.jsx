import React from 'react';

const Bottom = (props) => (
  <div>
    <div class="bottom-title-container">
      <h1 class="bottom-title">Today's Featured Project</h1>  
      <img src={window.featured} />
      <h1>Information</h1>
    </div>
  </div>
) 

export default Bottom;