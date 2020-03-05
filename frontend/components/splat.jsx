import React from "react";
import Nav_container from "./nav/nav_container";
import Bar_container from "./bar/bar_container";
import IndexBody_container from './body/index_body_container';
import Subscribe from './body/subscribe/subscribe_container'

const Splat = () => (
    <div>
      <Bar_container />
      <IndexBody_container />
      <Subscribe />
    </div>
);

export default Splat;

