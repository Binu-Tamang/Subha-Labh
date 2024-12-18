import PropTypes from "prop-types";

const VenueCard = ({ image, name, location, price }) => {
    return (
      <div className="max-w-xs rounded-lg border border-gray-200 shadow-md overflow-hidden transition-transform duration-200 transform hover:scale-105">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mt-2">{location}</p>
          <p className="text-md font-medium text-gray-700 mt-2">
            Starting Price: Rs {price}
          </p>
          <button className="mt-4 w-full bg-purpleCustom text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200">
            Book Now
          </button>
        </div>
      </div>
    );
  };
  
  VenueCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  export default VenueCard;