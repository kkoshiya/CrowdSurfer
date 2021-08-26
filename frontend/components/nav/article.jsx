import React from 'react';
import { Link} from "react-router-dom";

const Article = (props) => (
  <Link to={`/projects/${props.project.id}`}>
    <div id="side-item">
      <div>kyle</div>
       <img id="side-img" src={props.project.image}/>
      <div id="side-text">
        <p id="side-title">{props.project.title}</p>
        <p id="side-target">{Math.floor((props.project.current_total / props.project.target)*100)}% funded</p> 
        <p id="side-author">By {props.project.user.name}</p>
      </div>
    </div>
  </Link>
)


export default Article;

