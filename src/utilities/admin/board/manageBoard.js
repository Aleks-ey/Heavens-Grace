import { supabase } from "../../../supabaseClient";
import boardEditForm from "./boardEditForm";

// Fetch function with added edit and delete buttons
export const manageBoard = async () => {
  // fetch data for board members
  const { data, error } = await supabase.from("board").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  const handleDelete = async (memberId) => {
    try {
      const { error } = await supabase
        .from("board")
        .delete()
        .eq("id", memberId);
      if (error) {
        alert("Failed to delete board member. Please try again.");
        return;
      }
      alert("Board member deleted successfully!");
      window.location.reload();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting board member.");
    }
  };

  // return a mapped configuration for each board member
  return data.map((member) => {
    return {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "w-full h-full p-2 pt-10 bg-base-light border border-black overflow-y-auto scrollbar-thin scrollbar-thumb-main scrollbar-track-main",
        },
      },
      style: {
        className: "px-0 py-0",
      },
      children: [
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "flex flex-row justify-center items-center",
            },
          },
          children: [
            {
              type: "ElementComponent",
              props: {
                style: {
                  className: "space-y-2 p-4 text-left",
                },
              },
              children: [
                {
                  type: "ElementComponent",
                  props: {
                    style: {
                      className: "font-montserrat",
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
                    {
                      type: "TextComponent",
                      props: {
                        text: member.position,
                        style: {
                          className: "text-lg md:text-xl font-bold",
                        },
                      },
                    },
                  ],
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
                                className: "font-bold font-montserrat",
                              },
                            },
                          },
                          {
                            type: "TextComponent",
                            props: {
                              text: member.biography,
                              style: {
                                className: "font-montserrat",
                              },
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
                  shadow: "shadow-xl",
                  customStyle: member.image_style,
                },
              },
            },
          ],
        },
        // buttons container
        {
          type: "ElementComponent",
          props: {
            style: {
              className:
                "flex flex-row pt-10 justify-center items-center space-x-4",
            },
          },
          children: [
            // Edit Button
            {
              type: "DialogComponent",
              props: {
                dialogChildren: [boardEditForm(member)],
                dialogStyle: {
                  className: "text-center w-3/4 h-3/4",
                },
              },
              children: [
                {
                  type: "ButtonComponent",
                  props: {
                    text: "Edit",
                    style: {
                      className:
                        "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-6 rounded",
                    },
                  },
                },
              ],
            },
            // Delete Button
            {
              type: "DialogComponent",
              props: {
                dialogChildren: [
                  {
                    type: "TextComponent",
                    props: {
                      text: `Are you sure you want to delete ${member.name}?`,
                      style: {
                        className: "text-lg font-bold",
                      },
                    },
                  },
                  {
                    type: "ButtonComponent",
                    props: {
                      text: "Confirm",
                      onClick: () =>
                        handleDelete(member.id, () =>
                          console.log("Close dialog trigger")
                        ),
                      style: {
                        className:
                          "bg-main hover:bg-white text-white hover:text-main border-main font-bold mt-3 py-2 px-4 rounded",
                      },
                    },
                  },
                ],
                dialogStyle: {
                  className: "text-center",
                },
              },
              children: [
                {
                  type: "ButtonComponent",
                  props: {
                    text: "Delete",
                    style: {
                      className:
                        "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-4 rounded",
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  });
};
