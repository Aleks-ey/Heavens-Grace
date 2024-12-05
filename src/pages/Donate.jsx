import { AppBuilder, listLineCarousel } from "@aleks-ey/dynamic-app-builder";

const Donate = () => {
  const listItems = [
    { text: "Donate Now" },
    { text: "Become A Sponsor" },
    { text: "Crowdfunding Details" },
    { text: "Donation Transparency" },
  ];

  const carouselChildren = [
    // Carousel Item 1
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "flex flex-col px-3 py-32 text-center items-center justify-center mx-auto z-10",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Donate Today",
            tag: "h1",
            style: {
              className:
                "text-main text-5xl font-bold font-florisha text-center my-8",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Your donation, no matter the size, can help save a life.",
            tag: "p",
            style: {
              className: "text-center text-3xl font-montserrat",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Follow the link below to donate now.",
            tag: "p",
            style: {
              className: "text-center text-3xl font-montserrat",
            },
          },
        },
        {
          type: "ButtonComponent",
          props: {
            text: "Donate Now",
            isExternal: true,
            href: "https://example.com/donate",
            style: {
              backgroundColor: "bg-white md:bg-main border-main",
              hoverColors: "hover:bg-white hover:text-main hover:border-main",
              color: "text-main md:text-white",
              textAlign: "text-center",
              fontSize: "text-lg",
              font: "font-montserrat",
              padding: "px-4 py-2",
              margin: "my-8",
              border: "rounded-full",
            },
          },
        },
      ],
    },
    // Carousel Item 2
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative flex flex-col justify-center items-center bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "BECOME A SPONSOR",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Becoming a sponsor with Heaven's Grace is more than just a commitment; it’s a chance to transform lives. Sponsors play a crucial role in helping us provide consistent and reliable support to children in need. Your sponsorship ensures that vital medical care, life-saving treatments, and preventive healthcare reach the most vulnerable communities. Sponsors also receive regular updates about the impact of their contributions, including stories of the children whose lives they’ve touched. Together, we can bring hope and health to children who deserve nothing less than a bright future.",
            tag: "p",
            style: {
              className:
                "p-10 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
      ],
    },
    // Carousel Item 3
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative flex flex-col justify-center items-center bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "CROWDFUNDING DETAILS",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "At Heaven's Grace, we believe in the power of collective generosity. Through our crowdfunding initiatives, we unite people from all walks of life to support specific medical cases, health campaigns, or infrastructure projects such as building pediatric clinics. Each campaign is carefully vetted to ensure every dollar is directed toward creating a tangible impact. Contributors can follow the journey of their chosen campaign and see the difference their donations make in real time. Whether it’s helping a child receive life-saving surgery or funding a community health program, every contribution brings us closer to a healthier tomorrow.",
            tag: "p",
            style: {
              className:
                "p-10 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
      ],
    },
    // Carousel Item 4
    {
      type: "ElementComponent",
      props: {
        style: {
          className:
            "relative flex flex-col justify-center items-center bg-base-light rounded-lg shadow-lg m-8",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "DONATION TRANSPARENCY",
            style: {
              className:
                "absolute left-0 -top-16 text-3xl font-florisha font-bold text-main text-center m-4",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "We understand the importance of trust when it comes to charitable giving. At Heaven's Grace, transparency is one of our core values. We provide detailed reports on how every donation is allocated, ensuring that your generosity is used effectively and responsibly. Our annual impact reports, project updates, and real-time donation trackers offer clear insights into the work your support enables. By maintaining this level of openness, we strive to strengthen the bond between our organization and our supporters, ensuring you feel confident that your contributions are making a real difference in children’s lives.",
            tag: "p",
            style: {
              className:
                "p-10 text-left text-2xl font-montserrat font-bold text-black",
            },
          },
        },
      ],
    },
  ];

  const overideStyles = {
    container: "items-center",
    listContainer: "w-1/5",
    listHeader: "font-florisha font-bold text-3xl text-black",
    carousel: "w-4/5",
    line: "border h-3/4 border-gray-500",
  };

  const listLineCarouselConfig = listLineCarousel({
    listItems,
    listTitle: "Donate",
    carouselChildren,
    style: overideStyles,
  });

  // -------------------- MOBILE PAGE CONFIG --------------------
  const donatePageMobileConfig = [
    {
      type: "ElementComponent",
      props: {
        tag: "div",
        style: {
          className:
            "flex flex-col h-screen px-3 py-32 text-center items-center justify-center mx-auto z-10",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Donate Today",
            tag: "h1",
            style: {
              className:
                "text-main text-5xl font-bold font-florisha text-center my-8",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Your donation, no matter the size, can help save a life.",
            tag: "p",
            style: {
              className: "text-center text-3xl font-montserrat",
            },
          },
        },
        {
          type: "TextComponent",
          props: {
            text: "Follow the link below to donate now.",
            tag: "p",
            style: {
              className: "text-center text-3xl font-montserrat",
            },
          },
        },
        {
          type: "ButtonComponent",
          props: {
            text: "Donate Now",
            isExternal: true,
            href: "https://example.com/donate",
            style: {
              backgroundColor: "bg-white md:bg-main border-main",
              hoverColors: "hover:bg-white hover:text-main hover:border-main",
              color: "text-main md:text-white",
              textAlign: "text-center",
              fontSize: "text-lg",
              font: "font-montserrat",
              padding: "px-4 py-2",
              margin: "my-8",
              border: "rounded-full",
            },
          },
        },
      ],
    },
    // Become a Sponsor
    {
      type: "ElementComponent",
      props: {
        style: {
          className: "py-12",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Become A Sponsor",
            style: {
              className:
                "text-4xl font-florisha font-bold text-main text-left my-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "relative flex flex-col justify-center items-left",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "Becoming a sponsor with Heaven's Grace is more than just a commitment; it’s a chance to transform lives. Sponsors play a crucial role in helping us provide consistent and reliable support to children in need. Your sponsorship ensures that vital medical care, life-saving treatments, and preventive healthcare reach the most vulnerable communities. Sponsors also receive regular updates about the impact of their contributions, including stories of the children whose lives they’ve touched. Together, we can bring hope and health to children who deserve nothing less than a bright future.",
                tag: "p",
                style: {
                  className:
                    "py-4 text-left text-xl font-montserrat font-bold text-accent",
                },
              },
            },
          ],
        },
      ],
    },
    // Crowdfunding Details
    {
      type: "ElementComponent",
      props: {
        style: {
          className: "py-12",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Crowdfunding Details",
            style: {
              className:
                "text-4xl font-florisha font-bold text-main text-right my-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "relative flex flex-col justify-center items-left",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "At Heaven's Grace, we believe in the power of collective generosity. Through our crowdfunding initiatives, we unite people from all walks of life to support specific medical cases, health campaigns, or infrastructure projects such as building pediatric clinics. Each campaign is carefully vetted to ensure every dollar is directed toward creating a tangible impact. Contributors can follow the journey of their chosen campaign and see the difference their donations make in real time. Whether it’s helping a child receive life-saving surgery or funding a community health program, every contribution brings us closer to a healthier tomorrow.",
                tag: "p",
                style: {
                  className:
                    "py-4 text-right text-xl font-montserrat font-bold text-accent",
                },
              },
            },
          ],
        },
      ],
    },
    // Donation Transparency
    {
      type: "ElementComponent",
      props: {
        style: {
          className: "py-12",
        },
      },
      children: [
        {
          type: "TextComponent",
          props: {
            text: "Donation Transparency",
            style: {
              className:
                "text-4xl font-florisha font-bold text-main text-left my-4",
            },
          },
        },
        {
          type: "ElementComponent",
          props: {
            style: {
              className: "relative flex flex-col justify-center items-left",
            },
          },
          children: [
            {
              type: "TextComponent",
              props: {
                text: "We understand the importance of trust when it comes to charitable giving. At Heaven's Grace, transparency is one of our core values. We provide detailed reports on how every donation is allocated, ensuring that your generosity is used effectively and responsibly. Our annual impact reports, project updates, and real-time donation trackers offer clear insights into the work your support enables. By maintaining this level of openness, we strive to strengthen the bond between our organization and our supporters, ensuring you feel confident that your contributions are making a real difference in children’s lives.",
                tag: "p",
                style: {
                  className:
                    "py-4 text-left text-xl font-montserrat font-bold text-accent",
                },
              },
            },
          ],
        },
      ],
    },
  ];

  const donatePageConfig = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        display: "flex",
        height: "min-h-screen",
      },
    },
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
      // Donate page for desktop
      {
        type: "ElementComponent",
        props: {
          style: {
            display: "hidden md:flex flex-row",
            width: "w-full",
            padding: "px-10 py-32",
            center: "items-center justify-center",
          },
        },
        children: [listLineCarouselConfig],
      },
      // Donate page for mobile
      {
        type: "ElementComponent",
        props: {
          tag: "div",
          style: {
            display: "flex md:hidden flex-col",
            height: "minh-screen px-4 bg-base-light",
            spacing: "justify-center items-center",
          },
        },
        children: donatePageMobileConfig,
      },
    ],
  };

  return <AppBuilder config={donatePageConfig} />;
};

export default Donate;
