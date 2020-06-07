import React from 'react';
import { Link} from "react-router-dom"

class Bar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div id="bar_container">
        <div id="bar-middle">
          <div id="bar">
            <div className="cat-item-and-line">
              <Link to={"/art"} >
                <h5 id="bar-link">Arts</h5>
                <div id="line-container">
                  <div className="cat-list-line"></div>
                </div>
              </Link>
            </div>

            <h5 id="bar-link">Comics/Illistrations</h5>

            <div className="cat-item-and-line">
              <Link to={"/technology"}>
                <h5 id="bar-link">Design/Tech</h5>
                <div id="line-container">
                  <div className="cat-list-line"></div>
                </div>
              </Link>
            </div>
            
            <h5 id="bar-link">Film </h5>
            <h5 id="bar-link">Food/Craft</h5>
            <h5 id="bar-link">Games</h5>

            
            <div className="cat-item-and-line">
              <Link to={"/music"}>
                <h5 id="bar-link">Music</h5>
                <div id="line-container">
                  <div className="cat-list-line"></div>
                </div>
              </Link>
            </div>
            <div className="cat-item-and-line">
              <Link to={"/publishing"}>
                <h5 id="bar-link">Publishing</h5>
                <div id="line-container">
                  <div className="cat-list-line"></div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Bar;