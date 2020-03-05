import React from 'react';
import { Link} from "react-router-dom"

class Bar extends React.Component {

  render() {
    return (
      <div id="bar_container">
        <div id="bar">
          <Link to={"/arts"}>
            <h5>Arts</h5>
          </Link>
          <h5>Comics/Illistrations</h5>
          <h5>Design/Tech</h5>
          <h5>Film</h5>
          <h5>Food/Craft</h5>
          <h5>Games</h5>
          <h5>Music</h5>
          <h5>Publishing</h5>
        </div>
      </div>
    )
  }
}

export default Bar;