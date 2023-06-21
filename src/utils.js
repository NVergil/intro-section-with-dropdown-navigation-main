import { ReactComponent as ArrowUpIcon } from "../public/icon-arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "../public/icon-arrow-down.svg";
import { ReactComponent as Databiz } from "../public/client-databiz.svg";
import { ReactComponent as Audiophile } from "../public/client-audiophile.svg";
import { ReactComponent as Meet } from "../public/client-meet.svg";
import { ReactComponent as Maker } from "../public/client-maker.svg";
import { ReactComponent as Todo } from "../public/icon-todo.svg";
import { ReactComponent as Calendar } from "../public/icon-calendar.svg";
import { ReactComponent as Reminders } from "../public/icon-reminders.svg";
import { ReactComponent as Planning } from "../public/icon-planning.svg";
import { ReactComponent as HamburgerIcon } from "../public/icon-menu.svg";

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

export {
  handleOpenFeatures,
  handleOpenCompany,
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
};
