import React, { useState } from "react";
import ListComponent from "./ListComponent";
import ControlledCarouselComponent from "./ControlledCarouselComponent";
import CardComponent from "./CardComponent";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const boardMembers = [
    {
      type: "CardComponent",
      props: {
        topContainer: {
          children: [
            {
              type: "ImageComponent",
              props: { src: "/path/to/image1.jpg", alt: "Laura Badasyan" },
            },
          ],
        },
        bottomContainer: {
          children: [
            {
              type: "TextComponent",
              props: {
                text: "Laura Badasyan - My name is Laura Badasyan and having Armenian roots, I was born and raised in the Republic of Georgia...",
              },
            },
          ],
        },
      },
    },
    {
      type: "CardComponent",
      props: {
        topContainer: {
          children: [
            {
              type: "ImageComponent",
              props: { src: "/path/to/image2.jpg", alt: "Arsen Ghasabyan" },
            },
          ],
        },
        bottomContainer: {
          children: [
            {
              type: "TextComponent",
              props: {
                text: "Arsen Ghasabyan brings over 15 years of experience in clinical trial management...",
              },
            },
          ],
        },
      },
    },
    {
      type: "CardComponent",
      props: {
        topContainer: {
          children: [
            {
              type: "ImageComponent",
              props: { src: "/path/to/image3.jpg", alt: "Tea Todua" },
            },
          ],
        },
        bottomContainer: {
          children: [
            {
              type: "TextComponent",
              props: {
                text: "Tea Todua, originally from Zugdidi, Georgia, brings a strong medical background...",
              },
            },
          ],
        },
      },
    },
  ];

  const listItems = ["Mission Statement", "Our Approach", "Board of Directors", "Why Georgia and Armenia?"];

  return (
    <div className="flex p-8 space-x-8">
      <div className="w-1/4">
        <h2 className="font-bold text-lg mb-4">ABOUT US</h2>
        <ListComponent
          items={listItems}
          activeIndex={activeIndex}
          onItemClick={setActiveIndex}
        />
      </div>
      <div className="w-3/4">
        <h2 className="font-bold text-lg mb-4">Board of Directors</h2>
        <ControlledCarouselComponent
          items={boardMembers}
          direction="horizontal"
          externalControlIndex={activeIndex === 2 ? activeIndex : null}
          showButtons={false}
        />
      </div>
    </div>
  );
};

export default AboutPage;
