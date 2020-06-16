import React from 'react';


class Crud extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  };


  render() {
    return (
      <div>
        <h1>Start a New Project</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.title} placeholder="Title"/>
            <button id="submit_button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )

  }

};

export default Crud;