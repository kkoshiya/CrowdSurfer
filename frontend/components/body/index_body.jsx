import React from 'react';
import Focus from './focus/focus_container';
import Side from './side/side_container';
import Bottom from './bottom_body'

class IndexBody extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div id="index-body">
        <div id="focus-body">
          {/* <Focus match={this.props.match}/> */}
          <Focus />
        </div>
        <div id="side-body">
          <Side match={this.props.match}/>
        </div>
      </div>
    )
  }
}

export default IndexBody;