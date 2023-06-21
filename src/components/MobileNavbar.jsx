/* eslint-disable react/prop-types */
import { useState } from "react";

const MobileNavbar = ({
  HamburgerIcon,
  CloseIcon,
  isFeaturesOpen,
  setIsFeaturesOpen,
  ArrowDownIcon,
  ArrowUpIcon,
  LinksCard,
  LinksData_1,
  isCompanyOpen,
  setIsCompanyOpen,
  LinksData_2,
  handleOpenFeatures,
  handleOpenCompany,
  handleCloseMenu,
  handleOpenMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const main = document.querySelector("main");

  const closeMenu = () => {
    handleCloseMenu(setIsOpen, main);
  }

  return (
    <>
      <img src="/logo.svg" alt="" className="logo" />
      <div className="hamburger-icon">
        <HamburgerIcon onClick={() => handleOpenMenu(setIsOpen, main)} />
      </div>
      {isOpen && (
        <div
          className={`navbar-mobile-container ${
            isOpen && "mobile-menu-active"
          }`}
        >
          <div
            className="background-menu"
            onClick={closeMenu}
          ></div>
          <div className="links-menu">
            <CloseIcon
              onClick={closeMenu}
              className="close-icon"
            />
            <div
              className="inner-nav_1"
              onClick={(e) => {
                handleOpenFeatures(e, isFeaturesOpen, setIsFeaturesOpen);
              }}
            >
              <div className="_1">
                Features
                {isFeaturesOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
              </div>

              {isFeaturesOpen && (
                <LinksCard
                  links={LinksData_1}
                  styleClass="_1"
                  mobile
                  handleCloseMenu={closeMenu}
                />
              )}
            </div>
            <div
              className="inner-nav_2"
              onClick={(e) =>
                handleOpenCompany(e, isCompanyOpen, setIsCompanyOpen)
              }
            >
              <div className="_2">
                Company
                {isCompanyOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
              </div>
              {isCompanyOpen && (
                <LinksCard
                  links={LinksData_2}
                  styleClass="_2"
                  mobile
                  handleCloseMenu={closeMenu}
                />
              )}
            </div>
            <a href="#careers" onClick={closeMenu}>
              Careers
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <button
              className="login"
              type="button"
              onClick={closeMenu}
            >
              Login
            </button>
            <button
              className="register"
              type="button"
              onClick={closeMenu}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
