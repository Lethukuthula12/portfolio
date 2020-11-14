import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from "./Components/pages/homepage/homepage.component";
import Header from "./Components/header/header.component";
import Project from "./Components/pages/projects/projects.component";
import About from "./Components/pages/about/about.component";
import Contact from "./Components/pages/contact/contact.component";
import Error from "./Components/error/error.component"

function App() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
        </Switch>
      </div>
    );
  
  
}

export default App;
