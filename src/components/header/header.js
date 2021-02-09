import React from "react";

const Header = (props) => {
  const { onSearchHandler } = props;

  return (
    <header data-testid="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center logo">
            <span className="material-icons">layers</span>
            <div className="logo-text">Notonews</div>
          </a>
          <ul className="navlist d-flex">
            <li
              className="list-item d-flex"
              id="search-icon"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={onSearchHandler}
            >
              <span className="material-icons">search</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
