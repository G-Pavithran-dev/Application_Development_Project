import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import BookRide from "./components/BookRide/BookRide";
import Homepage from "./components/Homepage/Homepage";
import SignInSide from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CreateRide from "./components/CreateRide/CreateRide";
import Navbar from "./components/NavBar/NavBar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Dummy from "./components/Dummy";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Homepage />
            </PageWrapper>
          }
        />
        <Route
          path="/createRide"
          element={
            <PageWrapper>
              <CreateRide />
            </PageWrapper>
          }
        />
        <Route
          path="/bookRide"
          element={
            <PageWrapper>
              <BookRide />
            </PageWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <PageWrapper>
              <SignUp />
            </PageWrapper>
          }
        />
        <Route
          path="/signin"
          element={
            <PageWrapper>
              <SignInSide />
            </PageWrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <PageWrapper>
              <ProfilePage />
            </PageWrapper>
          }
        />
        <Route
          path="/dummy"
          element={
            <PageWrapper>
              <Dummy />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

import PropTypes from "prop-types";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
