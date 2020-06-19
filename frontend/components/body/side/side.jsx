import React from 'react';
import SideItem from './side_item';
import { Link } from "react-router-dom";

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {start: 1, end: 4}
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
    let three_show = projects.slice(this.state.start,this.state.end) || sample;
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
        <div class="numbers">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
        </div>
      </div>
    )
  }
}

export default Side;