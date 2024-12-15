import { useNavigate } from "react-router-dom";
const Card = ({ title, description, image, buttonText }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/book-now", { replace: true });
  };
  return (
    <div className="card text-center mt-4 max-w-sm overflow-hidden text-gray-800 p-4">
      {/* Uncomment if image is available */}
      <div className="flex justify-center">
        <img className="w-32 h-32 object-contain" src={image} alt={title} />
      </div>
      <div className="card-content text-center mt-4">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="card-description text-gray-600 text-base my-4">
          {description}
        </p>
        <button
          onClick={handleBookNow}
          className="bg-[#462670] text-white font-bold py-2 px-6 rounded-full mx-auto hover:bg-[#5b3a8f]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
