import AppBuilder from "../components/dynamic/AppBuilder";

const Contact = () => {
  const contactPageConfig = {
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
    ],
  };

  return <AppBuilder config={contactPageConfig} />;
};

export default Contact;
