import React from 'react';

class Article extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <div style={{ display: "flex", paddingTop: '2%', paddingBottom: '2%', marginLeft: '5%', marginRight: '5%', borderBottom: '1px solid lightgray'}}>
        <div style={{ width: "70%" }}>
          <h1 style={{ fontSize: '24px', paddingLeft: '3%', }}>{this.props.article.title}</h1>
          <br/>
          <h2 style={{ fontSize: '16px', paddingLeft: '6%',}}>{this.props.article.description}</h2>
        </div>
        <img class='news-img' src={`${this.props.article.urlToImage}`} />
      </div>
    )
  }
}


export default Article;

