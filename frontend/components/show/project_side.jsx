import React from 'react';

const Side = (props) => {
    let user = props.currentUser;
    let project = props.project;
    let change = 145;
    let backers = 53;

    const back = (update) => {
      project.current_total += change;
      user.balance -= change;
      update(user, project);
    }
    

  return(
    <div className="show-side-container">
    <progress max="100" value= {Math.floor((props.project.current_total / props.project.target)*100)}></progress>

    <div className="show-side-target">
      <h1>${props.project.current_total.toLocaleString()}</h1>
      <h1>pledged of ${props.project.target.toLocaleString()} goal</h1>
    </div>
      
    <div className="show-side-backers-days">
      <h1>{backers}</h1>
      <h1>backers</h1>
    </div>

    <div className="show-side-backers-days">
      <h1>40</h1>
      <h1>days to go</h1>
    </div>
    
    <div>
      <button className="back-button" onClick={() => back(props.update)}>Back this project</button>
    </div>
    
    <div className="show-side-bottom">
      <button className="remind-me-button">Remind me</button>
      <div className="show-side-bottom-right">
        <a href="https://www.facebook.com/">
          <img className="facebook-logo-small" src="assets/facebook.png" />
        </a>
      </div>
    </div>

  </div>
)};

export default Side;