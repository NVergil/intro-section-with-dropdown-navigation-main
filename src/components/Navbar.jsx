import { useState } from "react";
import LinksCard from "./LinksCard";
import {
  handleOpenFeatures,
  handleOpenCompany,
  ArrowUpIcon,
  ArrowDownIcon,
  Todo,
  Calendar,
  Reminders,
  Planning,
} from "../utils";

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

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
    </nav>
  );
};

export default Navbar;
