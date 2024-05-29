import React, { useEffect, useState } from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Home from "./pages/Home";
import Stream from "./pages/Stream";
import Navbar from "./components/Navbar";
import NewsFeed from "./pages/NewsFeed";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/news" element={<NewsFeed />} />
      </Switch>
    </div>
  );
}

export default App;
