import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import JobDetail from "./view/JobDetail";

import Sidebar from "./components/layout/Sidebar";
import Joblisting from "./view/jobListing";

import List from "./components/layout/list";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Joblisting />
            </Route>
            <Route path="/jobs/:jobId">
              <JobDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>My react app</h1>
//     </div>
//   );
// }

export default App;
