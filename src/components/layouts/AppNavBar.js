import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavBar = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <a className="p-2 text-dark" href="/">
        {branding}
      </a>
      <a className="p-2 text-dark" href="/">
        Blog
      </a>
      <a className="p-2 text-dark" href="/">
        Schedule Time
      </a>
      <a className="p-2 text-dark" href="/">
        GitHub Repo
      </a>
      <a className="p-2 text-dark" href="/">
        Product Roadmap Sheet
      </a>
    </nav>
  );
};

AppNavBar.defaultProps = {
  branding: "SOKR"
};

export default AppNavBar;
