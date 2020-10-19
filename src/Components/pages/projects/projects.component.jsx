import React from "react";

import Card from "../../card/card.component";

import "./projects.styles.scss";

const Project = () => (
  <div className="project">
    <h1>Projects</h1>
    <Card
      title="Car dealership"
      url="https://images.unsplash.com/photo-1596265371388-43edbaadab94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      alt="image"
    />
  </div>
);

export default Project;