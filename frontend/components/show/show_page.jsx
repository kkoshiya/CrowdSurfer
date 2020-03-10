import React from 'react';


class ShowPage extends React.Component {
  constructor(props){
    super(props);
    // this.state = this.props
  }

  componentDidMount() {
    // this.props.fetchProjects();
    this.props.fetchProject(this.props.project.id);

  }

  render() {
    if (!this.props.project) return null;
      return (
        <div>
          <div id="show-header">
            <h1 id="show-title">This is the show page for {this.props.project.title}</h1>
            <br/>
            <div id="show-description-container">
              <h3 id="show-description" >"Project Description" (Will add later)</h3>
            </div>
          </div>
          <p>This the the body: {this.props.project.body}</p>
          <h1>Number of backers "Hold for now"</h1>
          <h1>{this.props.project.total}</h1>

        </div>
      )
  }
}

export default ShowPage;