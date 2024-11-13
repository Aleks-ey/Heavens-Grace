import AppBuilder from "../components/dynamic/AppBuilder";

const Children = () => {
  const CardStyle = {
    position: "relative",
    backgroundColor: "bg-transparent",
    color: "text-white",
    shadow: "shadow-none",
    width: "w-2/5",
    height: "h-full",
    margin: "mx-auto",
    padding: "p-0",
    center: "self-center justify-center",
  };
  const CardTopStyle = {
    height: "h-full",
    width: "w-full",
    padding: "p-0",
    center: "self-center justify-center content-center",
    backgroundColor: "bg-white",
    borderRadius: "rounded-t-lg",
  };
  const CardBottomStyle = {
    height: "h-auto",
    width: "w-full",
    padding: "py-3 px-2",
    translate: "-translate-y-10",
    center: "self-center justify-center content-center",
    backgroundColor: "bg-white",
    borderRadius: "rounded-full",
  };

  const HelpedItem1 = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col md:flex-row justify-center items-center h-full w-full",
      },
    },
    children: [
      {
        type: "ElementComponent",
        props: {
          style: {
            display: "flex flex-col",
            center: "",
            height: "h-full",
            width: "w-3/4",
            padding: "pr-20",
            spacing: "space-y-8",
            text: "text-left",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              tag: "h2",
              text: "Children We've Helped",
              style: {
                className: "text-2xl font-bold",
              },
            },
          },
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "flex flex-col text-left justify-center",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  tag: "h3",
                  text: "Arthur Bagdasaryan",
                  style: {
                    className: "text-xl font-bold",
                  },
                },
              },
              {
                type: "TextComponent",
                props: {
                  tag: "p",
                  text: "Six-year-old Arthur from a small town in Georgia was paralaized from the waist down after a car accident two years ago. Once an active, joyful child, Arthur's life changed drastically as he faced daily challenges in mobility and independence. His patents, unable to afford the costly medical treatments and rehabilitation, were left feelings hopeless.",
                  style: {
                    className: "text-lg text-gray-500",
                  },
                },
              },
            ],
          },
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "flex flex-col text-left justify-center",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  tag: "h3",
                  text: "After Recieving Help:",
                  style: {
                    className: "text-xl font-bold",
                  },
                },
              },
              {
                type: "TextComponent",
                props: {
                  tag: "p",
                  text: "Thanks to Heaven's Grace, Arthur has begun a specialized rehabilitation program. While his journey to recovery is still ongoing, the first signs of progress have already brought hope back to hise family. Arthur's bright smile is returning as he regains strength and dreams of one day walking again.",
                  style: {
                    className: "text-lg text-gray-500",
                  },
                },
              },
            ],
          },
          {
            type: "ButtonComponent",
            props: {
              text: "Read More / Gallery",
              style: {
                className:
                  "w-fit p-0 bg-transparent hover:bg-transparent border-none text-base-dark font-bold",
              },
            },
          },
        ],
      },
      {
        type: "CardComponent",
        props: {
          topContainer: {
            children: [
              {
                type: "ImageComponent",
                props: {
                  // src: "src/assets/images/Arsen.jpg",
                  bucketId: "board",
                  supabaseId: "Arsen.jpg",
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
            style: CardTopStyle,
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
      },
    ],
  };

  const NeedHelpItem1 = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col md:flex-row justify-center items-center h-full w-full",
      },
    },
    children: [
      {
        type: "ElementComponent",
        props: {
          style: {
            display: "flex flex-col",
            center: "",
            height: "h-full",
            width: "w-3/4",
            padding: "pr-20",
            spacing: "space-y-8",
            text: "text-left",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              tag: "h2",
              text: "Children Needing Help",
              style: {
                className: "text-2xl font-bold",
              },
            },
          },
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "flex flex-col text-left justify-center",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  tag: "h3",
                  text: "Anna Mazmanyan",
                  style: {
                    className: "text-xl font-bold",
                  },
                },
              },
              {
                type: "TextComponent",
                props: {
                  tag: "p",
                  text: "At 8 years old, Anna's world was turned upside down when she was diagnosed with bone cancer. Once a talented dancerwith dreams of performing on stage, Anna had to put her passion on hold to begin grueling chemotherapy treatments. Living in Armenia, her family quickly found themselves overwhelmed by the mountain of medical bills, as treatment costs far exceeded their rescources.",
                  style: {
                    className: "text-lg text-gray-500",
                  },
                },
              },
            ],
          },
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "flex flex-col text-left justify-center",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  tag: "h3",
                  text: "Why Help is Needed:",
                  style: {
                    className: "text-xl font-bold",
                  },
                },
              },
              {
                type: "TextComponent",
                props: {
                  tag: "p",
                  text: "Anna's condition is treatable, but without immediate access to the life-saving care and advanced therapies, her chances of survival are diminishing. Her family is doing everything they can, but they urgentely need support to cover the costs of her ongoing treatments.",
                  style: {
                    className: "text-lg text-gray-500",
                  },
                },
              },
            ],
          },
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "flex flex-col",
              },
            },
            children: [
              {
                type: "ButtonComponent",
                props: {
                  text: "Read More / Gallery",
                  href: "/news",
                  style: {
                    className:
                      "w-fit p-0 bg-transparent hover:bg-transparent border-none text-base-dark font-bold",
                  },
                },
              },
              {
                type: "ButtonComponent",
                props: {
                  text: "DONATE NOW! TAP ON LADYBUG ->",
                  //arrow right
                  style: {
                    className:
                      "w-fit p-0 bg-transparent hover:bg-transparent border-none text-main font-bold",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        type: "CardComponent",
        props: {
          topContainer: {
            children: [
              {
                type: "ImageComponent",
                props: {
                  // src: "src/assets/images/Laura.jpg",
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
            style: CardTopStyle,
          },
          bottomContainer: {
            children: [
              {
                type: "ElementComponent",
                props: {
                  style: {
                    className: "flex flex-col text-left justify-center",
                  },
                },
                children: [
                  {
                    type: "ElementComponent",
                    props: {
                      style: {
                        className: "w-3/4 px-6 text-base",
                      },
                    },
                    children: [
                      {
                        type: "TextComponent",
                        props: {
                          text: "Treatment Cost: $50,000",
                          style: {
                            color: "text-accent font-semibold",
                          },
                        },
                      },
                      {
                        type: "TextComponent",
                        props: {
                          text: "Raised: $30,000",
                          style: {
                            color: "text-base-dark",
                          },
                        },
                      },
                      {
                        type: "TextComponent",
                        props: {
                          text: "Amount: $20,000",
                          style: {
                            color: "text-main font-bold",
                          },
                        },
                      },
                    ],
                  },
                  {
                    type: "ButtonComponent",
                    props: {
                      href: "/donate",
                      style: {
                        className:
                          "absolute right-0 bg-white hover:bg-white border-none shadow-lg text-white p-0 rounded-full",
                      },
                    },
                    children: [
                      {
                        type: "ImageComponent",
                        props: {
                          src: "/logos/logo-color.png",
                          alt: "Heaven's Grace Red Ladybug",
                          style: {
                            width: "w-28",
                            height: "h-28",
                            objectFit: "object-fill",
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            style: CardBottomStyle,
          },
          style: CardStyle,
        },
      },
    ],
  };

  const helped = [HelpedItem1];

  const needHelp = [NeedHelpItem1];

  const arrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent top-1/2 right-6 translate-x-9",
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

  const mainCarouselContent = [
    {
      type: "CarouselMultiItemsComponent",
      props: {
        carouselChildren: helped,
        displayCount: 1,
        arrows: arrows,
        style: {
          className: "w-full h-full space-x-10 pl-4 pr-20",
        },
      },
      style: {
        className: "",
      },
    },
    {
      type: "CarouselMultiItemsComponent",
      props: {
        carouselChildren: needHelp,
        displayCount: 1,
        arrows: arrows,
        style: {
          className: "w-full h-full space-x-10 pl-4 pr-20",
        },
      },
    },
  ];

  const childrenPageConfig = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        display: "flex",
        height: "min-h-screen",
      },
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
            zIndex: "-z-10",
          },
        },
      },
      {
        type: "ElementComponent",
        props: {
          style: {
            display: "flex md:flex-row",
            height: "h-screen",
            width: "w-screen",
            padding: "pt-40 pb-10",
            center: "justify-center",
          },
        },
        children: [
          // List of children page sections
          {
            type: "ElementComponent",
            props: {
              style: {
                width: "w-1/5",
                translate: "",
                padding: "pl-12 pr-6 py-2",
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
                  items: [{ text: "We've Helped" }, { text: "Need Help" }],
                  underlineActive: true,
                  initialIndex: 0,
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
                className: "border h-[90%] border-gray-500",
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
              carouselChildren: mainCarouselContent,
              childrenSettings: {
                displayChildren: true,
                autoAdvanceChildren: false,
                childrenTransition: "scroll",
                childrenScrollDirection: "up",
              },
              style: {
                className: "w-full",
              },
            },
          },
        ],
      },
    ],
  };

  return <AppBuilder config={childrenPageConfig} />;
};

export default Children;
