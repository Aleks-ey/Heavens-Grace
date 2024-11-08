import AppBuilder from "../components/dynamic/AppBuilder";

const Home = () => {
  const carouselChildContent = [
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "absolute left-40 w-1/3 h-full inset-0 flex flex-col justify-center items-left text-left",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Little Wings",
            tag: "h1",
            style: {
              className: "mb-2 text-5xl font-florisha font-bold text-white",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Big Miracles",
            tag: "h1",
            style: {
              className: "text-5xl font-florisha font-bold text-white",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "A charitable organization dedicated to providing essential medical care for children in countries where it is needed the most. We believe that even small wings can create great miracles, and our mission is to protect every child's life and surround them with care...",
            tag: "p",
            style: {
              className: "my-8 text-xl text-white",
            },
          },
        },
        {
          type: "ButtonComponent",
          props: {
            text: "Donate Now",
            onClick: () => console.log("button clicked"),
            style: {
              className:
                "w-fit bg-white font-montserrat text-main-dark px-4 py-2 rounded-full",
            },
          },
        },
      ],
    },
  ];

  const arrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent right-36",
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

  const homePageConfig = {
    type: "ElementComponent",
    props: {
      style: {
        display: "flex flex-row",
        height: "h-screen py-32",
        spacing: "justify-center items-center space-x-10",
      },
    },
    children: [
      {
        type: "CarouselComponent",
        props: {
          backgrounds: [
            {
              src: "src/assets/images/background1.jpg",
              customStyle: {
                reverse: "-scale-x-100",
              },
            },
            {
              src: "src/assets/images/background2.jpg",
              customStyle: {},
            },
          ],
          carouselChildren: carouselChildContent,
          arrows: arrows,
          style: {
            className: "h-screen w-full relative overflow-hidden",
          },
        },
      },
    ],
  };

  return <AppBuilder config={homePageConfig} />;
};

export default Home;
