import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  api= process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <LoadingBar height={5} color="#f11946" progress={this.state.progress} />
                </>
              }
            >
              <Route
                index
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="general"
                  />
                }
              />
              <Route
                path="Business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="Business"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="Business"
                  />
                }
              />
              <Route
                path="Entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="Entertainment"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="Entertainment"
                  />
                }
              />
              <Route
                path="General"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="General"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="General"
                  />
                }
              />
              <Route
                path="Health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="Health"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="Health"
                  />
                }
              />
              <Route
                path="Sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="Sports"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="Sports"
                  />
                }
              />
              <Route
                path="Science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="Science"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="Science"
                  />
                }
              />
              <Route
                path="Technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="Technology"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="Technology"
                  />
                }
              />
              <Route
                path="ContactMe"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="ContactMe"
                    pageSize={6}
                    country="in"
                    api={this.api}
                    category="ContactMe"
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
