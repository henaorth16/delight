import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Under } from "./components/Under";
import Loader from "./components/Loader";
import YourComponent from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      />
      <YourComponent />
      <Outlet className="set-margin" />
      <Under />
    </div>
  );
}

export default App;
