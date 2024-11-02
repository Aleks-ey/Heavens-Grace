This element component is made to dynamically create any element by just passing props. The component can have children, meaning element can nest elements.

This is what the prop structure looks like:
Element.propTypes = {
  element: PropTypes.shape({
    tag: PropTypes.string, // The HTML tag to use for the element (e.g., "h2", "img", "div", etc.)
    style: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
  children: PropTypes.node,
};

element:
  The main prop is "element" this will contain the elements "tag", "style", and other props.

  tag:
    The "tag" prop within element specifies which tag the element will use. For example "h2", "img", "div", etc.
  style: 
    The "style" prop within element is an object that contains the style of the element. I like to use tailwind
    classes for this. For example: { font: "font-florisha font-bold", fontSize: "text-lg", color: "text-white", }
  props:
    The "props" prop within element is an object that contains any other props that the element will 
    have. For example, "id", "src", "alt", etc.

children:
  The "children" prop is used to nest elements within the element. This can be any valid React element.


EXAMPLE WITH PROPS SET AS CONST VALUES:
  const element = {
    tag: "div",
    style: { //using tailwind classes (normal css can be use as well)
      backGround: "bg-red-400",
      height: "h-96",
      width: "w-96",
      position: "relative",
    },
    props: {
      onClick: () => console.log("Element clicked!"),
    },
  };

  element2 = {
    tag: "h1",
    style: {
      text: "text-4xl",
      font: "font-bold",
      fontName: "font-florisha",
      position: "absolute",
      top: "top-8",
    },
  };

  return (
    <div>
      <Element element={element} />
        <Element element={element2}>
          Hello
        </Element>
      </Element>
    </div>
  );

EXAMPLE WITH PROPS CALLED DIRECTLY IN ELEMENT COMPONENT:
  return(
    <Element
      element={{
        tag: "div",
        style: {
          backGround: "bg-red-400",
          height: "h-96",
          width: "w-96",
          position: "relative",
        },
        props: {
          onClick: () => console.log("Element clicked!"),
        },
      }}
    >
      Children (Component, Text, etc.)
    </Element>
  );