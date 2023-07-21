import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 26;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  apiKey = "b6980a96e61d4349bec3c28f3efd9af0";
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <div className="navbarcontainer">
            <Navbar />
          </div>
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"entertainment"}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
