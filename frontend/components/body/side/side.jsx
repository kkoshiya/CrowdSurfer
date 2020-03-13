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
    let projects = this.props.projects;
    if (this.props.location.pathname !== '/') {
      projects = this.props.projects.filter(project => project.category === this.props.location.pathname.slice(1))
    }
    const sample = { title: '' };
    let three_show = projects.slice(1,4) || sample;
    return (
      <div id="side">
        <h1 id="recomended-text">RECOMENDED</h1>
        <div>
          <ul id="side_posts">
            {
              three_show.map(project =>
                <div key={project.id}><SideItem project={project}/></div>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Side;