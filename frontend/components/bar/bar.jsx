import React from 'react';
import { Link} from "react-router-dom"

class Bar extends React.Component {

  render() {
    return (
      <div id="bar_container">
        <div id="bar-middle">
          <div id="bar">
            <Link to={"/arts"}>
              <h5 id="bar-link">Arts</h5>
            </Link>
            <h5 id="bar-link">Comics/Illistrations</h5>
            <h5 id="bar-link">Design/Tech</h5>
            <h5 id="bar-link">Film</h5>
            <h5 id="bar-link">Food/Craft</h5>
            <h5 id="bar-link">Games</h5>
            <h5 id="bar-link">Music</h5>
            <h5 id="bar-link">Publishing</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Bar;