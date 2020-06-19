import React from 'react';

const Article = (props) => (
  <div class='article'>
    <div >
      <h1>{props.article.title}</h1>
      <h2>{props.article.description}</h2>
      <h3>By {props.article.author}</h3>
    </div>
    {/* <img class='article-img' src={`${props.article.urlToImage}`} /> */}
  </div>
);

export default Article;

