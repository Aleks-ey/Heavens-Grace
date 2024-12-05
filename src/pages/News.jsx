import AppBuilder from "../components/dynamic/AppBuilder";

const News = () => {
  const galleryImages = [
    {
      src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background1.jpg?t=2024-12-03T01%3A01%3A04.025Z",
      style: {
        className: "",
      },
      containerStyle: {
        className: "w-fit h-fit",
      },
    },
    {
      src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background2.jpg?t=2024-12-03T01%3A01%3A33.821Z",
      style: {
        className: "",
      },
      containerStyle: {
        className: "w-fit h-fit",
      },
    },
    {
      src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background1.jpg?t=2024-12-03T01%3A01%3A04.025Z",
      style: {
        className: "",
      },
      containerStyle: {
        className: "w-fit h-fit",
      },
    },
    {
      src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background2.jpg?t=2024-12-03T01%3A01%3A33.821Z",
      style: {
        className: "",
      },
      containerStyle: {
        className: "w-fit h-fit",
      },
    },
  ];

  const mainCarouselChildContent = [
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative w-3/4 flex flex-col justify-center items-left bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "NEWS",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "No News Yet!",
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
      // Gallery component
      type: "GalleryComponent",
      props: {
        style: {
          className: "w-full pl-10 overflow-hidden ",
        },
        columns: 4,
        gap: 2,
        images: galleryImages,
      },
    },
  ];

  const newsPageDesktopConfig = [
    // List of about page sections
    {
      type: "ElementComponent",
      props: {
        style: {
          translate: "-translate-y-1/4",
          padding: "pl-12 pr-6",
          width: "w-1/4",
        },
      },
      children: [
        //list header
        {
          type: "TextComponent",
          props: {
            tag: "h1",
            text: "News & Media",
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
          contextId: "newsCarouselContext",
          props: {
            items: [{ text: "News" }, { text: "Gallery" }],
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
          className: "border h-96 border-gray-500",
        },
      },
    },
    // About page Carousel component
    {
      type: "CarouselComponent",
      contextId: {
        childrenContextId: "newsCarouselContext",
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
          className: "w-3/4 h-full",
        },
      },
    },
  ];

  const newsPageMobileConfig = [
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className: "flex flex-col px-3 items-center",
        },
      },
      children: [
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "relative pt-32 pb-12 px-3 h-screen",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "NEWS",
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
              ],
            },
          ],
        },
        {
          type: "ElementComponent",
          props: {
            tag: "div",
            style: {
              className:
                "flex flex-col w-full max-h-screen py-12 justify-center items-center",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "Media",
                style: {
                  className: "text-4xl font-florisha font-bold text-gray-900",
                },
              },
            },
            {
              // Gallery component
              type: "GalleryComponent",
              props: {
                style: {
                  className:
                    "w-[90vw] p-5 mt-4 overflow-y-auto justify-center shadow-inner shadow-accent",
                },
                columns: 1,
                images: galleryImages,
              },
            },
          ],
        },
      ],
    },
  ];

  const newsPageConfig = {
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
          },
        },
      },
      // News & Media page for desktop
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
        children: newsPageDesktopConfig,
      },
      // News & Media page for mobile
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
        children: newsPageMobileConfig,
      },
    ],
  };

  return <AppBuilder config={newsPageConfig} />;
};

export default News;
