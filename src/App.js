import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      <div className="app__body">
        {/* SideBar*/}
        <Sidebar />
        {/*Feed */}
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
