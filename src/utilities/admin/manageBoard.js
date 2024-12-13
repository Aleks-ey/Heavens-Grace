import { supabase } from "../../supabaseClient";

// Add a new row to the 'board' table
export const addBoardMember = async (memberData) => {
  const { data, error } = await supabase.from("board").insert([memberData]);
  if (error) {
    console.error("Error adding board member:", error);
    return null;
  }
  return data;
};

// Update a row in the 'board' table
export const editBoardMember = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("board")
    .update(updatedData)
    .eq("id", id);
  if (error) {
    console.error("Error editing board member:", error);
    return null;
  }
  return data;
};

// Delete a row from the 'board' table
export const deleteBoardMember = async (id) => {
  const { data, error } = await supabase.from("board").delete().eq("id", id);
  if (error) {
    console.error("Error deleting board member:", error);
    return null;
  }
  return data;
};

// Fetch function with added edit and delete buttons
export const manageBoard = async () => {
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
    height: "h-5/6",
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
      type: "ElementComponent",
      props: {
        style: {
          className:
            "w-full h-full border-2 border-base-light bg-base-light rounded-lg shadow-lg p-2",
        },
      },
      children: [
        {
          type: "DialogComponent",
          props: {
            dialogStyle: {
              width: "md:w-3/4",
              height: "h-5/6 md:h-auto",
              overflow: "overflow-y-auto",
            },
            wrapperStyle: {
              width: "w-full h-5/6",
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
                                className: "text-lg md:text-3xl font-bold",
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
                          rounded: "rounded-t-lg lg:object-top",
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
                            "text-2xl md:text-xl font-bold text-wrap text-center",
                        },
                      },
                    },
                    {
                      type: "TextComponent",
                      props: {
                        text: member.position,
                        style: {
                          className: "text-xl md:text-lg text-wrap text-center",
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
        },
        // buttons container
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "flex flex-row justify-center items-center space-x-4",
            },
          },
          children: [
            // Edit Button
            {
              type: "DialogComponent",
              props: {
                dialogChildren: [
                  // Edit member dialog
                ],
              },
              children: [
                {
                  type: "ButtonComponent",
                  props: {
                    text: "Edit",
                    style: {
                      className:
                        "bg-main hover:bg-white text-white hover:text-main border-main font-bold py-2 px-4 rounded",
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
                      onClick: async () => await deleteBoardMember(member.id),
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
