// import AppBuilder from "../components/dynamic/AppBuilder";
import { AppBuilder, listLineCarousel } from "@aleks-ey/dynamic-app-builder";
import { useEffect, useState } from "react";
import { fetchBoard } from "../fetchUtilities/fetchBoard";

const About = () => {
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    const getBoardMembers = async () => {
      const members = await fetchBoard();
      setBoardMembers(members);
    };

    getBoardMembers();
  }, []);

  const boardMembersArrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent top-1/2 right-2 translate-x-9",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-right.svg",
            style: {
              className:
                "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
            },
          },
        },
      ],
    },
  ];

  const boardMembersMobileArrows = [
    {
      type: "left",
      function: "prev",
      style: {
        className: "bg-transparent p-0 -left-3 top-9",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-left.svg",
            style: {
              className: "w-16 h-16",
            },
          },
        },
      ],
    },
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent p-0 -right-3 top-9",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-right.svg",
            style: {
              className: "w-16 h-16",
            },
          },
        },
      ],
    },
  ];

  const listItems = [
    { text: "Mission Statement" },
    { text: "Our Approach" },
    { text: "Board of Directors" },
    { text: "Why Georgia and Armenia?" },
  ];

  const carouselChildren = [
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative flex flex-col justify-center items-center bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "MISSION STATEMENT",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Heaven's Grace is a charitable organization focused on supporting children's health. Our mission is to provide access to essential medical care for children in countries where it is most needed, giving them a chance for a healthy and happy future. We belive that even small wings can perform great miracles, and our goal is to protect every child's life and surround them with care.",
            tag: "p",
            style: {
              className:
                "p-10 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
      ],
    },
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative flex flex-col justify-center items-left bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "OUR APPROACH",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Heaven's Grace offers the following assistance plan:",
            tag: "p",
            style: {
              className:
                "px-10 py-4 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
        {
          type: "ListComponent",
          props: {
            underlineActive: false,
            items: [
              {
                text: "The first 25% of the treatement cost is covered by our organization.",
              },
              { text: "The next 25-50% is funded by sponsors." },
              {
                text: "The remaining funds are raised through crowdfunding and promoted on social media.",
              },
            ],
            style: {
              className:
                "pl-16 pr-10 list-disc text-2xl text-left font-montserrat font-bold text-black",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "This approach ensures a transparent and efficient fundraising and support process. All photo and video reports, along with receipts, will be carefully monitored and published both on social media and during monthly conferences for progress reviews.",
            tag: "p",
            style: {
              className:
                "px-10 py-4 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
      ],
    },
    {
      type: "CarouselMultiItemsComponent",
      props: {
        carouselChildren: boardMembers,
        displayCount: 3,
        arrows: boardMembersArrows,
        style: {
          className: "w-full h-full space-x-10 pl-4 pr-9",
        },
      },
    },
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative flex flex-col justify-center items-center bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "ImageComponent",
          props: {
            bucketId: "backgrounds",
            supabaseId: "GeorgiaArmeniaMap.png",
            style: {
              className: "absolute w-full h-full object-cover object-center",
              opacity: "opacity-30",
              zIndex: "z-0",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "WHY GEORGIA AND ARMENIA?",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "We are starting our activities in Georgia and Armenia, countries where the average salary is significantly lower than in most other regions, yet the cost of medical services remains high. In these countries, access to health insurance is limited, and even when private insurance is available, it does not cover all essential expenses.",
            tag: "p",
            style: {
              className:
                "px-10 py-4 z-10 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "The average monthly salary in Georgia is around 400 USD, while in Armenia it is around 350 USD, making access to medical care a significant financial challenge for most families. We aim to change this by providing suppot to those who need it the most.",
            tag: "p",
            style: {
              className:
                "px-10 py-4 z-10 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
      ],
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
    listTitle: "About Us",
    listIndex: 2,
    carouselChildren,
    style: overideStyles,
  });

  const aboutPageMobileConfig = [
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "flex flex-col px-3 pt-32 pb-12 items-center h-screen z-10",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Our Mission",
            style: {
              className:
                "pt-10 text-4xl sm:text-5xl font-florisha font-bold text-main",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Heaven's Grace is a charitable organization focused on supporting children's health. Our mission is to provide access to essential medical care for children in countries where it is most needed, giving them a chance for a healthy and happy future. We belive that even small wings can perform great miracles, and our goal is to protect every child's life and surround them with care.",
            tag: "p",
            style: {
              className:
                "py-10 sm:px-20 text-center text-2xl sm:text-3xl font-montserrat font-bold text-black",
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
          className:
            "flex flex-col px-3 pt-12 justify-center items-center h-screen",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Meet the Board",
            style: {
              className: "text-4xl font-florisha font-bold text-gray-900",
            },
          },
        },
        {
          type: "CarouselMultiItemsComponent",
          props: {
            carouselChildren: boardMembers,
            displayCount: 1,
            arrows: boardMembersMobileArrows,
            style: {
              className: "w-full h-full",
            },
          },
        },
      ],
    },
    // our approach
    {
      type: "ElementComponent",
      props: {
        style: {
          className: "px-4 py-12",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "OUR APPROACH",
            style: {
              className:
                "text-4xl font-florisha font-bold text-main text-left my-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "relative flex flex-col justify-center items-left",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "Heaven's Grace offers the following assistance plan:",
                tag: "p",
                style: {
                  className:
                    "py-4 text-left text-2xl font-montserrat text-accent",
                },
              },
            },
            {
              type: "ListComponent",
              props: {
                underlineActive: false,
                items: [
                  {
                    text: "The first 25% of the treatement cost is covered by our organization.",
                  },
                  { text: "The next 25-50% is funded by sponsors." },
                  {
                    text: "The remaining funds are raised through crowdfunding and promoted on social media.",
                  },
                ],
                style: {
                  className:
                    "pl-6 list-disc text-2xl text-left font-montserrat text-accent",
                },
                itemStyle: {
                  className: "text-accent",
                },
              },
            },
            {
              type: "TextComponent",
              props: {
                text: "This approach ensures a transparent and efficient fundraising and support process. All photo and video reports, along with receipts, will be carefully monitored and published both on social media and during monthly conferences for progress reviews.",
                tag: "p",
                style: {
                  className:
                    "py-4 text-left text-2xl font-montserrat text-accent",
                },
              },
            },
          ],
        },
      ],
    },
    {
      type: "ElementComponent",
      props: {
        style: {
          className: "relative px-4 py-12",
        },
      },
      children: [
        // {
        //   type: "ImageComponent",
        //   props: {
        //     bucketId: "backgrounds",
        //     supabaseId: "GeorgiaArmeniaMap.png",
        //     style: {
        //       className: "absolute w-full h-full object-fit object-center",
        //       opacity: "opacity-30",
        //       zIndex: "z-0",
        //     },
        //   },
        // },
        {
          type: "TextComponent",
          props: {
            text: "WHY GEORGIA AND ARMENIA?",
            style: {
              className:
                "text-4xl font-florisha font-bold text-main text-right my-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "relative flex flex-col justify-center items-left",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "We are starting our activities in Georgia and Armenia, countries where the average salary is significantly lower than in most other regions, yet the cost of medical services remains high. In these countries, access to health insurance is limited, and even when private insurance is available, it does not cover all essential expenses.",
                tag: "p",
                style: {
                  className:
                    "py-4 text-right text-2xl font-montserrat text-accent",
                },
              },
            },
            {
              type: "TextComponent",
              props: {
                text: "The average monthly salary in Georgia is around 400 USD, while in Armenia it is around 350 USD, making access to medical care a significant financial challenge for most families. We aim to change this by providing suppot to those who need it the most.",
                tag: "p",
                style: {
                  className:
                    "py-4 text-right text-2xl font-montserrat text-accent",
                },
              },
            },
          ],
        },
      ],
    },
  ];

  const aboutPageConfig = {
    type: "ElementComponent",
    props: {
      tag: "div",
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
      // About page for desktop
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
      // About page for mobile
      {
        type: "ElementComponent",
        props: {
          tag: "div",
          style: {
            display: "flex flex-col md:hidden",
            height: "min-h-screen bg-base-light",
            spacing: "justify-center items-center",
          },
        },
        children: aboutPageMobileConfig,
      },
    ],
  };

  return <AppBuilder config={aboutPageConfig} />;
};

export default About;
