import React from 'react';
import { Link} from "react-router-dom";

const SideItem = (props) => (
  <Link to={`/projects/${props.project.id}`}>
    <div id="side-item">
       <img id="side-img" src={props.project.image}/>
      <div id="side-text">
        <p id="side-title">{props.project.title}</p>
        <p id="side-target">{Math.floor((props.project.current_total / props.project.target)*100)}% funded</p> 
        <p>By {props.project.user.name}</p>
      </div>
    </div>
  </Link>
)
  

export default SideItem
