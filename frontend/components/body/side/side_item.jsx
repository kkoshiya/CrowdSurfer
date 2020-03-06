import React from 'react';

const SideItem = (props) => (
  <div id="side-item">
    <img id="side-img" src="assets/background.png"/>
    <div id="side-text">
      <p id="side-title">{props.project.title}</p>
      <p id="side-target">{Math.floor((props.project.current_total / props.project.target)*100)}% funded</p> 
      <p>By {props.project.user.name}</p>
    </div>
  </div>
)
  

export default SideItem