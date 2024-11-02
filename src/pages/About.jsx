import AppBuilder from "../components/dynamic/AppBuilder";

const About = () => {
  //   const [activeIndex, setActiveIndex] = useState(0);

  //   const boardMembers = [
  //     {
  //       type: "CardComponent",
  //       props: {
  //         topContainer: {
  //           children: [
  //             {
  //               type: "ImageComponent",
  //               props: { src: "/path/to/image1.jpg", alt: "Laura Badasyan" },
  //             },
  //           ],
  //         },
  //         bottomContainer: {
  //           children: [
  //             {
  //               type: "TextComponent",
  //               props: {
  //                 text: "Laura Badasyan - My name is Laura Badasyan and having Armenian roots, I was born and raised in the Republic of Georgia...",
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     {
  //       type: "CardComponent",
  //       props: {
  //         topContainer: {
  //           children: [
  //             {
  //               type: "ImageComponent",
  //               props: { src: "/path/to/image2.jpg", alt: "Arsen Ghasabyan" },
  //             },
  //           ],
  //         },
  //         bottomContainer: {
  //           children: [
  //             {
  //               type: "TextComponent",
  //               props: {
  //                 text: "Arsen Ghasabyan brings over 15 years of experience in clinical trial management...",
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     {
  //       type: "CardComponent",
  //       props: {
  //         topContainer: {
  //           children: [
  //             {
  //               type: "ImageComponent",
  //               props: { src: "/path/to/image3.jpg", alt: "Tea Todua" },
  //             },
  //           ],
  //         },
  //         bottomContainer: {
  //           children: [
  //             {
  //               type: "TextComponent",
  //               props: {
  //                 text: "Tea Todua, originally from Zugdidi, Georgia, brings a strong medical background...",
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   ];

  //   const listItems = [
  //     "Mission Statement",
  //     "Our Approach",
  //     "Board of Directors",
  //     "Why Georgia and Armenia?",
  //   ];

  const carouselChildContent = [
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
      type: "TextComponent",
      props: {
        text: "Board of Directors",
        tag: "h1",
        style: {
          className: "text-5xl font-florisha font-bold text-black",
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
    type: "ContainerComponent",
    props: {
      style: {
        className: "flex flex-col items-center pt-40 p-20",
      },
    },
    children: [
      {
        type: "ListComponent",
        contextId: "aboutCarouselContext",
        props: {
          items: [
            "Mission Statement",
            "Our Approach",
            "Board of Directors",
            "Why Georgia and Armenia?",
          ],
          underlineActive: true,
          initialIndex: 2,
        },
      },
      {
        type: "CarouselComponent",
        props: {
          backgrounds: [
            {
              src: "/path/to/image1.jpg",
              customStyle: {
                className: "bg-red-500",
              },
            },
            {
              src: "/path/to/image2.jpg",
              customStyle: {
                className: "bg-blue-500",
              },
            },
            {
              src: "/path/to/image3.jpg",
              customStyle: {
                className: "bg-green-500",
              },
            },
          ],
          carouselChildren: carouselChildContent,
          style: {
            className: "w-full h-96",
          },
          displayChildren: true,
        },
      },
    ],
  };

  return <AppBuilder config={aboutPageConfig} />;
};

export default About;
