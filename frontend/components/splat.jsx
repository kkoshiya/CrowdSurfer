 import React from "react";
import Nav_container from "./nav/nav_container";
import BarContainer from "./bar/bar_container";
import IndexBody_container from './body/index_body_container';
import Subscribe from './body/subscribe/subscribe_container'

class Splat extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <BarContainer />
        <IndexBody_container match={this.props.match} />
        <Subscribe />
      </div>
    )
  }
}

export default Splat;

