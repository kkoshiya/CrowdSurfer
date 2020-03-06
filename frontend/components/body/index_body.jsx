import React from 'react';
import Focus from './focus/focus_container';
import Side from './side/side_container';

class IndexBody extends React.Component {

  render() {
    return (
      <div id="index-body">
        <div id="focus-body">
          <Focus />
        </div>
        <div id="side-body">
          <Side />
        </div>
      </div>
    )
  }
}

export default IndexBody;