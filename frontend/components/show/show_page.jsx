import React from 'react';
import Side from './project_side'


class ShowPage extends React.Component {
  constructor(props){
    super(props);
    // this.state = this.props
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    if (!this.props.project) return null;
      return (
        <div>

          <div id="show-header">
            <h1 id="show-title">{this.props.project.title}</h1>
            <br/>
            <div id="show-description-container">
              <h3 id="show-description">{this.props.project.description}</h3>
            </div>
          </div>

          <div className="show-center">
            <img className="main-show-img" src={this.props.project.image} />
            <div id="side-show-funding">
              <Side project={this.props.project} update={this.props.update} currentUser={this.props.currentUser} />
            </div>
          </div>

        </div>
      )
  }
}

export default ShowPage;