import { AppBuilder, listLineCarousel } from "@aleks-ey/dynamic-app-builder";

import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import boardAddForm from "../utilities/admin/board/boardAddForm";
import { manageBoard } from "../utilities/admin/board/manageBoard";

import helpedChildrenAddForm from "../utilities/admin/helpedChildren/helpedChildrenAddForm";
import { manageHelpedChildren } from "../utilities/admin/helpedChildren/manageHelpedChildren";

import helpChildrenAddForm from "../utilities/admin/helpChildren/helpChildrenAddForm";
import { manageHelpChildren } from "../utilities/admin/helpChildren/manageHelpChildren";

import { manageAbout } from "../utilities/admin/about/manageAbout";

import { manageDonate } from "../utilities/admin/donate/manageDonate";

const Admin = () => {
  // const [helpedFormData, setHelpedFormData] = useState({
  //   name: "",
  //   header: "",
  //   paragraph1_header: "",
  //   paragraph1: "",
  //   paragraph2_header: "",
  //   paragraph2: "",
  //   cost: "",
  //   raised: "",
  //   remaining: "",
  //   image_url: "",
  // });

  // const [helpFormData, setHelpFormData] = useState({
  //   name: "",
  //   header: "",
  //   paragraph1_header: "",
  //   paragraph1: "",
  //   paragraph2_header: "",
  //   paragraph2: "",
  //   cost: "",
  //   raised: "",
  //   remaining: "",
  //   image_url: "",
  // });

  // const [selectedHelpedChild, setSelectedHelpedChild] = useState(null);

  // const [selectedHelpChild, setSelectedHelpChild] = useState(null);

  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    manageBoard().then(setBoardMembers);
  }, []);

  const [childrenHelped, setChildrenHelped] = useState([]);

  useEffect(() => {
    manageHelpedChildren().then(setChildrenHelped);
  }, []);

  const [childrenHelp, setChildrenHelp] = useState([]);

  useEffect(() => {
    manageHelpChildren().then(setChildrenHelp);
  }, []);

  const [aboutItems, setAboutItems] = useState([]);

  useEffect(() => {
    manageAbout().then(setAboutItems);
  }, []);

  const [donateItems, setDonateItems] = useState([]);

  useEffect(() => {
    manageDonate().then(setDonateItems);
  }, []);

  // const handleAddHelpedChildSubmit = async (newHelpedChildData) => {
  //   try {
  //     const data = await addChild(newHelpedChildData);
  //     if (data && data.length > 0) {
  //       return true; // Success
  //     }
  //     return false; // No data returned
  //   } catch (error) {
  //     console.error("Error adding new helped child:", error);
  //     return false; // Failure
  //   }
  // };
  // const handleAddHelpedChildSubmit = async (newHelpedChildData) => {
  //   try {
  //     const { data, error } = await supabase
  //       .from("children")
  //       .insert([newHelpedChildData]);

  //     if (error) {
  //       console.error("Error adding new helped child:", error.message);
  //       return false; // Failure
  //     }

  //     if (data === null) {
  //       console.log("Helped child added successfully.");
  //       window.location.reload(); // Reload the page to reflect changes
  //       return true; // Success
  //     }

  //     console.log("Unexpected result:", data);
  //     return false; // Handle unexpected cases
  //   } catch (error) {
  //     console.error("Error adding new helped child:", error);
  //     return false; // Failure
  //   }
  // };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      window.location.href = "/login"; // Redirect to login page
    }
  };

  const arrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-black right-2 hidden md:flex",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-right.svg",
            style: {
              className:
                "w-8 h-8 p-0 translate-x-0 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
            },
          },
        },
      ],
    },
    {
      type: "left",
      function: "prev",
      style: {
        className: "bg-black left-1 hidden md:flex",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-left.svg",
            style: {
              className:
                "w-8 h-8 p-0 -translate-x-0 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
            },
          },
        },
      ],
    },
  ];

  const listItems = [
    { text: "Board Members" },
    { text: "Children We've Helped" },
    { text: "Children Needing Help" },
    { text: "About" },
    { text: "Donate" },
  ];
  // -------------------- ADMIN BOARD MEMBERS --------------------
  const adminBoard = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col p-0 items-center justify-start h-full w-full bg-white",
      },
    },
    children: [
      // admin board header, includes add member button
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between w-full p-2 bg-accent",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Add/Edit/Delete Board Members",
              style: {
                className: "text-2xl font-montserrat font-bold text-white",
              },
            },
          },
          {
            type: "DialogComponent",
            props: {
              dialogChildren: [
                // Add member dialog
                boardAddForm(),
              ],
              dialogStyle: {
                className: "text-center w-3/4 h-3/4",
              },
            },
            children: [
              {
                type: "ButtonComponent",
                props: {
                  text: "Add",
                  onClick: () => {
                    console.log("Add board member button clicked");
                  },
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
      // admin board content
      {
        type: "CarouselComponent",
        props: {
          carouselChildren: boardMembers,
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "w-full h-full px-0",
          },
        },
      },
    ],
  };
  // -------------------- ADMIN HELPED CHILDREN --------------------
  const adminHelpedChildren = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col p-0 items-center justify-start h-full w-full bg-white",
      },
    },
    children: [
      // admin children helped header, includes add helped child button
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between w-full p-2 bg-accent",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Add/Edit/Delete Children We've Helped",
              style: {
                className: "text-2xl font-montserrat font-bold text-white",
              },
            },
          },
          {
            type: "DialogComponent",
            props: {
              dialogChildren: [
                // Add helped child dialog
                helpedChildrenAddForm(),
              ],
              dialogStyle: {
                className: "text-center w-3/4 h-3/4",
              },
            },
            children: [
              {
                type: "ButtonComponent",
                props: {
                  text: "Add",
                  onClick: () => {
                    console.log("Add helped child button clicked");
                  },
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
      // admin children we've helped content
      {
        type: "CarouselComponent",
        props: {
          carouselChildren: childrenHelped,
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "w-full h-full px-0",
          },
        },
      },
    ],
  };
  // -------------------- ADMIN NEED HELP CHILDREN --------------------
  const adminNeedHelpChildren = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col p-0 items-center justify-start h-full w-full bg-white",
      },
    },
    children: [
      // admin children needing help header, includes add need help child button
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between w-full p-2 bg-accent",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Add/Edit/Delete Children Needing Help",
              style: {
                className: "text-2xl font-montserrat font-bold text-white",
              },
            },
          },
          {
            type: "DialogComponent",
            props: {
              dialogChildren: [
                // Add help child dialog
                helpChildrenAddForm(),
              ],
              dialogStyle: {
                className: "text-center w-3/4 h-3/4",
              },
            },
            children: [
              {
                type: "ButtonComponent",
                props: {
                  text: "Add",
                  onClick: () => {
                    console.log("Add need help child button clicked");
                  },
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
      // admin children needing help content
      {
        type: "CarouselComponent",
        props: {
          carouselChildren: childrenHelp,
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "w-full h-full px-0",
          },
        },
      },
    ],
  };
  // -------------------- ADMIN ABOUT --------------------
  const adminAbout = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col p-0 items-center justify-start h-full w-full bg-white",
      },
    },
    children: [
      // admin about header
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between w-full p-2 bg-accent",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Edit About Page Content",
              style: {
                className: "text-2xl font-montserrat font-bold text-white",
              },
            },
          },
        ],
      },
      // admin about page content
      {
        type: "CarouselComponent",
        props: {
          carouselChildren: aboutItems,
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "w-full h-full px-0",
          },
        },
      },
    ],
  };
  // -------------------- ADMIN DONATE --------------------
  const adminDonate = {
    type: "ElementComponent",
    props: {
      style: {
        className:
          "flex flex-col p-0 items-center justify-start h-full w-full bg-white",
      },
    },
    children: [
      // admin donate header
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between w-full p-2 bg-accent",
          },
        },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Edit Donate Page Content",
              style: {
                className: "text-2xl font-montserrat font-bold text-white",
              },
            },
          },
        ],
      },
      // admin donate page content
      {
        type: "CarouselComponent",
        props: {
          carouselChildren: donateItems,
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "w-full h-full px-0",
          },
        },
      },
    ],
  };

  const carouselChildren = [
    adminBoard,
    adminHelpedChildren,
    adminNeedHelpChildren,
    adminAbout,
    adminDonate,
  ];
  // ListLineCarousel Config
  const listLineCarouselConfig = listLineCarousel({
    listItems,
    listTitle: "Admin Controls",
    listIndex: 0,
    carouselChildren,
    lineStyle: "h-2/3",
  });

  const adminPageConfig = {
    type: "ElementComponent",
    props: {},
    children: [
      // background image
      {
        type: "ImageComponent",
        props: {
          src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background1.jpg?t=2024-12-03T01%3A01%3A04.025Z",
          style: {
            className: "absolute w-full h-full object-cover object-center",
            opacity: "opacity-50",
            reverse: "-scale-x-100",
            zIndex: "md:-z-10",
          },
        },
      },
      // Admin page for desktop
      {
        type: "ElementComponent",
        props: {
          tag: "div",
          style: {
            display: "hidden md:flex flex-row",
            height: "h-screen px-10 py-32",
            spacing: "justify-center items-center",
          },
        },
        children: [
          listLineCarouselConfig,
          {
            // Logout button (left arrow and text)
            type: "ElementComponent",
            props: {
              style: {
                className:
                  "absolute flex flex-row top-24 left-10 justify-center items-center py-12",
              },
            },
            children: [
              {
                // Left arrow
                type: "ButtonComponent",
                props: {
                  style: {
                    className: "bg-transparent border-none",
                  },
                  onClick: handleLogout,
                },
                children: [
                  {
                    type: "ImageComponent",
                    props: {
                      src: "/icons/arrows/chevron-left.svg",
                      style: {
                        className:
                          "w-8 h-8 p-0 -translate-x-0 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
                      },
                    },
                  },
                ],
              },
              {
                // Logout text
                type: "ButtonComponent",
                props: {
                  text: "Logout",
                  onClick: handleLogout,
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

  return <AppBuilder config={adminPageConfig} />;
};

export default Admin;
