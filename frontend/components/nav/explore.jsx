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
    this.props.fetchProjects();
    console.log('hey');
    console.log(this.props.fetchProjects())
  }


  render() {
    if (this.props.projects.length === 0) {
      console.log('hello')
      return null
    };
      return (
        <div>
          <h1>test</h1>
          <h1>test.length</h1>
            {
              this.props.projects[2].map(project =>
                <div>
                  <Article project={project}/>
                </div>)
            }
        </div>
      )

  }

};

export default Explore;