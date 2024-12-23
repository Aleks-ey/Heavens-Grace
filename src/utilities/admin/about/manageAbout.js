import { supabase } from "../../../supabaseClient";
import aboutEditForm from "./aboutEditForm";

export const manageAbout = async () => {
  // Fetch data for about page sections
  const { data, error } = await supabase.from("about").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  // Return a mapped configuration for about sections
  return data.map((section) => {
    const title = section.section_title;
    const paragraph1 = section.paragraph1;
    const list = section.list;
    const paragraph2 = section.paragraph2;

    // transofrm list into an array of objects if it exists
    const listItems = list
      ? list.split(", ").map((item) => {
          return {
            text: item,
          };
        })
      : [];

    return {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "w-full h-full p-2 pt-10 content-center bg-white border border-black overflow-y-auto scrollbar-thin scrollbar-thumb-main scrollbar-track-main",
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
                    "relative flex flex-col justify-center items-left bg-base-light rounded-lg shadow-lg m-8",
                },
              },
              children: [
                {
                  type: "TextComponent",
                  props: {
                    text: title,
                    style: {
                      className:
                        "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
                    },
                  },
                },
                paragraph1
                  ? {
                      type: "TextComponent",
                      props: {
                        text: paragraph1,
                        tag: "p",
                        style: {
                          className:
                            "p-10 text-left text-2xl font-montserrat font-bold text-black",
                        },
                      },
                    }
                  : {},
                listItems.length > 0
                  ? {
                      type: "ListComponent",
                      props: {
                        underlineActive: false,
                        items: listItems,
                        style: {
                          className:
                            "pl-16 pr-10 list-disc text-2xl text-left font-montserrat font-bold text-black",
                        },
                      },
                    }
                  : {},
                paragraph2
                  ? {
                      type: "TextComponent",
                      props: {
                        text: paragraph2,
                        tag: "p",
                        style: {
                          className:
                            "p-10 text-left text-2xl font-montserrat font-bold text-black",
                        },
                      },
                    }
                  : {},
              ],
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
                dialogChildren: [aboutEditForm(section)],
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
          ],
        },
      ],
    };
  });
};
