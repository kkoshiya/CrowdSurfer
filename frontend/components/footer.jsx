import React from 'react';
import Bar from './bar/bar_container'

class Footer extends React.Component {
  constructor(props){
    super(props);

  };

  render() {
    return(
    <div class='footer-container'>
      <div class='footer-body'>
        <Bar />
        <div class='footer-content'>
          <div class='etc'>Kickstarter, PBC © 2020</div>
          <img class="K-picture" src={window.k} />
        </div>
      </div>
    </div>
    )
  };
};

export default Footer
