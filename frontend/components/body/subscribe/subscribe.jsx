import React from 'react';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'subscribe-form',
      text: 'Enter Email Adress'
    };
    this.thanks = this.thanks.bind(this);
  };

  thanks() {
    this.setState({
      status: 'thanks',
      text: 'Thank you for Subscribing'
    })
  }

  render() {
    let status = this.state.status;
    let text = this.state.text;

    return (
      <div id="subscribe_container">
        <div id="subscribe">
          <form>
            <label id="subscribe-1">Discover the best and brightest projects on Kickstarter.
              <br/>
              <div id="subscribe-2">Sign up to receive our weekly Projects We Love newsletter.</div>
              <br/>
              <input id={status} placeholder={text} type="text"/>
            </label>
            <button id="subscribe_button" onClick={this.thanks}>Subscribe</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Subscribe;