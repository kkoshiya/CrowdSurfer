import React from 'react';

class Explore extends React.Component {
  constructor(props){
    super(props);
    this.state={
      info: ''
    };
  };

  componentDidMount() {
    this.props.fetchNews();
  }


  render() {
    if (!this.props.news) return null 
    return (
      <div>
        <h1>Explore</h1>
        <h1>{this.props.news.articles}</h1>
      </div>

    )
  }

};

export default Explore;