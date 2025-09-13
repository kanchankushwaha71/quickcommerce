import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import AboutUs from "./pages/AboutUs";
import ProductDetail from "./pages/ProductDetail";
import AddressBook from "./pages/AddressBook";
import PaymentPage from "./pages/PaymentPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage"; // Import the ProfilePage component

const App = () => (
  <Router>
    <MainApp />
  </Router>
);

const MainApp = () => {
  const location = useLocation();
  const showNavbar = !["/login", "/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen">
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="gradient-bg-welcome">
              <Welcome />
              <Services />
              <Transactions />
              <Footer />
            </div>
          }
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Profile Page route */}
        <Route path="/checkout" element={<AddressBook />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
