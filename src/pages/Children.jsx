import { useEffect, useState } from "react";
// import AppBuilder from "../components/dynamic/AppBuilder";
import { AppBuilder, listLineCarousel } from "@aleks-ey/dynamic-app-builder";
import { fetchChildren } from "../utilities/fetchChildren";

const Children = () => {
  const [helpedChildren, setHelpedChildren] = useState([]);
  const [needHelpChildren, setNeedHelpChildren] = useState([]);

  useEffect(() => {
    // Fetch helped children data
    fetchChildren("helped").then(setHelpedChildren);

    // Fetch need help children data
    fetchChildren("help").then(setNeedHelpChildren);
  }, []);

  const arrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent top-6 md:top-1/2 right-2 translate-x-9",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-right.svg",
            style: {
              className: "w-16 h-16 p-1 children-arrows-color",
            },
          },
        },
      ],
    },
  ];

  const listItems = [{ text: "We've Helped" }, { text: "We Can Help" }];

  const carouselChildren = [
    {
      type: "CarouselMultiItemsComponent",
      props: {
        carouselChildren: helpedChildren,
        displayCount: 1,
        arrows: arrows,
        style: {
          className: "w-full h-full space-x-10 pl-4 md:pr-8",
        },
      },
      style: {
        className: "",
      },
    },
    {
      type: "CarouselMultiItemsComponent",
      props: {
        carouselChildren: needHelpChildren,
        displayCount: 1,
        arrows: arrows,
        style: {
          className: "w-full h-full space-x-10 pl-4 md:pr-8",
        },
      },
    },
  ];

  const overideStyles = {
    container: "items-center",
    listContainer: "w-1/5",
    listHeader: "font-florisha font-bold text-3xl text-black",
    carousel: "w-4/5",
    line: "border h-3/4 border-gray-500",
  };

  const listLineCarouselConfig = listLineCarousel({
    listItems,
    listTitle: "Donate",
    carouselChildren,
    style: overideStyles,
  });

  // -------------------- MOBILE PAGE CONFIG --------------------
  const childrenPageMobileConfig = [
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className: "flex flex-col justify-center items-center h-screen z-10",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Explore Their Stories",
            style: {
              className: "pt-32 text-5xl text-center font-florisha text-main",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Dive into the stories of children we've helped and those who still need help. Every child you see here deserves a chance to follow their passions, realize their dreams, and live their greatest lives. Your donation can make a difference.",
            style: {
              className:
                "pt-10 text-2xl text-center font-montserrat text-main-dark",
            },
          },
        },
      ],
    },
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className: "flex flex-col items-center py-12 px-10",
        },
      },
      children: [
        {
          type: "CarouselMultiItemsComponent",
          props: {
            carouselChildren: helpedChildren,
            displayCount: 1,
            arrows: arrows,
            style: {
              className: "w-full h-full space-x-10",
            },
          },
          style: {
            className: "",
          },
        },
      ],
    },
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className: "flex flex-col justify-center items-center py-12 px-10",
        },
      },
      children: [
        {
          type: "CarouselMultiItemsComponent",
          props: {
            carouselChildren: needHelpChildren,
            displayCount: 1,
            arrows: arrows,
            style: {
              className: "w-full h-full space-x-10",
            },
          },
        },
      ],
    },
  ];
  // -------------------- PAGE CONFIG --------------------
  const childrenPageConfig = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        height: "min-h-screen",
      },
    },
    children: [
      // background image
      {
        type: "ImageComponent",
        props: {
          src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background1.jpg?t=2024-12-03T01%3A01%3A04.025Z",
          style: {
            className: "absolute w-full h-full object-cover object-center",
            opacity: "opacity-50",
            reverse: "-scale-x-100",
            zIndex: "md:-z-10",
          },
        },
      },
      // Children page for desktop
      {
        type: "ElementComponent",
        props: {
          tag: "div",
          style: {
            display: "hidden md:flex flex-row",
            height: "h-screen px-10 py-32",
            spacing: "justify-center items-center",
          },
        },
        children: [listLineCarouselConfig],
      },
      // Children page for mobile
      {
        type: "ElementComponent",
        props: {
          tag: "div",
          style: {
            display: "flex md:hidden flex-col",
            height: "minh-screen px-4 bg-base-light",
            spacing: "justify-center items-center",
          },
        },
        children: childrenPageMobileConfig,
      },
    ],
  };

  return <AppBuilder config={childrenPageConfig} />;
};

export default Children;
