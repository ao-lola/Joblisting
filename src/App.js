import React, { Component } from "react";

import Sidebar from "./components/layout/Sidebar";
import Joblisting from "./view/jobListing";

import List from "./components/layout/list";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Joblisting />
      </div>
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
