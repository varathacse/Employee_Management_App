import React from "react";

let HeaderComponent = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-md">
          <div>
            <a href="/" className="navbar-brand">
              <span className="full-text">Employee Management App</span>
              <span className="short-text">EMS</span>
            </a>
          </div>

          <div className="btn1">
            <a href="/add-employee/:id" className="navbar-brand">
              <button className="btn btn-primary">Add Employee</button>
            </a>
          </div>

          <div className="btn2">
            <a href="/search" className="navbar-brand">
              <button className="btn btn-primary">Search Employee</button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
