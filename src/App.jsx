import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./scrollToTop";
import MusicPlayer from "./components/MusicPlayer";
import { MusicPlayerProvider } from "./components/dynamic/helpers/MusicPlayerContext";
import ProtectedRoute from "./components/dynamic/helpers/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Children from "./pages/Children";
import Donate from "./pages/Donate";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./components/dynamic/authComponents/login/Login";

import AppBuilder from "./components/dynamic/AppBuilder";

function App() {
  const logo = {
    src: "/logos/logo-white.png",
    alt: "Heaven's Grace Logo",
    logoStyle: {
      height: "h-20 lg:h-24 w-auto",
      objectFit: "object-cover",
    },
  };

  const identity = {
    name: "Heaven's Grace",
    nameStyle: {
      font: "font-florisha",
      fontSize: "text-lg lg:text-2xl",
    },
    slogan: "Little Wings, Big Miracles",
    sloganStyle: {
      font: "font-montserrat",
      fontSize: "text-sm lg:text-xl",
    },
  };

  const navLinks = [
    { text: "About Us", link: "/about" },
    { text: "Children", link: "/children" },
    { text: "Sponsor Info", link: "/donate" },
    // { text: "News & Media", link: "/news" },
    { text: "Contact", link: "/contact" },
    {
      text: "Donate Now",
      link: "https://www.paypal.com/donate/?hosted_button_id=WESFEVUAYS63Y",
      style: {
        font: "font-montserrat",
        fontSize: "text-lg",
        backgroundColor: "bg-main",
        color: "text-white",
        padding: "px-4 py-2",
        border: "rounded-full",
        hoverColors: "bg-main hover:bg-white hover:text-main hover:border-main",
      },
      isExternal: true,
    },
  ];

  const linkStyle = {
    font: "font-montserrat",
    fontSize: "text-lg",
    backgroundColor: "bg-transparent",
    color: "text-white",
    padding: "px-2 lg:px-5 py-2",
    border: "border-transparent",
    hoverColors: "hover:text-main hover:border-b hover:border-b-main",
    activeColors: "active:text-main active:border-main",
    focusStyle: "focus:outline-none",
  };

  const navLinksStyle = {
    display: "flex",
    direction: "flex-row",
    spacing: "space-y-4 md:space-y-0 md:space-x-0 lg:space-x-6",
  };

  const drawerLogo = {
    src: "/logos/full-logo-dark.png",
    alt: "Heaven's Grace Logo",
    logoStyle: {
      height: "h-24 w-auto",
      objectFit: "object-cover",
    },
  };

  const drawerLinksStyle = {
    font: "font-montserrat",
    fontSize: "text-lg",
    textAlign: "text-left",
    backgroundColor: "bg-transparent",
    color: "text-accent",
    padding: "px-5 py-2",
    border: "border-transparent",
    hoverColors: "hover:text-main hover:border-b hover:border-b-main",
    activeColors: "active:text-main active:border-main",
    focusStyle: "focus:outline-none",
  };

  const headerLinks = {
    links: navLinks,
    linkStyle: linkStyle,
    style: navLinksStyle,
  };

  const drawerLinks = {
    style: {
      display: "flex",
      direction: "flex-col",
      spacing: "space-y-4",
      padding: "px-4",
    },
    links: navLinks,
    linkStyle: drawerLinksStyle,
  };

  const header = {
    type: "HeaderComponent",
    props: {
      style: {
        backgroundColor: "bg-transparent",
        textColor: "text-white",
      },
      slogoProps: {
        logo: logo,
        identity: identity,
      },
      navLinks: {
        type: "NavLinksComponent",
        props: headerLinks,
      },
      drawerStyle: {
        hidden: "md:hidden",
      },
      drawerContent: [
        {
          type: "SlogoComponent",
          props: {
            logo: drawerLogo,
            identity: identity,
            style: {
              flexDirection: "flex-col",
            },
          },
        },
        {
          type: "NavLinksComponent",
          props: drawerLinks,
        },
      ],
    },
  };

  const footer = {
    type: "FooterComponent",
    props: {
      footer: {
        style: {
          backgroundColor: "bg-accent",
          padding: "py-10 px-10",
        },
      },
      slogo: {
        logo: {
          src: "/logos/full-logo-white.png",
          alt: "Heaven's Grace Logo",
          logoStyle: {
            className: "h-24 md:h-32 w-auto",
          },
        },
      },
      navLinks: {
        links: [
          { text: "About Us", link: "/about" },
          { text: "Children", link: "/children" },
          { text: "Sponsor Info", link: "/donate" },
          // { text: "News & Media", link: "/news" },
          { text: "Contact", link: "/contact" },
          {
            text: "Donate Now",
            link: "https://www.paypal.com/donate/?hosted_button_id=WESFEVUAYS63Y",
            isExternal: true,
          },
        ],
        linkStyle: {
          font: "font-montserrat",
          fontSize: "text-sm",
          backgroundColor: "bg-transparent",
          color: "text-white",
          padding: "px-2 py-2",
          border: "border-transparent",
          hoverColors: "hover:text-main hover:border-b hover:border-b-main",
          activeColors: "active:text-main active:border-main",
          focusStyle: "focus:outline-none",
        },
        style: {
          display:
            "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2",
        },
      },
      contactInfo: {
        items: [
          { text: "info@heavens-grace.org" },
          // facebook
          {
            isLink: true,
            link: "https://facebook.com/heavensgrace",
            text: "Facebook",
            icon: {
              iconUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
              className: "w-4 h-4 mr-2",
            },
            customStyle: {
              display: "flex",
              direction: "flex-row",
            },
          },
          // instagram
          {
            isLink: true,
            link: "https://instagram.com/heavensgrace.grp",
            text: "Instagram",
            icon: {
              iconUrl:
                "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
              className: "w-4 h-4 mr-2",
            },
            customStyle: {
              display: "flex",
              direction: "flex-row",
            },
          },
          // linkedin
          {
            isLink: true,
            link: "https://www.linkedin.com/company/heavens-grace/",
            text: "LinkedIn",
            icon: {
              iconUrl:
                "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
              className: "w-4 h-4 mr-2",
            },
            customStyle: {
              display: "flex",
              direction: "flex-row",
            },
          },
        ],
        style: {
          font: "font-montserrat text-sm",
          display: "flex flex-col items-center space-y-2 text-white",
        },
      },
    },
  };

  return (
    <MusicPlayerProvider>
      <Router>
        <ScrollToTop />
        <AppBuilder config={header} />
        {/* <div className="min-h-screen"> */}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/children" element={<Children />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* </div> */}
        <AppBuilder config={footer} />
        <MusicPlayer />
      </Router>
    </MusicPlayerProvider>
  );
}

export default App;
