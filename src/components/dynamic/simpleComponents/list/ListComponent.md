EXAMPLE:
const listItems = [
    "Mission Statement",
    "Our Approach",
    "Board of Directors",
    "Why Georgia and Armenia?",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Define the list items
  const listItems = [
    "Mission Statement",
    "Our Approach",
    "Board of Directors",
    "Why Georgia and Armenia?",
  ];

  // Define styles as constants
  const listStyle = { className: "my-4" }; // Margin for the entire list
  const itemStyle = { className: "text-gray-600 hover:text-gray-800" }; // Styling for each item
  const activeItemStyle = { className: "text-blue-600 font-semibold underline decoration-wavy" }; // Active item style

  // Define all props for ListComponent as an object
  const listProps = {
    items: listItems,
    activeIndex: activeIndex,
    onItemClick: (index) => setActiveIndex(index), // Update index on click
    underlineActive: true, // Whether the active item should be underlined
    style: listStyle, // Overall list styling
    itemStyle: itemStyle, // Styling for each list item
    activeItemStyle: activeItemStyle, // Styling for the active item
  };