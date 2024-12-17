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
      {/* <Route path="/order-now" element={<OrderNow />} /> */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default App;
