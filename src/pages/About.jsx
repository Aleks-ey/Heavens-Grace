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
  const CardTopStyle = "p-0 h-2/3 md:h-1/2 w-full";
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
              bucketId: "board",
              supabaseId: "Laura.jpg",
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
              bucketId: "board",
              supabaseId: "Arsen.jpg",
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
              bucketId: "board",
              supabaseId: "Tea.jpg",
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
    type: "DialogComponent",
    props: {
      wrapperStyle: CardStyle, // Optional style for the wrapper
      dialogChildren: [
        {
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
                    text: "Veronika - Veronika, originally from Zugdidi, Georgia...",
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
        },
      ],
    },
    children: [
      {
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
                  text: "Veronika - Veronika, originally from Zugdidi, Georgia...",
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
      },
    ],
  };

  const NarciaCard = {
    type: "CardComponent",
    props: {
      topContainer: {
        children: [
          {
            type: "ImageComponent",
            props: {
              bucketId: "board",
              supabaseId: "Narcia.jpg",
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
    NarciaCard,
    TeaCard,
    ArsenCard,
    LauraCard,
    VeronikaCard,
  ];

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

  const mainCarouselChildContent = [
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

  const aboutPageDesktopConfig = [
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
  ];

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
              className: "pt-10 text-4xl font-florisha font-bold text-main",
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
                "py-10 text-center text-2xl font-montserrat font-bold text-black",
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
    {
      type: "ElementComponent",
      props: {
        style: {
          className: "px-3 pb-12",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "OUR APPROACH",
            style: {
              className:
                "text-4xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className:
                "relative flex flex-col justify-center items-left bg-accent rounded-lg shadow-lg",
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
                    "px-3 py-4 text-left text-2xl font-montserrat font-bold text-white",
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
                    "pl-16 pr-10 list-disc text-2xl text-left font-montserrat font-bold text-white",
                },
                itemStyle: {
                  className: "text-white",
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
                    "px-3 py-4 text-left text-2xl font-montserrat font-bold text-white",
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
          className: "relative px-3 py-12",
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
                "text-4xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className:
                "relative flex flex-col justify-center items-left bg-accent rounded-lg shadow-lg",
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
                    "px-2 py-4 z-10 text-center text-2xl font-montserrat font-bold text-white",
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
                    "px-2 py-4 z-10 text-center text-2xl font-montserrat font-bold text-white",
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
          // src: "src/assets/images/background1.jpg",
          bucketId: "backgrounds",
          supabaseId: "background1.jpg",
          style: {
            className: "absolute w-full h-full object-cover object-center",
            opacity: "opacity-50",
            reverse: "-scale-x-100",
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
        children: aboutPageDesktopConfig,
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
