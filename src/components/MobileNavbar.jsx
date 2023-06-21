import React from "react";

const MobileNavbar = ({ HamburgerIcon }) => {
  return (
    <>
      <img src="/logo.svg" alt="" className="logo" />
      <div className="hamburger-icon">
        <HamburgerIcon />
      </div>
      <div className="navbar-mobile-container">
        <div className="background-menu"></div>
        <div className="links-menu"></div>
      </div>
    </>
  );
};

export default MobileNavbar;
