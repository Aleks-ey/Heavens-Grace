EXAMPLE:
{
  "type": "CarouselComponent",
  "props": {
    "backgrounds": [
      "https://via.placeholder.com/1920x1080",
      "https://via.placeholder.com/1920x1080/ff0000",
      "https://via.placeholder.com/1920x1080/00ff00"
    ],
    "children": [
      {
        "type": "TextComponent",
        "props": {
          "text": "Welcome to Slide 1",
          "tag": "h2",
          "style": {
            "className": "text-4xl font-bold text-white"
          }
        }
      },
      {
        "type": "TextComponent",
        "props": {
          "text": "Welcome to Slide 2",
          "tag": "h2",
          "style": {
            "className": "text-4xl font-bold text-white"
          }
        }
      },
      {
        "type": "TextComponent",
        "props": {
          "text": "Welcome to Slide 3",
          "tag": "h2",
          "style": {
            "className": "text-4xl font-bold text-white"
          }
        }
      }
    ],
    "interval": 5000,
    "style": {
      "className": "h-screen w-full relative overflow-hidden"
    }
  }
}

AFTER UPDATE WITH EITHER OR:
<CarouselComponent
  backgrounds={[
    { src: "image1.jpg", customStyle: { className: "brightness-75" } },
    { src: "image2.jpg", customStyle: { className: "brightness-50" } },
  ]}
  children={[
    {
      type: "TextComponent",
      props: { text: "Welcome to the Carousel" },
      containerStyle: { className: "text-white text-center" },
    },
    {
      type: "TextComponent",
      props: { text: "Enjoy the slideshow" },
      containerStyle: { className: "text-white text-center" },
    },
  ]}
  interval={5000}
  autoAdvance={true}
  displayBackground={true}
  displayChildren={true}
/>

EXAMPLE ARROW BUTTONS:
{
      type: "left",
      function: "prevChild",
      style: {
        className: "bg-transparent left-0",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "src/assets/arrows/chevron-left.svg",
            style: {
              className: // mask svg as white
                "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
            },
          },
        },
      ],
    },
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent right-0 translate-x-9",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "src/assets/arrows/chevron-right.svg",
            style: {
              className: // mask svg as white 
                "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]", 
            },
          },
        },
      ],
    },