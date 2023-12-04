// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./Demo";
import CategoryDetail from "./Demo2";


const App = () => {
  return (
    <Categories/>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={Categories} />
    //     <Route path="/categories/:id" component={CategoryDetail} />
    //   </Routes>
    // </Router>
  );
};

export default App;
