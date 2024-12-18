import { Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Main from "./pages/main/index";
import Login from "./pages/login/index";
import Booknow from "./pages/booknow/index";
import SignUp from "./pages/signup/index";
import NoMatch from "./components/NoMatchPage/nomatch";
import EnquireNow from "./pages/enquirenow/index";
import Dashboard from "./pages/dashboard/index";
import OrderNow from "./pages/ordernow/index";
import ProfileBox from "./pages/profile/index";
import PresoanlRecommendation from "./pages/booknow/PersonalReco";
import VenueBooking from "./pages/booknow/VenueBooking";
import BookPaditBookingCard from "./pages/booknow/PanditBookingPage";
import BookaPandit from "./pages/forms/bookapandit";
import PersonalRecommendationForm from "./pages/forms/personal-recommendation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* this for another routes */}
      <Route path="/book-now" element={<Booknow />} />
      <Route path="/order-now" element={<OrderNow />} />
      <Route path="/enquire-now" element={<EnquireNow />} />
      <Route path="/profile" element={<ProfileBox />} />
      <Route path="/personal-recommendation" element={<PresoanlRecommendation />} />
      <Route path="/venue-booking" element={<VenueBooking />} />
      <Route path="/book-pandit-page" element={<BookPaditBookingCard />} />
      <Route path="/book-a-pandit" element={<BookaPandit />} />
      <Route path="/personal-recommendation-form" element={<PersonalRecommendationForm />} />
      {/* <Route path="/order-now" element={<OrderNow />} /> */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default App;
