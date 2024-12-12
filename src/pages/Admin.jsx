import { AppBuilder } from "@aleks-ey/dynamic-app-builder";

const Admin = () => {
  const carouselChildContent = [
    // children section
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "bg-white p-20 w-3/4 h-3/4 inset-0 flex flex-col justify-center rounded-lg shadow-lg",
        },
      },
      children: [],
    },
    // board section
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "bg-white p-20 w-3/4 h-3/4 inset-0 flex flex-col justify-center rounded-lg shadow-lg",
        },
      },
      children: [],
    },
  ];

  const arrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent right-10 hidden md:flex",
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
    {
      type: "left",
      function: "prev",
      style: {
        className: "bg-transparent left-10 hidden md:flex",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-left.svg",
            style: {
              className:
                "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
            },
          },
        },
      ],
    },
  ];

  const adminPageConfig = {
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
          backgroundSettings: {
            autoAdvanceBackground: false,
          },
          carouselChildren: carouselChildContent,
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "h-screen w-full relative overflow-hidden",
          },
        },
      },
    ],
  };

  return <AppBuilder config={adminPageConfig} />;
};

export default Admin;
