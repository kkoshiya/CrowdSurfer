import React from 'react';
import Article from './article';

class Explore extends React.Component {
  constructor(props){
    super(props);
    this.state={
      info: ''

    };
  };

  componentDidMount() {
    this.props.fetchNews();
    console.log('hey');
    console.log(this.props.fetchNews())
  }


  render() {
    if (this.props.news.length === 0) {
      console.log('hello')
      return null
    };
      return (
        <div>
            {
              this.props.news[2].map(article =>
                <div>
                  <Article article={article}/>
                </div>)
            }
        </div>
      )

  }

};

export default Explore;