import AppBuilder from "../components/dynamic/AppBuilder";

const About = () => {
  const CardStyle = {
    position: "relative",
    backgroundColor: "bg-transparent",
    color: "text-white",
    shadow: "shadow-none",
    width: "w-full",
    height: "h-full",
    margin: "mx-auto",
    padding: "p-0",
    center: "self-center justify-center",
  };
  const CardTopStyle = "p-0 h-1/2 w-full";
  const CardBottomStyle = {
    height: "h-24",
    width: "w-full",
    padding: "py-3 px-2",
    translate: "-translate-y-10",
    center: "self-center justify-center content-center",
    backgroundColor: "bg-white",
    borderRadius: "rounded-full",
  };

  const LauraCard = {
    type: "CardComponent",
    props: {
      topContainer: {
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "src/assets/images/Laura.jpg",
              alt: "Laura Badasyan",
              style: {
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
                rounded: "rounded-t-lg",
              },
            },
          },
        ],
        topContainerStyle: { CardTopStyle },
      },
      bottomContainer: {
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Laura Badasyan - My name is Laura Badasyan and having Armenian roots, I was born and raised in the Republic of Georgia...",
              style: {
                className: "text-sm text-wrap text-center",
              },
            },
          },
        ],
        style: CardBottomStyle,
      },
      style: CardStyle,
    },
  };

  const ArsenCard = {
    type: "CardComponent",
    props: {
      topContainer: {
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "src/assets/images/Arsen.jpg",
              alt: "Arsen Badasyan",
              style: {
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
                rounded: "rounded-t-lg",
              },
            },
          },
        ],
        style: { CardTopStyle },
      },
      bottomContainer: {
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Arsen Badasyan - My name is Arsen Badasyan and I was born and raised in the Republic of Georgia...",
              style: {
                className: "text-sm text-wrap text-center",
              },
            },
          },
        ],
        style: CardBottomStyle,
      },
      style: CardStyle,
    },
  };

  const TeaCard = {
    type: "CardComponent",
    props: {
      topContainer: {
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "src/assets/images/Tea.jpg",
              alt: "Tea Todua",
              style: {
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
                rounded: "rounded-t-lg",
              },
            },
          },
        ],
        style: { CardTopStyle },
      },
      bottomContainer: {
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Tea Todua - Tea Todua, originally from Zugdidi, Georgia, brings a strong medical background...",
              style: {
                className: "text-sm text-wrap text-center",
              },
            },
          },
        ],
        style: CardBottomStyle,
      },
      style: CardStyle,
    },
  };

  const VeronikaCard = {
    type: "CardComponent",
    props: {
      topContainer: {
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "src/assets/images/Veronika.jpg",
              alt: "Veronika",
              style: {
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
                rounded: "rounded-t-lg",
              },
            },
          },
        ],
        style: { CardTopStyle },
      },
      bottomContainer: {
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Veronika - Veronika, originally from Zugdidi, Georgia, brings a strong medical background...",
              style: {
                className: "text-sm text-wrap text-center",
              },
            },
          },
        ],
        style: CardBottomStyle,
      },
      style: CardStyle,
    },
  };

  const NarciaCard = {
    type: "CardComponent",
    props: {
      topContainer: {
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "src/assets/images/Narcia.jpg",
              alt: "Narcia",
              style: {
                width: "w-full",
                height: "h-full",
                objectFit: "object-cover",
                rounded: "rounded-t-lg",
              },
            },
          },
        ],
        style: { CardTopStyle },
      },
      bottomContainer: {
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Narcia - Narcia, originally from Zugdidi, Georgia, brings a strong medical background...",
              style: {
                className: "text-sm text-wrap text-center",
              },
            },
          },
        ],
        style: CardBottomStyle,
      },
      style: CardStyle,
    },
  };

  const boardMembers = [
    LauraCard,
    ArsenCard,
    TeaCard,
    VeronikaCard,
    NarciaCard,
  ];

  const boardMembersArrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent right-0 translate-x-9",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "src/assets/arrows/chevron-right.svg",
            style: {
              className:
                "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
            },
          },
        },
      ],
    },
  ];

  const mainCarouselChildContent = [
    {
      type: "TextComponent",
      props: {
        text: "Mission Statement",
        tag: "h1",
        style: {
          className: "text-5xl font-florisha font-bold text-black",
        },
      },
    },
    {
      type: "TextComponent",
      props: {
        text: "Our Approach",
        tag: "h1",
        style: {
          className: "text-5xl font-florisha font-bold text-black",
        },
      },
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
      type: "TextComponent",
      props: {
        text: "Why Georgia and Armenia?",
        tag: "h1",
        style: {
          className: "text-5xl font-florisha font-bold text-black",
        },
      },
    },
  ];

  const aboutPageConfig = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        display: "flex flex-row",
        height: "h-screen px-10 py-32",
        spacing: "justify-center items-center",
      },
    },
    children: [
      // background image
      {
        type: "ImageComponent",
        props: {
          src: "src/assets/images/background1.jpg",
          style: {
            className: "absolute w-full h-full object-cover object-center",
            opacity: "opacity-50",
            reverse: "-scale-x-100",
            zIndex: "-z-10",
          },
        },
      },
      // List of about page sections
      {
        type: "ElementComponent",
        props: {
          style: {
            translate: "-translate-y-1/4",
            padding: "pl-12 pr-6",
          },
        },
        children: [
          //list header
          {
            type: "TextComponent",
            props: {
              tag: "h1",
              text: "About Us",
              style: {
                font: "font-florisha font-bold",
                fontSize: "text-3xl",
                color: "text-black",
                padding: "pb-4",
              },
            },
          },
          //list items
          {
            type: "ListComponent",
            contextId: "aboutCarouselContext",
            props: {
              items: [
                { text: "Mission Statement" },
                { text: "Our Approach" },
                { text: "Board of Directors" },
                { text: "Why Georgia and Armenia?" },
              ],
              underlineActive: true,
              initialIndex: 2,
              style: { padding: "pl-4" },
              itemStyle: {
                className: "text-xl list-disc px-2",
              },
              activeStyle: {
                className: "text-xl list-disc p-0",
              },
            },
          },
        ],
      },
      // Line between the list and the carousel
      {
        type: "ElementComponent",
        props: {
          tag: "hr",
          style: {
            className: "border h-96 border-gray-500",
          },
        },
      },
      // About page Carousel component
      {
        type: "CarouselComponent",
        contextId: {
          childrenContextId: "aboutCarouselContext",
        },
        props: {
          carouselChildren: mainCarouselChildContent,
          childrenSettings: {
            displayChildren: true,
            autoAdvanceChildren: false,
            childrenTransition: "scroll",
            childrenScrollDirection: "up",
          },
          style: {
            className: "w-full h-full",
          },
        },
      },
    ],
  };

  return <AppBuilder config={aboutPageConfig} />;
};

export default About;
