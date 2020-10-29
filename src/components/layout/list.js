import React from "react";
import axios from "../../apis/axios";
import SideBar from "./Sidebar";

class List extends React.Component {
  componentDidMount() {
    const apiUrl = "https://jobs.github.com/positions.json?location=new+york";
    axios
      .get("https://jobs.github.com/positions.json?location=new+york", {
        headers: {
          "Content-Type": "application/json",
          //   "Access-Control-Allow-Origin": "*",
        },
        timeout: 15000,
      })
      .then(
        (response) => {
          console.log("response:", response);
        },
        (err) => {
          console.log("errr:", err);
        }
      );
  }

  render() {
    return <div></div>;
  }
}

export default List;
