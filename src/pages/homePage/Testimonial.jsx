import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import styles
import TestimonialCard from "../../components/testimonial/testimonial.jsx"; // Capitalize the component name
import "./Testimonial.module.css";
import {testimonialBgIcon} from "../../assets/index.js";

const Testimonial = () => {
  return (
    <div className="">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="w-full " 
        style={{
          backgroundImage: `url(${testimonialBgIcon})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
  
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        autoPlay
      >
        <TestimonialCard
          description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
          title="w3js.com - Web Front-End Studio"
          name={"John Doe"}
        />
        <TestimonialCard
          description="Improving UI responsiveness for mobile devices."
          title="React Developer Tips"
          name={"Jane Smith"}
        />
        <TestimonialCard
          description="Improving UI responsiveness for mobile devices."
          title="React Developer Tips"
          name={"Binu Tamang"}
        />
        {/* Add more TestimonialCard items here */}
      </Carousel>
    </div>
  );
};

export default Testimonial;
