import Carousel from "../components/dynamic/highLevel/carousel/CarouselComponent";

const Home = () => {
  const carouselChildContent = {
    type: "ContainerComponent",
    props: {
      style: {
        className:
          "absolute left-40 top-72 w-1/3 h-fit inset-0 flex flex-col justify-center items-left text-left",
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
  };

  const carouselConfig = {
    backgrounds: [
      {
        src: "src/assets/images/background1.jpg",
        customStyle: {
          reverse: "-scale-x-100",
        },
      },
      {
        src: "src/assets/images/background2.jpg",
      },
    ],
    children: [carouselChildContent],
    interval: 10000,
    leftArrow: {
      showLeftArrow: false,
    },
    rightArrow: {
      showRightArrow: true,
      rightArrowContent: "→",
      rightArrowStyle: {
        className:
          "absolute right-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full",
      },
    },
    style: {
      className: "h-screen w-full relative overflow-hidden",
    },
  };

  return (
    <div className="w-full h-screen mx-auto bg-base-dark">
      <Carousel {...carouselConfig} />
    </div>
  );
};

export default Home;
