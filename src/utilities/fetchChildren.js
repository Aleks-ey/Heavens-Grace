import { supabase } from "../supabaseClient"; // Your Supabase client

export async function fetchChildren(type) {
  // json for children card component
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
    height: "h-full max-h-[80%]",
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

  const { data, error } = await supabase
    .from("children")
    .select("*")
    .eq("type", type);

  if (error) {
    console.error("Error fetching children data:", error);
    return [];
  }

  // Fetch image URLs for each child record
  const fetchImageUrl = async (bucket, fileName) => {
    const { data: imageData, error: imageError } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    if (imageError) {
      console.error(`Error fetching image URL (${fileName}):`, imageError);
      return null;
    }
    return imageData.publicUrl;
  };

  // Transform data into dynamic component format
  return await Promise.all(
    data.map(async (child) => {
      const bucket =
        child.type === "helped" ? "children-helped" : "children-help";
      const imageUrl = await fetchImageUrl(bucket, child.file_name);
      // Use default placeholder if image URL fetch fails
      const src = imageUrl || "/images/placeholder.jpg";

      const header = child.header;
      const paragraph1Header = child.paragraph1_header || child.name;
      const paragraph2Header = child.paragraph2_header;
      const paragraph1Text = child.paragraph1;
      const paragraph2Text = child.paragraph2;

      const button =
        type === "helped"
          ? {
              type: "ButtonComponent",
              props: {
                text: "Read More / Gallery",
                style: {
                  className:
                    "w-fit p-0 bg-transparent hover:bg-transparent border-none text-base-dark font-bold",
                },
              },
            }
          : {
              type: "ElementComponent",
              props: {
                style: {
                  className: "flex flex-col",
                },
              },
              children: [
                {
                  type: "ButtonComponent",
                  props: {
                    text: "Read More / Gallery",
                    href: "/news",
                    style: {
                      className:
                        "w-fit p-0 bg-transparent hover:bg-transparent border-none text-base-dark font-bold",
                    },
                  },
                },
                {
                  type: "ButtonComponent",
                  props: {
                    text: "DONATE NOW! TAP ON LADYBUG",
                    style: {
                      className:
                        "w-fit p-0 bg-transparent hover:bg-transparent border-none text-main font-bold",
                    },
                  },
                },
              ],
            };

      const helpedBottomContent = {
        // bottom card content for children we've helped
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-col text-left justify-center min-w-80",
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
      };

      const helpBottomContent = {
        // bottom card content for children needing help
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-col text-left justify-center min-w-80",
          },
        },
        children: [
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "w-3/4 px-6 text-sm lg:text-base",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  text: `Treatment Cost: ${child.cost}`,
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
                    color: "text-main font-bold",
                  },
                },
              },
            ],
          },
          {
            type: "ButtonComponent",
            props: {
              href: "/donate",
              style: {
                className:
                  "absolute right-0 bg-white hover:bg-white border-none shadow-lg text-white p-0 rounded-full",
              },
            },
            children: [
              {
                type: "ImageComponent",
                props: {
                  src: "/logos/logo-color.png",
                  alt: "Heaven's Grace Red Ladybug",
                  style: {
                    height: "w-24 h-24 lg:h-28",
                    objectFit: "object-fill",
                  },
                },
              },
            ],
          },
        ],
      };
      const bottomContent =
        child.type === "helped" ? helpedBottomContent : helpBottomContent;

      return {
        type: "ElementComponent",
        props: {
          style: {
            className:
              "flex flex-col-reverse md:flex-row justify-center items-center h-full w-full",
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
                  text: header,
                  style: {
                    className: "hidden md:block text-2xl font-bold",
                  },
                },
              },
              {
                // child name and description
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
                // after receiving help or why help is needed
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
              button, // read more/gallery button plus donate now if child needs help
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
                      src: src,
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
                children: [bottomContent],
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
              text: header,
              style: {
                className:
                  "md:hidden pb-4 self-start text-2xl text-main font-bold",
              },
            },
          },
        ],
      };
    })
  );
}
