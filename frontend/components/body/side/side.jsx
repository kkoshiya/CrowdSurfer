import React from 'react';
import SideItem from './side_item'

class Side extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProjects();
  }


  render() {
    return (
      <div id="side">
        <h1 id="recomended-text">RECOMENDED</h1>
        <div>
          <ul id="side_posts">
            {
              this.props.projects.map(project =>
                <div key={project.id}><SideItem project={project}/></div>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Side;