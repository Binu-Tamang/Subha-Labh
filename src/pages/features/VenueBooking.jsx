import { HospitalityImg } from "../../assets/index.js";

import VenueCard from "../../components/CardCompo/VenueCard.jsx";

const VenueBooking = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
        <div className="col-span-1">
          <VenueCard
            image={HospitalityImg}
            name="Maxims Banquet & Events"
            location="Kupandole Heights, Lalitpur"
            price={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default VenueBooking;
