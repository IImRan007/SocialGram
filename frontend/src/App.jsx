import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layout
import Navbar from "./layout/Navbar";
// Component
import PrivateRoute from "./components/PrivateRoute";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Context
import { UserProvider } from "./context/user/UserContext";
// Toast
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
      <Toaster />
    </UserProvider>
  );
};
export default App;
