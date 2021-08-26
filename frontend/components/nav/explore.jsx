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

          </head>
          <body>
            <h1>kyle</h1>
            <div className="row">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </body>
          <h1>{this.props.projects.length}</h1>
            {
              this.props.projects.map(project =>
                <div>
                  <li>
                    <Article project={project}></Article>
                  </li>
                </div>)
            }
        </div>
      )

  }

};

export default Explore;