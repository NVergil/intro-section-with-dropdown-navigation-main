import { useState, useEffect } from "react";
import LinksCard from "./LinksCard";
import {
  handleOpenFeatures,
  handleOpenCompany,
  handleCloseMenu,
  handleOpenMenu,
  ArrowUpIcon,
  ArrowDownIcon,
  Todo,
  Calendar,
  Reminders,
  Planning,
  HamburgerIcon,
  CloseIcon,
} from "../utils";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleRezise = () => {
      if (window.innerWidth <= 900) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleRezise);

    const mql = window.matchMedia("(max-width: 900px)");

    if (mql.matches) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }, []);
  const LinksData_1 = [
    {
      title: "Todo List",
      Img: <Todo />,
    },
    {
      title: "Calendar",
      Img: <Calendar />,
    },
    {
      title: "Reminders",
      Img: <Reminders />,
    },
    {
      title: "Planning",
      Img: <Planning />,
    },
  ];

  const LinksData_2 = [
    {
      title: "History",
    },
    {
      title: "Our Team",
    },
    {
      title: "Blog",
    },
    {
      title: "Planning",
    },
  ];

  return (
    <nav className="navbar">
      {menu ? (
        <MobileNavbar
          HamburgerIcon={HamburgerIcon}
          CloseIcon={CloseIcon}
          isFeaturesOpen={isFeaturesOpen}
          setIsFeaturesOpen={setIsFeaturesOpen}
          ArrowDownIcon={ArrowDownIcon}
          ArrowUpIcon={ArrowUpIcon}
          LinksCard={LinksCard}
          LinksData_1={LinksData_1}
          isCompanyOpen={isCompanyOpen}
          setIsCompanyOpen={setIsCompanyOpen}
          LinksData_2={LinksData_2}
          handleOpenFeatures={handleOpenFeatures}
          handleOpenCompany={handleOpenCompany}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />
      ) : (
        <DesktopNavbar
          handleOpenFeatures={handleOpenFeatures}
          isFeaturesOpen={isFeaturesOpen}
          setIsFeaturesOpen={setIsFeaturesOpen}
          ArrowDownIcon={ArrowDownIcon}
          ArrowUpIcon={ArrowUpIcon}
          LinksCard={LinksCard}
          LinksData_1={LinksData_1}
          handleOpenCompany={handleOpenCompany}
          isCompanyOpen={isCompanyOpen}
          setIsCompanyOpen={setIsCompanyOpen}
          LinksData_2={LinksData_2}
        />
      )}
    </nav>
  );
};

export default Navbar;
