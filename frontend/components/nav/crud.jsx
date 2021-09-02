import React from 'react';
import { Link } from "react-router-dom";


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
      image: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  };

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state);
  }


  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
        </head>
        <body>
          <div class="crud-background">
            <div class="crud-top"></div>
            <div class="crud-container">
              <div class="text-center">
                <div class="crud-title">Start a New Project</div>
                <div>
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
                    <input class="crud-input" type="text" value={this.state.image} placeholder="Image Url" onChange={this.update('image')} />
                    <br />
                    <button class="crud-button" type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>

            

            <div class="crud-bottom"></div>
          </div>
        </body>
      </div>
    )

  }

};

export default Crud;