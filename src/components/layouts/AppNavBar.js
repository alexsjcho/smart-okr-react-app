import React from "react";
import { Link } from "react-router-dom";

const AppNavBar = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="nav-link navbar-brand"> {branding} </div>
      <Link to="/"> Home </Link>
      <Link to="/dashboard"> Dashboard </Link>
    </nav>
  );
};

AppNavBar.defaultProps = {
  branding: "SOKR"
};

export default AppNavBar;
