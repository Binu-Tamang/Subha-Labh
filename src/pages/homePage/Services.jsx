// eslint-disable-next-line no-unused-vars
import React from "react";
import { PanditImg, VastuDetectionImg, VenueBookingImg } from "../../assets/index";
import Card from "../../components/CardCompo/Card";

const Services = () => {
  return (
    <div className="container">
    <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Card
        title="Pandit Booking"
        description="AstroTalk is an online platform offering astrology consultations via chat or call, including horoscopes, tarot, and birth chart analysis for guidance on love, career, and more."
        image={PanditImg}
        buttonText="Book Now"
      />
      <Card
        title="Vastu Detection"
        description="Vastu Detection is a process of analyzing a space's alignment with Vastu Shastra principles to enhance harmony and positive energy. It identifies structural imbalances and provides remedies for better health, prosperity, and well-being."
        image={VastuDetectionImg}
        buttonText="Enquire Now"
      />
      <Card
        title="Venue Booking"
        description="Venue Booking is the process of reserving a location for events like weddings, parties, or conferences. It ensures the chosen space meets requirements for capacity, amenities, and budget."
        image={VenueBookingImg}
        buttonText="Book Now"
      />
    </div>
  </div>
  );
};

export default Services;
