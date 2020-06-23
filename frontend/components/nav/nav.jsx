import React from 'react';
import Greeting_container from ".././greeting/greeting_container";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: false, 
      input: '',
    };
    this.updateInput = this.updateInput.bind(this)

  }

  componentDidMount(){
    this.props.fetchProjects()
  }

  updateInput(field){
    this.setState({search: true})
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render () {
    if (!this.props.projects) return null;
    let search = 'hide-search'
    if (this.state.search) {
      search = 'show-search'
    };
    return (
      <div id="nav">
        <div id="nav_left">
          <Link to={'/explore'}>
            <p id="explore">Explore</p>
          </Link>
          <Link to={'/startproject'}>
            <p>Start a Project</p>
          </Link>
        </div>
        <div>
          <Link to={'/'}>
            <img className="logo" src={window.logo} />
          </Link>
        </div>
        <div id="nav_right">
          <div>
            {/* <p id="search-p">Search</p> */}
            {/* <input type="text" placeholder='Search Projects' value={this.state.input} onChange={this.updateInput('input')}/> */}
            <div class={search}>search test</div>
          </div>
          <Greeting_container />
        </div>
      </div>
    )
  }
}

export default Nav;