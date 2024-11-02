EXAMPLE:
const boardMembers = [
    {
      containerStyle: { className: "max-w-sm" },
      topContainer: {
        style: { className: "bg-gray-100 rounded-t-lg" },
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "/path/to/image1.jpg",
              alt: "Laura Badasyan",
              style: { className: "w-full rounded-lg" },
            },
          },
        ],
      },
      bottomContainer: {
        style: { className: "text-center" },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Laura Badasyan",
              style: { className: "font-bold text-lg" },
            },
          },
          {
            type: "TextComponent",
            props: {
              text: "My name is Laura Badasyan and having Armenian roots, I was born and raised in the Republic of Georgia...",
              style: { className: "text-gray-600 text-sm mt-2" },
            },
          },
        ],
      },
    },
    {
      containerStyle: { className: "max-w-sm" },
      topContainer: {
        style: { className: "bg-gray-100 rounded-t-lg" },
        children: [
          {
            type: "ImageComponent",
            props: {
              src: "/path/to/image2.jpg",
              alt: "Arsen Ghasabyan",
              style: { className: "w-full rounded-lg" },
            },
          },
        ],
      },
      bottomContainer: {
        style: { className: "text-center" },
        children: [
          {
            type: "TextComponent",
            props: {
              text: "Arsen Ghasabyan",
              style: { className: "font-bold text-lg" },
            },
          },
          {
            type: "TextComponent",
            props: {
              text: "Arsen Ghasabyan brings over 15 years of experience in clinical trial management...",
              style: { className: "text-gray-600 text-sm mt-2" },
            },
          },
        ],
      },
    },
  ];