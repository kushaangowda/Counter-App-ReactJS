import React, { Component } from "react";

// Stateless Functional Component, i.e., no state
// So, instead of class representation,
// we use function
// change this.props to props, send props as argument
// Now instead of props, we grab totalCounters and use it directly

const NavBar = (props) => {
  console.log("NavBar - Rendered");

  const { totalCounters } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
