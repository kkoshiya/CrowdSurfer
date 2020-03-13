import React from 'react';
import { Link } from "react-router-dom";


class Focus extends React.Component {
  constructor(props){
    super(props);
    this.state = {k: true}
  }

  componentDidMount() {
    this.props.fetchProjects();
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname){
  //     debugger
  //     this.setState( {k: !this.state.k} )
  //   }
  // }

  render() {
    if (this.props.projects.length === 0) return null;
    let projects = this.props.projects;
    if (this.props.location.pathname !== '/') {
      projects = this.props.projects.filter(project => project.category === this.props.location.pathname.slice(1))
    }
    const sample = {title: ''};
    const project = projects[0] || sample;
    const k = "k"
    return (
      <div id="focus-container">
        <h5 id="featured">FEATURED PROJECT</h5>
        <Link to={`/projects/${project.id}`}>
          <div id="focus-item">
            <img className="featured_pic" src={project.image}  />
            <h5 id="description_focus">{project.title}</h5>
            <h5 className="focus-description">{project.description}</h5>
            <h5 id='featured'>By: {project.user.name}</h5>
          </div>
        </Link>
      </div>
    )
  }
}

export default Focus;