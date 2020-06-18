import React from 'react';


class Crud extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      user_id: '',
      description: '',
      body: '',
      category: '',
      date: '',
      current_total: '',
      target: '',
      img_url: ''
    };
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state);
  }


  render() {
    return (
      <div>
        <h1>Start a New Project</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input id="crud" type="text" value={this.state.title} placeholder="Title" onChange={this.update('Title')}/>
            <br/>
            <input type="text" value={this.state.description} placeholder="Description" onChange={this.update('Description')}/>
            <br />
            <input type="text" value={this.state.body} placeholder="Body" onChange={this.update('Body')}/>
            <br />
            <input type="text" value={this.state.category} placeholder="Category" onChange={this.update('Category')} />
            <br />
            <input type="text" value={this.state.img_url} placeholder="Image Url" onChange={this.update('Image Url')} />
            <br />
            <button id="submit_button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )

  }

};

export default Crud;