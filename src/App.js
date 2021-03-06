import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const api = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <LoadingBar height={5} color="aqua" progress={progress} />
              </>
            }
          >
            <Route
              index
              element={
                <News
                  setProgress={setprogress}
                  key="general"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="general"
                />
              }
            />
            <Route
              path="Business"
              element={
                <News
                  setProgress={setprogress}
                  key="Business"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="Business"
                />
              }
            />
            <Route
              path="Entertainment"
              element={
                <News
                  setProgress={setprogress}
                  key="Entertainment"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="Entertainment"
                />
              }
            />
            <Route
              path="Health"
              element={
                <News
                  setProgress={setprogress}
                  key="Health"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="Health"
                />
              }
            />
            <Route
              path="Sports"
              element={
                <News
                  setProgress={setprogress}
                  key="Sports"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="Sports"
                />
              }
            />
            <Route
              path="Science"
              element={
                <News
                  setProgress={setprogress}
                  key="Science"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="Science"
                />
              }
            />
            <Route
              path="Technology"
              element={
                <News
                  setProgress={setprogress}
                  key="Technology"
                  pageSize={6}
                  country="in"
                  api={api}
                  category="Technology"
                />
              }
            />
            <Route
              path="ContactMe"
              element={
                <News
                  setProgress={setprogress}
                  key="ContactMe"
                  pageSize={6}
                  country="in"
                  api={api}
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
