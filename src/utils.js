import { ReactComponent as ArrowUpIcon } from "./assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "./assets/icon-arrow-down.svg";
import { ReactComponent as Databiz } from "./assets/client-databiz.svg";
import { ReactComponent as Audiophile } from "./assets/client-audiophile.svg";
import { ReactComponent as Meet } from "./assets/client-meet.svg";
import { ReactComponent as Maker } from "./assets/client-maker.svg";
import { ReactComponent as Todo } from "./assets/icon-todo.svg";
import { ReactComponent as Calendar } from "./assets/icon-calendar.svg";
import { ReactComponent as Reminders } from "./assets/icon-reminders.svg";
import { ReactComponent as Planning } from "./assets/icon-planning.svg";
import { ReactComponent as HamburgerIcon } from "./assets/icon-menu.svg";
import { ReactComponent as CloseIcon } from "./assets/icon-close-menu.svg";

const handleOpenFeatures = (e, isFeaturesOpen, setIsFeaturesOpen) => {
  const linksCardClosing = document.querySelector(".links-card-container._1");
  if (isFeaturesOpen && linksCardClosing) {
    linksCardClosing.classList.add("links-card-closing");
    setTimeout(() => {
      setIsFeaturesOpen(false);
      linksCardClosing.classList.remove("links-card-closing");
    }, 150);
  } else {
    setIsFeaturesOpen(!isFeaturesOpen);
  }
};

const handleOpenCompany = (e, isCompanyOpen, setIsCompanyOpen) => {
  const linksCardClosing = document.querySelector(".links-card-container._2");
  if (isCompanyOpen && linksCardClosing) {
    linksCardClosing.classList.add("links-card-closing");
    setTimeout(() => {
      setIsCompanyOpen(false);
      linksCardClosing.classList.remove("links-card-closing");
    }, 150);
  } else {
    setIsCompanyOpen(!isCompanyOpen);
  }
};

const handleCloseMenu = (setIsOpen, main) => {
  const navbar = document.querySelector(".navbar-mobile-container");
  navbar.classList.remove("mobile-menu-active");
  setTimeout(() => {
    setIsOpen(false);
    main.style.overflow = "auto";
  }, 100);
};
const handleOpenMenu = (setIsOpen, main) => {
  main.style.overflow = "hidden";
  setIsOpen(true);
};

export {
  handleOpenFeatures,
  handleOpenCompany,
  handleCloseMenu,
  handleOpenMenu,
  ArrowUpIcon,
  ArrowDownIcon,
  Databiz,
  Audiophile,
  Meet,
  Maker,
  Todo,
  Calendar,
  Reminders,
  Planning,
  HamburgerIcon,
  CloseIcon,
};
