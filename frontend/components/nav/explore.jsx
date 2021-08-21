import React from 'react';
import Article from './article';

class Explore extends React.Component {
  constructor(props){
    super(props);
    this.state={
      projects: []
    };
  };

  componentDidMount() {
    this.props.fetchProjects();
    console.log(this.props.fetchProjects())
  }



  render() {
    if (this.props.projects === undefined) {
      console.log('hello')
      return null
    };
      return (
        <div>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
          </head>
          <body>
            <h1>kyle</h1>
          </body>
          <h1>{this.props.projects.length}</h1>
            {
              this.props.projects.map(project =>
                <div>
                  
                </div>)
            }
        </div>
      )

  }

};

export default Explore;