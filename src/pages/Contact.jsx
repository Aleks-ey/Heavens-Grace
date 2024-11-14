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
        height: "h-screen px-10 py-32",
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
            display: "flex md:flex-row",
            height: "h-screen",
            width: "w-screen",
            padding: "pt-40 pb-10",
            center: "justify-center",
          },
        },
        children: [
          // contact form
          {
            type: "FormComponent",
            props: {
              style: {
                className: "w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
              },
              fields: fields,
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
