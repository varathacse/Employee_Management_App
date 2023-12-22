import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./ListEmployeeComponent";
import CreateEmployeeComponent from "./CreateEmployeeComponent";
import ViewEmployeeComponent from "./ViewEmployeeComponent";
import UpdateEmployeeComponent from "./UpdateEmployeeComponent";
import SearchItem from "./SearchItem";

let Content=()=> {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" exact element={<ListEmployeeComponent />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route
            path="/add-employee/:id"
            element={<CreateEmployeeComponent />}
          ></Route>
          <Route
            path="/view-employee/:id"
            element={<ViewEmployeeComponent />}
          ></Route>
          <Route
            path="/update-employee/:id"
            element={<UpdateEmployeeComponent />}
          ></Route>
          <Route path="/search" element={<SearchItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Content;
