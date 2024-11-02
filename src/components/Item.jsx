import PropTypes from "prop-types";

const Item = ({ data, customStyle }) => {
  return (
    <div className={`p-4 ${customStyle?.className || ""}`}>
      {Object.entries(data).map(([key, value]) => {
        if (key === "imageUrl") {
          return (
            <img
              key={key}
              src={value}
              alt={data.alt || "Carousel Image"}
              className="w-full h-64 object-cover mb-4"
            />
          );
        } else if (key === "link") {
          // Example handling for links if there's a "link" prop
          return (
            <a
              key={key}
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-2 block"
            >
              {value}
            </a>
          );
        } else {
          // For any other type of data
          return (
            <p key={key} className="text-gray-700 mb-2">
              <strong>{key}:</strong> {value}
            </p>
          );
        }
      })}
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired, // Expects an object with any set of keys and values
  customStyle: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default Item;
