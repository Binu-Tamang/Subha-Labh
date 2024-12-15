// eslint-disable-next-line no-unused-vars
import React from "react";
import { PannaImg, PushparajImg, RudrakshImg } from "../../assets/index";
import Card from "../../components/CardCompo/Card";

const Services = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-bold text-center mb-8">Best Sellers</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card
          title="Panna"
          description="Panna, or Emerald, is a precious green gemstone associated with wisdom, creativity, and prosperity. Ruled by Mercury in astrology, it is believed to enhance communication skills, intellect, and emotional balance."
          image={PannaImg}
          buttonText="Order Now"
        />
        <Card
          title="Pushparaj"
          description="Pushparaj, also known as Yellow Topaz, is a gemstone associated with Jupiter in astrology. It symbolizes wealth, wisdom, and success, promoting mental clarity, confidence, and positive energy."
          image={PushparajImg}
          buttonText="Order Now"
        />
        <Card
          title="Rudrakash"
          description="Rudraksha is a sacred seed traditionally used in Hinduism for meditation and prayer. It is believed to have spiritual and healing properties, offering benefits such as mental peace, stress relief, and improved focus. Rudraksha is also considered to enhance the wearer’s connection to divine energies."
          image={RudrakshImg}
          buttonText="Order Now"
        />
      </div>
    </div>
  );
};

export default Services;
