import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../../assets/svg/linkedin_logo.svg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAcoountIcon from "@material-ui/icons/SupervisorAccount";
import BussinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import Image from "../../assets/images/self.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAcoountIcon} title="My Network" />
        <HeaderOption Icon={BussinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={Image} title="Me" />
      </div>
    </div>
  );
}

export default Header;
