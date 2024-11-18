import AppBuilder from "../components/dynamic/AppBuilder";

const Donate = () => {
  const donatePageConfig = {
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
          tag: "div",
          style: {
            className:
              "flex flex-col py-32 text-center items-center justify-center mx-auto z-10",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Donating Is Easy",
              tag: "h1",
              style: {
                className:
                  "text-main text-5xl font-bold font-florisha text-center my-8",
              },
            },
          },
          {
            type: "TextComponent",
            props: {
              text: "Your donation, no matter the size, can help save a life.",
              tag: "p",
              style: {
                className: "text-center text-3xl font-montserrat",
              },
            },
          },
          {
            type: "TextComponent",
            props: {
              text: "Follow the link below to donate now.",
              tag: "p",
              style: {
                className: "text-center text-3xl font-montserrat",
              },
            },
          },
          {
            type: "ButtonComponent",
            props: {
              text: "Donate Now",
              isExternal: true,
              href: "https://example.com/donate",
              style: {
                backgroundColor: "bg-white md:bg-main border-main",
                hoverColors: "hover:bg-white hover:text-main hover:border-main",
                color: "text-main md:text-white",
                textAlign: "text-center",
                fontSize: "text-lg",
                font: "font-montserrat",
                padding: "px-4 py-2",
                margin: "my-8",
                border: "rounded-full",
              },
            },
          },
        ],
      },
    ],
  };

  return <AppBuilder config={donatePageConfig} />;
};

export default Donate;
