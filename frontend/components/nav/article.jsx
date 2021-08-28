import React from 'react';
import { Link } from "react-router-dom";


const Article = (props) => (
  <Link to={`/projects/${props.project.id}`}>
    <div>
      <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
      </head>
      <div className="">
        <div className="row">
          <img className="article-img" src={props.project.image}/>
          <div className="col">
            <div >
              <div className="article-title">{props.project.title}</div>
              <div className="article-body">{props.project.description}</div>
              <div className="article-user" >By {props.project.user.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)


export default Article;

