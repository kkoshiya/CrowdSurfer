import React from 'react';
import Focus from './focus/focus_container';
import Side from './side/side_container';

class IndexBody extends React.Component {

  render() {
    return (
      <div id="index_body">
        <div id="focus">
          <Focus />
        </div>
        <div id="side">
          <Side />
        </div>
      </div>
    )
  }
}

export default IndexBody;