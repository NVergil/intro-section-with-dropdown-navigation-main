const DesktopNavbar = ({
  handleOpenFeatures,
  isFeaturesOpen,
  setIsFeaturesOpen,
  ArrowDownIcon,
  ArrowUpIcon,
  LinksCard,
  LinksData_1,
  handleOpenCompany,
  isCompanyOpen,
  setIsCompanyOpen,
  LinksData_2,
}) => {
  return (
    <>
      <div className="nav_1">
        <img src="/logo.svg" alt="" className="logo" />
        <div
          className="inner-nav_1"
          onClick={(e) =>
            handleOpenFeatures(e, isFeaturesOpen, setIsFeaturesOpen)
          }
        >
          Features
          {isFeaturesOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          {isFeaturesOpen && <LinksCard links={LinksData_1} styleClass="_1" />}
        </div>
        <div
          className="inner-nav_2"
          onClick={(e) => handleOpenCompany(e, isCompanyOpen, setIsCompanyOpen)}
        >
          Company
          {isCompanyOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          {isCompanyOpen && <LinksCard links={LinksData_2} styleClass="_2" />}
        </div>
        <a href="#careers">Careers</a>
        <a href="#about">About</a>
      </div>
      <div className="nav_2">
        <button className="login" type="button">
          Login
        </button>
        <button className="register" type="button">
          Register
        </button>
      </div>
    </>
  );
};

export default DesktopNavbar;
