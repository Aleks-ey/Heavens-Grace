// src/components/Header.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoDark from "../assets/logos/logo-dark.png";
import logoWhite from "../assets/logos/logo-white.png";

import AHSlogo from "./Slogo";
import AHButton from "./Button";
import AHNavLinks from "./NavLinks";

const Header = ({ header }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const logo = {
    src: logoWhite,
    alt: "Heaven's Grace Logo",
    logoStyle: {
      height: "h-20 md:h-24",
      objectFit: "object-cover",
    },
  };

  const identity = {
    name: "Heaven's Grace",
    nameStyle: {
      font: "font-florisha",
      fontSize: "text-xl md:text-2xl",
    },
    slogan: "Little Wings, Big Miracles",
    sloganStyle: {
      font: "font-montserrat",
      fontSize: "text-base md:text-xl",
    },
  };

  const navLinks = [
    { text: "About Us", link: "/about" },
    { text: "Children", link: "/support" },
    { text: "How Donate", link: "/" },
    { text: "News & Media", link: "/board" },
    { text: "Contact", link: "/" },
  ];

  const linksStyle = {
    font: "font-montserrat",
    fontSize: "text-lg",
    backgroundColor: "bg-transparent",
    color: "text-white",
    padding: "px-5 py-2",
    border: "border-transparent",
    hoverColors: "hover:text-main hover:border-b hover:border-b-main",
    activeColors: "active:text-main active:border-main",
    focusStyle: "focus:outline-none",
  };

  const navLinksStyle = {
    display: "flex",
    direction: "flex-row",
    spacing: "space-y-4 md:space-y-0 md:space-x-6",
  };

  const drawerLogo = {
    src: logoDark,
    alt: "Heaven's Grace Logo",
    logoStyle: {
      height: "h-24",
      objectFit: "object-cover",
    },
  };

  const drawerLinksStyle = {
    font: "font-montserrat",
    fontSize: "text-lg",
    backgroundColor: "bg-transparent",
    color: "text-accent",
    padding: "px-5 py-2",
    border: "border-transparent",
    hoverColors: "hover:text-main hover:border-b hover:border-b-main",
    activeColors: "active:text-main active:border-main",
    focusStyle: "focus:outline-none",
  };

  const AHButtonProps = {
    text: "Donate Now",
    link: "/donate",
    style: {
      className:
        "bg-main hover:bg-main-dark text-white font-montserrat px-6 py-2 rounded-full transform transition-all focus:outline-none focus:ring-2 focus:ring-main cursor-pointer",
    },
  };

  return (
    <AppBar
      position={`${header.position}`}
      className={`${header.backgroundColor}`}
    >
      <Toolbar className={Object.values(header.style)?.join(" ")}>
        {/* Logo Section */}
        <AHSlogo
          logo={logo}
          identity={identity}
          showLogo={true}
          showIdentity={true}
        />
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          {/* NavLinks */}
          <AHNavLinks
            links={navLinks}
            linkStyle={linksStyle}
            style={navLinksStyle}
          />
        </div>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        {/* Side Drawer for Mobile Navigation */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          className="md:hidden"
        >
          <div
            className="w-auto h-full flex flex-col justify-between p-6"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {/* Logo & Text */}
            <AHSlogo
              logo={drawerLogo}
              identity={identity}
              style={{ display: "flex", direction: "flex-col" }}
            />
            {/* NavLinks */}
            <AHNavLinks links={navLinks} linkStyle={drawerLinksStyle} />
            {/* Donate Button */}
            <AHButton buttonProps={AHButtonProps} />
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  header: PropTypes.shape({
    position: PropTypes.string,
    backgroundColor: PropTypes.string,
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

export default Header;
