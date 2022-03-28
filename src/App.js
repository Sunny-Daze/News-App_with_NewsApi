import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <BrowserRouter>
          <Routes
            path="/"
            element={<News pageSize={6} country="in" category="general" />}
          >
            <Route
              index
              element={<News pageSize={6} country="in" category="general" />}
            />
            <Route
              path="Business"
              element={<News pageSize={6} country="in" category="Business" />}
            />
            <Route
              path="Entertainment"
              element={
                <News pageSize={6} country="in" category="Entertainment" />
              }
            />
            <Route
              path="General"
              element={<News pageSize={6} country="in" category="General" />}
            />
            <Route
              path="Health"
              element={<News pageSize={6} country="in" category="Health" />}
            />
            <Route
              path="Sports"
              element={<News pageSize={6} country="in" category="Sports" />}
            />
            <Route
              path="Science"
              element={<News pageSize={6} country="in" category="Science" />}
            />
            <Route
              path="Technology"
              element={<News pageSize={6} country="in" category="Technology" />}
            />
            <Route
              path="ContactMe"
              element={<News pageSize={6} country="in" category="ContactMe" />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
