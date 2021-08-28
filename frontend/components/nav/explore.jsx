import React from 'react';
import Article from './article';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-grid.css';



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
          <body>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
            />
          </body>
          <ul>
            {
              this.props.projects.map(project =>
                <div class="row row-cols-3">
                  <div className="col-3"></div>
                  <div className="col-6">
                    <div className="article-container">
                      <Article project={project}></Article>
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>)
            }
          </ul>
        </div>
      )
      
    }
    
  };

  
export default Explore;