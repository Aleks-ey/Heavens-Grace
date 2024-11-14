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