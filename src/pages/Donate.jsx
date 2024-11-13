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
              text: "Donate",
              tag: "h1",
              style: {
                className: "text-4xl font-bold text-center my-8",
              },
            },
          },
          {
            type: "TextComponent",
            props: {
              text: "Your donation can help save a life.",
              tag: "p",
              style: {
                className: "text-center text-lg",
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
                  "w-fit bg-main-dark text-white mx-auto mt-8 px-4 py-2 rounded-full",
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
