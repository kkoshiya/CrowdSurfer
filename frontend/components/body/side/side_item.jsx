import React from 'react';
import { Link} from "react-router-dom";

const SideItem = (props) => (
    <div id="side-item">
      <img id="side-img" src="assets/background.png"/>
      <div id="side-text">
        <Link to={`/projects/${props.project.id}`}>
          <p id="side-title">{props.project.title}</p>
        </Link>
        <p id="side-target">{Math.floor((props.project.current_total / props.project.target)*100)}% funded</p> 
        <p>By {props.project.user.name}</p>
      </div>
    </div>
)
  

export default SideItem
