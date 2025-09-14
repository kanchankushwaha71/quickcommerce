import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-green-500 p-2 text-white">
      {/* Top Navbar */}
      <div className="navbar-top flex flex-wrap justify-between items-center text-sm px-4 py-2">
        {/* Links */}
        <div className="links flex flex-wrap space-x-4">
          <Link to="/AboutUs" className="nav-link">
            About Us
          </Link>
          <Link to="/profile" className="nav-link"> {/* Changed from /MyAccount to /profile */}
            My Account
          </Link>
          <Link to="/Wishlist" className="nav-link">
            Wishlist
          </Link>
          <Link to="/OrderTracking" className="nav-link">
            Order Tracking
          </Link>
        </div>

        {/* Free Delivery Promo */}
        <div className="free-delivery text-center font-semibold hidden sm:block">
          <span>Get FREE DELIVERY: Use Code </span>
          <span className="bg-white text-green-600 px-2 py-1 rounded-md font-bold">
            FREEDELLCOMM
          </span>
        </div>

        {/* Contact Info */}
        <div className="contact text-center sm:text-right">
          Need Help? Call Us at{" "}
          <span className="font-semibold underline">+91-9358440540</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="logo font-bold text-2xl text-white">
          E COMM <span className="text-gray-200 text-lg">Shop Online</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar flex items-center">
          <input
            type="text"
            placeholder="Type to Search anything"
            className="border border-gray-300 p-2 rounded-l-md"
          />
          <button className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 transition">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="icons space-x-4 flex items-center">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link"> {/* Changed to /signup */}
            Sign-Up
          </Link>
          <Link to="/TrackOrder" className="nav-link">
            Track Order
          </Link>
          <Link to="/Support" className="nav-link">
            Support
          </Link>
          <Link to="/Cart" className="nav-link">
            Cart
          </Link>
        </div>
      </div>

      {/* Categories Navbar */}
      <div className="navbar-categories bg-white p-3 flex justify-center space-x-8 text-lg font-semibold text-gray-700">
        <a href="#" className="hover:text-green-600">
          Trending Offers
        </a>
        <a href="#" className="hover:text-green-600">
          Spices
        </a>
        <a href="#" className="hover:text-green-600">
          Groceries
        </a>
        <a href="#" className="hover:text-green-600">
          Vegetables
        </a>
        <a href="#" className="hover:text-green-600">
          Juices
        </a>
        <a href="#" className="hover:text-green-600">
          Dry Fruits
        </a>
        <a href="#" className="hover:text-green-600">
          Dairy
        </a>
        <a href="#" className="hover:text-green-600">
          Cosmetics
        </a>
      </div>
    </div>
  );
};

export default Navbar;
