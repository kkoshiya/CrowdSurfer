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
      img_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  };

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createProject(this.state);
  }


  render() {
    return (
      <div>
        <div class="crud-body">
          <h1 class="crud-title">Start a New Project</h1>
          <div class="crud-form">
            <form onSubmit={this.handleSubmit}>
              <input class="crud-input" type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')}/>
              <br/>
              <input class="crud-input" type="text" value={this.state.description} placeholder="Description" onChange={this.update('description')}/>
              <br />
              <input class="crud-input" type="text" value={this.state.body} placeholder="Body" onChange={this.update('body')}/>
              <br />
              <input class="crud-input" type="text" value={this.state.category} placeholder="Category" onChange={this.update('category')} />
              <br />
              <input class="crud-input" type="number" value={this.state.current_total} placeholder="Current Total" onChange={this.update('current_total')} />
              <br />
              <input class="crud-input" type="number" value={this.state.target} placeholder="Target" onChange={this.update('target')} />
              <br />
              <input class="crud-input" type="text" value={this.state.img_url} placeholder="Image Url" onChange={this.update('img_url')} />
              <br />
              <button class="crud-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )

  }

};

export default Crud;