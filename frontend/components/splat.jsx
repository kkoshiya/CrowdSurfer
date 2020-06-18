 import React from "react";
import Nav_container from "./nav/nav_container";
import BarContainer from "./bar/bar_container";
import IndexBody_container from './body/index_body_container';
import Subscribe from './body/subscribe/subscribe_container'
import Bottom from './body/bottom_body'

class Splat extends React.Component {
  constructor(props){
    debugger
    super(props)
  }

  render() {
    return (
      <div>
        <BarContainer />
        <IndexBody_container match={this.props.match} />
        <Subscribe />
        <Bottom />
      </div>
    )
  }
}

export default Splat;

