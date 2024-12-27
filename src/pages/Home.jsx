import AppBuilder from "../components/dynamic/AppBuilder";

const Home = () => {
  const carouselChildContent = [
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "absolute md:left-40 md:w-1/3 h-full inset-0 flex flex-col justify-center md:items-left md:text-left",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Little Wings",
            tag: "h1",
            style: {
              className:
                "mb-2 text-4xl md:text-5xl font-florisha font-bold text-white",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Big Miracles",
            tag: "h1",
            style: {
              className:
                "text-4xl md:text-5xl font-florisha font-bold text-white",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "A charitable organization dedicated to providing essential medical care for children in countries where it is needed the most. We believe that even small wings can create great miracles, and our mission is to protect every child's life and surround them with care...",
            tag: "p",
            style: {
              className: "px-4 md:px-0 my-8 text-lg md:text-2xl text-white",
            },
          },
        },
        {
          type: "ButtonComponent",
          props: {
            text: "Donate Now",
            href: "https://www.paypal.com/donate/?hosted_button_id=WESFEVUAYS63Y",
            style: {
              className:
                "w-fit bg-white font-montserrat text-main-dark mx-auto md:mx-0 px-4 py-2 rounded-full",
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
        className: "bg-transparent right-36 hidden md:flex",
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
              src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background1.jpg?t=2024-12-03T01%3A01%3A04.025Z",
              customStyle: {
                reverse: "-scale-x-100",
              },
            },
            {
              src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background2.jpg?t=2024-12-03T01%3A01%3A33.821Z",
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
