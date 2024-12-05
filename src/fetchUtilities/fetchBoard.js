import { supabase } from "../supabaseClient";

export const fetchBoard = async () => {
  const { data, error } = await supabase.from("board").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  const CardStyle = {
    position: "relative",
    backgroundColor: "bg-transparent",
    color: "text-white",
    shadow: "shadow-none",
    width: "w-full",
    height: "h-full",
    margin: "mx-auto",
    padding: "p-0",
    center: "self-center justify-center",
  };
  const CardTStyle = {
    width: "w-full",
    height: "h-2/3 md:h-1/2",
    padding: "p-0",
    translate: "translate-y-5",
  };
  const CardBStyle = {
    height: "h-24",
    width: "w-full",
    padding: "py-3 px-2",
    translate: "-translate-y-5",
    center: "self-center justify-center content-center",
    backgroundColor: "bg-white",
    borderRadius: "rounded-full",
  };

  return data.map((member) => {
    return {
      type: "DialogComponent",
      props: {
        dialogStyle: {
          width: "md:w-3/4",
          height: "h-5/6 md:h-auto",
          overflow: "overflow-y-auto",
        },
        wrapperStyle: {
          width: "w-full",
        },
        dialogChildren: [
          {
            type: "ElementComponent",
            props: {
              style: {
                className:
                  "flex flex-col md:flex-row justify-center items-center",
              },
            },
            children: [
              {
                type: "ElementComponent",
                props: {
                  style: {
                    className: "space-y-2 md:space-y-4 p-2 md:p-4",
                  },
                },
                children: [
                  {
                    type: "TextComponent",
                    props: {
                      text: member.name,
                      style: {
                        className: "text-lg md:text-2xl font-bold",
                      },
                    },
                  },
                  ...(member.biography
                    ? [
                        {
                          type: "ElementComponent",
                          children: [
                            {
                              type: "TextComponent",
                              props: {
                                text: "Biography",
                                style: {
                                  className: "font-bold",
                                },
                              },
                            },
                            {
                              type: "TextComponent",
                              props: {
                                text: member.biography,
                              },
                            },
                          ],
                        },
                      ]
                    : []),
                  ...(member.personal
                    ? [
                        {
                          type: "ElementComponent",
                          children: [
                            {
                              type: "TextComponent",
                              props: {
                                text: "Personal Statement",
                                style: {
                                  className: "font-bold",
                                },
                              },
                            },
                            {
                              type: "TextComponent",
                              props: {
                                text: member.personal,
                              },
                            },
                          ],
                        },
                      ]
                    : []),
                ],
              },
              {
                type: "ImageComponent",
                props: {
                  src: member.image_url,
                  alt: `${member.name} Headshot`,
                  style: {
                    hidden: "hidden md:block",
                    width: "w-1/2",
                    height: "h-1/2",
                    objectFit: "object-cover",
                    rounded: "rounded-lg",
                    customStyle: member.image_style,
                  },
                },
              },
            ],
          },
        ],
      },
      children: [
        {
          type: "CardComponent",
          props: {
            topContainer: {
              children: [
                {
                  type: "ImageComponent",
                  props: {
                    src: member.image_url,
                    alt: `${member.name} Headshot`,
                    style: {
                      width: "w-full",
                      height: "h-full",
                      objectFit: "object-cover",
                      rounded: "rounded-t-lg",
                      customStyle: member.image_style,
                    },
                  },
                },
              ],
              style: CardTStyle,
            },
            bottomContainer: {
              children: [
                {
                  type: "TextComponent",
                  props: {
                    text: member.name,
                    style: {
                      className:
                        "text-2xl md:text-lg font-bold text-wrap text-center",
                    },
                  },
                },
              ],
              style: CardBStyle,
            },
            style: CardStyle,
          },
        },
      ],
    };
  });
};
