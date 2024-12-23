import { supabase } from "../../../supabaseClient";
import helpChildrenEditForm from "./helpChildrenEditForm";
import { deleteChild } from "../childrenApi";

export const manageHelpChildren = async () => {
  // Fetch data for "Children We've help"
  const { data, error } = await supabase
    .from("children")
    .select("*")
    .eq("type", "help");

  if (error) {
    console.error(error);
    return [];
  }

  // Handle deleting a child
  const handleDelete = async (childId) => {
    try {
      const success = await deleteChild(childId, "children-help");
      if (success) {
        alert("Child deleted successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete child. Please try again.");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const CardStyle = {
    position: "relative",
    backgroundColor: "bg-transparent",
    color: "text-white",
    shadow: "shadow-none",
    height: "h-full",
    margin: "mx-auto",
    padding: "p-0 md:pl-4",
    center: "self-center justify-center",
  };
  const CardTopStyle = {
    height: "h-full",
    width: "w-full",
    padding: "p-0",
    center: "self-center justify-center content-center",
    backgroundColor: "bg-white",
    translate: "translate-y-5",
    borderRadius: "rounded-t-lg",
  };
  const CardBottomStyle = {
    height: "h-auto",
    width: "w-full",
    padding: "py-3 px-2",
    translate: "-translate-y-5",
    center: "self-center justify-center content-center",
    backgroundColor: "bg-white",
    borderRadius: "rounded-full",
  };

  // Return a mapped configuration for children
  return data.map((child) => {
    const headerText = child.header;
    const paragraph1Header = child.paragraph1_header;
    const paragraph2Header = child.paragraph2_header;
    const paragraph1Text = child.paragraph1;
    const paragraph2Text = child.paragraph2;

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
                  className:
                    "flex flex-col lg:justify-center h-full w-full pr-4 md:space-y-4 lg:space-y-6 text-left overflow-y-auto scrollbar-thin",
                },
              },
              children: [
                {
                  // header
                  type: "TextComponent",
                  props: {
                    tag: "h2",
                    text: headerText,
                    style: {
                      className: "hidden md:block text-2xl font-bold",
                    },
                  },
                },
                {
                  // paragraph 1 header and text
                  type: "ElementComponent",
                  props: {
                    style: {
                      className: "flex flex-col text-left justify-center",
                    },
                  },
                  children: [
                    {
                      type: "TextComponent",
                      props: {
                        tag: "h3",
                        text: paragraph1Header,
                        style: {
                          className: "text-xl font-bold",
                        },
                      },
                    },
                    {
                      type: "TextComponent",
                      props: {
                        tag: "p",
                        text: paragraph1Text,
                        style: {
                          className: "text-lg text-gray-500",
                        },
                      },
                    },
                  ],
                },
                {
                  // paragraph 2 header and text
                  type: "ElementComponent",
                  props: {
                    style: {
                      className: "flex flex-col text-left justify-center",
                    },
                  },
                  children: [
                    {
                      type: "TextComponent",
                      props: {
                        tag: "h3",
                        text: paragraph2Header,
                        style: {
                          className: "text-xl font-bold",
                        },
                      },
                    },
                    {
                      type: "TextComponent",
                      props: {
                        tag: "p",
                        text: paragraph2Text,
                        style: {
                          className: "text-lg text-gray-500",
                        },
                      },
                    },
                  ],
                },
                {
                  type: "ButtonComponent",
                  props: {
                    text: "Read More / Gallery",
                    style: {
                      className:
                        "w-fit p-0 bg-transparent hover:bg-transparent border-none text-base-dark font-bold",
                    },
                  },
                }, // read more/gallery button plus donate now if child needs help
              ],
            },
            {
              // child image and donation values card
              type: "CardComponent",
              props: {
                topContainer: {
                  // child image
                  children: [
                    {
                      type: "ImageComponent",
                      props: {
                        src: child.image_url,
                        alt: child.name,
                        style: {
                          rounded: "rounded-t-lg",
                          height: "min-h-96",
                        },
                      },
                    },
                  ],
                  style: CardTopStyle,
                },
                bottomContainer: {
                  // donation values card, changes based on child type
                  children: [
                    {
                      // bottom card content for children we've helped
                      type: "ElementComponent",
                      props: {
                        style: {
                          className:
                            "flex flex-col text-left justify-center min-w-80",
                        },
                      },
                      children: [
                        {
                          type: "ElementComponent",
                          props: {
                            style: {
                              className: "w-3/4 px-6 text-base",
                            },
                          },
                          children: [
                            {
                              type: "TextComponent",
                              props: {
                                text: "Treatment Cost: ",
                                style: {
                                  color: "text-accent font-semibold",
                                },
                              },
                            },
                            {
                              type: "TextComponent",
                              props: {
                                text: `Raised: ${child.raised}`,
                                style: {
                                  color: "text-base-dark",
                                },
                              },
                            },
                            {
                              type: "TextComponent",
                              props: {
                                text: `Remaining: ${child.remaining}`,
                                style: {
                                  color: "text-base-dark font-bold",
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: "TextComponent",
                          props: {
                            text: child.cost,
                            style: {
                              className:
                                "absolute right-10 text-green-500 text-4xl font-bold",
                            },
                          },
                        },
                      ],
                    },
                  ],
                  style: CardBottomStyle,
                },
                style: CardStyle,
              },
            },
            {
              // header
              type: "TextComponent",
              props: {
                tag: "h2",
                text: headerText,
                style: {
                  className:
                    "md:hidden pb-4 self-start text-2xl text-main font-bold",
                },
              },
            },
          ],
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "flex flex-row justify-center items-center space-x-4",
            },
          },
          children: [
            {
              type: "DialogComponent",
              props: {
                dialogChildren: [helpChildrenEditForm(child)],
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
            {
              type: "DialogComponent",
              props: {
                dialogChildren: [
                  {
                    type: "TextComponent",
                    props: {
                      text: `Are you sure you want to delete ${child.name}?`,
                      style: { className: "text-lg font-bold" },
                    },
                  },
                  {
                    type: "ButtonComponent",
                    props: {
                      text: "Confirm",
                      onClick: () =>
                        handleDelete(child.id, () =>
                          console.log("close dialog trigger")
                        ),
                      style: {
                        className:
                          "bg-main hover:bg-white text-white hover:text-main border-main font-bold mt-3 py-2 px-4 rounded",
                      },
                    },
                  },
                ],
                dialogStyle: { className: "text-center" },
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
