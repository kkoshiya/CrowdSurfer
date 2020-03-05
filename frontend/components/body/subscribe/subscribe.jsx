import React from 'react';

class Subscribe extends React.Component {

  render() {
    return (
      <div id="subscribe_container">
        <div id="subscribe">
          <form>
            <label id="subscribe-1">Discover the best and brightest projects on Kickstarter.
              <br/>
              <h3 id="subscribe-2">Sign up to receive our weekly Projects We Love newsletter.</h3>
              <br/>
              <input id="subscribe-form" placeholder="Enter Email Adress" type="text"/>
            </label>
            <button id="subscribe_button">Subscribe</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Subscribe;