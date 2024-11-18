import AppBuilder from "../components/dynamic/AppBuilder";

const Contact = () => {
  const supabaseConfig = {
    table: "contacts",
  };

  const fields = [
    {
      name: "name",
      label: "Name",
      tag: "input",
      props: { type: "text", required: true },
    },
    {
      name: "email",
      label: "Email",
      tag: "input",
      props: { type: "text", required: true },
    },
    {
      name: "message",
      label: "Message",
      tag: "textarea",
      props: { required: true },
    },
  ];

  const contactPageConfig = {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        display: "flex flex-row",
        height: "h-screen md:px-10 md:py-32",
        spacing: "justify-center items-center",
      },
    },
    children: [
      // background image
      {
        type: "ImageComponent",
        props: {
          // src: "src/assets/images/background1.jpg",
          bucketId: "backgrounds",
          supabaseId: "background1.jpg",
          style: {
            className: "absolute w-full h-full object-cover object-center",
            opacity: "opacity-50",
            reverse: "-scale-x-100",
            zIndex: "-z-10",
          },
        },
      },
      // rest of contact page content
      {
        type: "ElementComponent",
        props: {
          style: {
            display: "flex flex-col",
            height: "h-screen",
            width: "w-screen",
            padding: "",
            center: "justify-center items-center",
          },
        },
        children: [
          // contact header
          {
            type: "ElementComponent",
            props: {
              style: {
                width: "w-full md:w-1/2",
                padding: "p-3 pb-8 md:p-10",
                center: "justify-center items-center",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  text: "Contact Us",
                  tag: "h1",
                  style: {
                    className:
                      "text-5xl text-main font-bold font-florisha text-center md:my-8",
                  },
                },
              },
              {
                type: "TextComponent",
                props: {
                  text: "We'd love to hear from you.",
                  tag: "p",
                  style: {
                    className: "text-center text-3xl font-montserrat",
                  },
                },
              },
            ],
          },
          // contact form
          {
            type: "FormComponent",
            props: {
              style: {
                width: "w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                padding: "p-3 md:p-10",
                center: "justify-center items-center",
              },
              fields: fields,
              buttonProps: {
                type: "submit",
                text: "Send Message",
                style: {
                  backgroundColor: "bg-white md:bg-main border-main",
                  hoverColors:
                    "hover:bg-white hover:text-main hover:border-main",
                  color: "text-main md:text-white",
                  textAlign: "text-center",
                  fontSize: "text-lg",
                  font: "font-montserrat",
                  padding: "px-4 py-2",
                  border: "rounded-full",
                },
              },
              supabaseConfig: supabaseConfig,
            },
          },
        ],
      },
    ],
  };

  return <AppBuilder config={contactPageConfig} />;
};

export default Contact;
