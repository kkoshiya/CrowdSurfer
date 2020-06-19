import React from 'react';
import SideItem from './side_item';
import { Link } from "react-router-dom";

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {start: 1, end: 4};
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  next() {
    let new_start = this.state.start += 1;
    let new_end = this.state.end += 1;
    this.setState({start: new_start, end: new_end});
  }

  back() {
    let new_start = this.state.start -= 1;
    let new_end = this.state.end -= 1;
    this.setState({start: new_start, end: new_end});
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
          <h1>&larr;</h1>
          <h1 class='number' onClick={this.back}>Back</h1>
          <h1 class='number' onClick={this.next}>Next</h1>
          <h1>&rarr;</h1>
        </div>
      </div>
    )
  }
}

export default Side;