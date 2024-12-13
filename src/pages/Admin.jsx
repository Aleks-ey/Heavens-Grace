import { AppBuilder } from "@aleks-ey/dynamic-app-builder";

import React, { useEffect, useState } from "react";
import { fetchChildren } from "../utilities/fetchChildren";
import {
  addBoardMember,
  editBoardMember,
  deleteBoardMember,
  manageBoard,
} from "../utilities/admin/manageBoard";
import {
  addChild,
  editChild,
  deleteChild,
} from "../utilities/admin/manageChildren";

const Admin = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    manageBoard().then(setBoardMembers);
    fetchChildren().then(setChildren);
  }, []);

  const handleAddBoardMember = async (newMember) => {
    const addedMember = await addBoardMember(newMember);
    if (addedMember) setBoardMembers([...boardMembers, ...addedMember]);
  };

  const handleEditBoardMember = async (id, updatedData) => {
    const updatedMember = await editBoardMember(id, updatedData);
    if (updatedMember) {
      setBoardMembers(
        boardMembers.map((member) =>
          member.id === id ? updatedMember[0] : member
        )
      );
    }
  };

  const handleDeleteBoardMember = async (id) => {
    const deletedMember = await deleteBoardMember(id);
    if (deletedMember) {
      setBoardMembers(boardMembers.filter((member) => member.id !== id));
    }
  };

  const handleAddChild = async (newChild) => {
    const addedChild = await addChild(newChild);
    if (addedChild) setChildren([...children, ...addedChild]);
  };

  const handleEditChild = async (id, updatedData) => {
    const updatedChild = await editChild(id, updatedData);
    if (updatedChild) {
      setChildren(
        children.map((child) => (child.id === id ? updatedChild[0] : child))
      );
    }
  };

  const handleDeleteChild = async (id) => {
    const deletedChild = await deleteChild(id);
    if (deletedChild) {
      setChildren(children.filter((child) => child.id !== id));
    }
  };

  const adminChildren = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        className:
          "bg-white p-4 w-5/6 h-3/4 inset-0 flex flex-col rounded-lg shadow-lg",
      },
    },
    children: [
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between",
          },
        },
        children: [
          // admin children header
          {
            type: "TextComponent",
            props: {
              text: "Add/Edit/Delete Children",
              style: {
                className: "text-2xl font-bold",
              },
            },
          },
          // add child button wrapped in dialog
          {
            type: "DialogComponent",
            props: {
              dialogChildren: [
                // add child dialog
              ],
            },
            children: [
              // add child button
              {
                type: "ButtonComponent",
                props: {
                  text: "Add Child",
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
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-col items-center space-y-4",
          },
        },
        children: [],
      },
    ],
    style: {
      className: "px-0",
    },
  };

  const adminBoard = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        className:
          "bg-accent p-4 w-5/6 h-3/4 inset-0 flex flex-col rounded-lg shadow-lg",
      },
    },
    children: [
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row justify-between",
          },
        },
        children: [
          // admin board header
          {
            type: "TextComponent",
            props: {
              text: "Add/Edit/Delete Board Members",
              style: {
                className: "text-white text-2xl font-bold",
              },
            },
          },
          // add board member button wrapped in dialog
          {
            type: "DialogComponent",
            props: {
              dialogChildren: [
                // add board member dialog
              ],
            },
            children: [
              // add board member button
              {
                type: "ButtonComponent",
                props: {
                  text: "Add Member",
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
      {
        type: "ElementComponent",
        props: {
          style: {
            className: "flex flex-row items-center h-[90%] mt-4",
          },
        },
        children: [
          {
            type: "CarouselMultiItemsComponent",
            props: {
              carouselChildren: boardMembers,
              displayCount: 2,
              arrows: [
                {
                  type: "right",
                  function: "next",
                  style: {
                    className: "bg-transparent top-1/2 right-2 translate-x-9",
                  },
                  arrowChildren: [
                    {
                      type: "ImageComponent",
                      props: {
                        src: "/icons/arrows/chevron-right.svg",
                        style: {
                          className:
                            "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
                        },
                      },
                    },
                  ],
                },
                {
                  type: "left",
                  function: "prev",
                  style: {
                    className: "bg-transparent top-1/2 left-0 -translate-x-16",
                  },
                  arrowChildren: [
                    {
                      type: "ImageComponent",
                      props: {
                        src: "/icons/arrows/chevron-left.svg",
                        style: {
                          className:
                            "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
                        },
                      },
                    },
                  ],
                },
              ],
              style: {
                className: "w-full h-full space-x-10 px-10",
              },
            },
          },
        ],
      },
    ],
    style: {
      className: "px-0",
    },
  };

  const arrows = [
    {
      type: "right",
      function: "next",
      style: {
        className: "bg-transparent right-0 hidden md:flex",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-right.svg",
            style: {
              className: "w-16 h-16 p-1",
            },
          },
        },
      ],
    },
    {
      type: "left",
      function: "prev",
      style: {
        className: "bg-transparent left-0 hidden md:flex",
      },
      arrowChildren: [
        {
          type: "ImageComponent",
          props: {
            src: "/icons/arrows/chevron-left.svg",
            style: {
              className: "w-16 h-16 p-1",
            },
          },
        },
      ],
    },
  ];

  const adminPageConfig = {
    type: "ElementComponent",
    props: {
      style: {
        display: "flex flex-row",
        height: "h-screen py-32",
        spacing: "justify-center items-center space-x-10",
      },
    },
    children: [
      {
        type: "CarouselComponent",
        props: {
          backgrounds: [
            {
              src: "https://bgwvecjqiktvopqzsexd.supabase.co/storage/v1/object/public/backgrounds/background1.jpg?t=2024-12-03T01%3A01%3A04.025Z",
              customStyle: {
                reverse: "-scale-x-100",
              },
            },
          ],
          backgroundSettings: {
            autoAdvanceBackground: false,
            backgroundTransition: "scroll",
          },
          // carouselChildren: [adminChildren, adminBoard],
          childrenSettings: {
            autoAdvanceChildren: false,
          },
          arrows: arrows,
          style: {
            className: "h-screen w-full relative overflow-hidden",
          },
        },
      },
    ],
  };

  return <AppBuilder config={adminPageConfig} />;
};

export default Admin;
