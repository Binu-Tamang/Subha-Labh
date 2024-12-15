import PropTypes from "prop-types";

const TestimonialCard = ({ title, description, name }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 className="fw-bold text-white" style={{ margin: "10px 0" }}>{title}</h1>
      <p className="text-white">{description}</p>
      <strong className="text-white">{name}</strong>
    </div>
  );
};

TestimonialCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimonialCard;
