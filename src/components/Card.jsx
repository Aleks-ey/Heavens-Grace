import PropTypes from "prop-types";

const Card = ({ item, onClick }) => (
  <div
    className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
    onClick={() => onClick(item)}
  >
    {item.imageUrl && (
      <img
        src={item.imageUrl}
        alt={`${item.name ? item.name : "Card"}'s image`}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-4 text-lg font-montserrat">
      {/* Name & Age */}
      <div className="flex flex-row text-accent text-3xl font-bold">
        {item.name && <h2 className="">{item.name}</h2>}
        {item.age && <p className="">, {item.age}</p>}
      </div>
      {item.position && (
        <p className="text-main text-2xl font-medium">{item.position}</p>
      )}
      {item.location && <p className="text-base-dark">{item.location}</p>}
      {item.date && <p className="text-main text-sm">Date: {item.date}</p>}
      <hr className=" py-1 md:py-2" />

      {item.description && <p className="text-base-dark">{item.description}</p>}
      {/* extra details, most likely will not be used */}
      {item.time && <p className="text-base-dark text-sm">Time: {item.time}</p>}
      {item.otherDetails && (
        <p className="text-base-dark">{item.otherDetails}</p>
      )}
    </div>
  </div>
);

Card.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    position: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    otherDetails: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
