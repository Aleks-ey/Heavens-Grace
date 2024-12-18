import { AppBuilder, listLineCarousel } from "@aleks-ey/dynamic-app-builder";

import { useEffect, useState } from "react";

import boardAddForm from "../utilities/admin/boardAddForm";
import { manageBoard } from "../utilities/admin/manageBoard";
import { addBoardMember } from "../utilities/admin/boardApi";

import helpedChildrenAddForm from "../utilities/admin/helpedChildrenAddForm";
import { manageHelpedChildren } from "../utilities/admin/manageHelpedChildren";

import helpChildrenAddForm from "../utilities/admin/helpChildrenAddForm";
import { manageHelpChildren } from "../utilities/admin/manageHelpChildren";

import { addChild } from "../utilities/admin/childrenApi";

const Admin = () => {
  const [boardFormData, setBoardFormData] = useState({
    name: "",
    position: "",
    biography: "",
    personal: "",
    image_url: "",
  });

  const [helpedFormData, setHelpedFormData] = useState({
    name: "",
    description: "",
    description2: "",
    cost: "",
    raised: "",
    remaining: "",
    image_url: "",
  });

  const [helpFormData, setHelpFormData] = useState({
    name: "",
    description: "",
    description2: "",
    cost: "",
    raised: "",
    remaining: "",
    image_url: "",
  });

  const [boardMembers, setBoardMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  const [childrenHelped, setChildrenHelped] = useState([]);
  const [selectedHelpedChild, setSelectedHelpedChild] = useState(null);

  const [childrenHelp, setChildrenHelp] = useState([]);
  const [selectedHelpChild, setSelectedHelpChild] = useState(null);

  useEffect(() => {
    manageBoard({ boardFormData, setBoardFormData, setSelectedMember }).then(
      setBoardMembers
    );
  }, [boardFormData]);

  useEffect(() => {
    manageHelpedChildren({
      helpedFormData,
      setHelpedFormData,
      setSelectedHelpedChild,
    }).then(setChildrenHelped);
  }, [helpedFormData]);

  useEffect(() => {
    manageHelpChildren({
      helpFormData,
      setHelpFormData,
      setSelectedHelpChild,
    }).then(setChildrenHelp);
  }, [helpFormData]);

  // Update boardFormData when selectedMember changes
  useEffect(() => {
    if (selectedMember) {
      setBoardFormData({
        name: selectedMember.name || "",
        position: selectedMember.position || "",
        biography: selectedMember.biography || "",
        personal: selectedMember.personal || "",
        image_url: selectedMember.image_url || "",
      });
    }
  }, [selectedMember]);

  useEffect(() => {
    if (selectedHelpedChild) {
      setHelpedFormData({
        name: selectedHelpedChild.name || "",
        description: selectedHelpedChild.description || "",
        description2: selectedHelpedChild.description2 || "",
        cost: selectedHelpedChild.cost || "",
        raised: selectedHelpedChild.raised || "",
        remaining: selectedHelpedChild.remaining || "",
        image_url: selectedHelpedChild.image_url || "",
      });
    }
  }, [selectedHelpedChild]);

  useEffect(() => {
    if (selectedHelpChild) {
      setHelpFormData({
        name: selectedHelpChild.name || "",
        description: selectedHelpChild.description || "",
        description2: selectedHelpChild.description2 || "",
        cost: selectedHelpChild.cost || "",
        raised: selectedHelpChild.raised || "",
        remaining: selectedHelpChild.remaining || "",
        image_url: selectedHelpChild.image_url || "",
      });
    }
  }, [selectedHelpChild]);

  const handleAddBoardSubmit = async (newMemberData) => {
    try {
      const data = await addBoardMember(newMemberData);
      if (data && data.length > 0) {
        return true; // Success
      }
      return false; // No data returned
    } catch (error) {
      console.error("Error adding new board member:", error);
      return false; // Failure
    }
  };

  const handleAddHelpedChildSubmit = async (newHelpedChildData) => {
    try {
      const data = await addChild(newHelpedChildData);
      if (data && data.length > 0) {
        return true; // Success
      }
      return false; // No data returned
    } catch (error) {
      console.error("Error adding new helped child:", error);
      return false; // Failure
    }
  };

  const handleAddHelpChildSubmit = async (newHelpChildData) => {
    try {
      const data = await addChild(newHelpChildData);
      if (data && data.length > 0) {
        return true; // Success
      }
      return false; // No data returned
    } catch (error) {
      console.error("Error adding new help child:", error);
      return false; // Failure
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
  ];

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
                boardAddForm({
                  boardFormData,
                  setBoardFormData,
                  onSubmit: (boardFormData) =>
                    handleAddBoardSubmit(boardFormData),
                  closeDialog: () => console.log("close dialog trigger"),
                }),
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
                    setBoardFormData({
                      name: "",
                      position: "",
                      biography: "",
                      personal: "",
                      image_url: "",
                    });
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
                helpedChildrenAddForm({
                  helpedFormData,
                  setHelpedFormData,
                  onSubmit: (helpedChildFormData) =>
                    handleAddHelpedChildSubmit(helpedChildFormData),
                  closeDialog: () => console.log("close dialog trigger"),
                }),
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
                    setHelpedFormData({
                      name: "",
                      description: "",
                      description2: "",
                      cost: "",
                      raised: "",
                      remaining: "",
                      image_url: "",
                    });
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
                helpChildrenAddForm({
                  helpFormData,
                  setHelpFormData,
                  onSubmit: (helpChildFormData) =>
                    handleAddHelpChildSubmit(helpChildFormData),
                  closeDialog: () => console.log("close dialog trigger"),
                }),
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
                    setHelpFormData({
                      name: "",
                      description: "",
                      description2: "",
                      cost: "",
                      raised: "",
                      remaining: "",
                      image_url: "",
                    });
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

  const carouselChildren = [
    adminBoard,
    adminHelpedChildren,
    adminNeedHelpChildren,
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
        children: [listLineCarouselConfig],
      },
    ],
  };

  return <AppBuilder config={adminPageConfig} />;
};

export default Admin;
