import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Payment = () => {
  const location = useLocation();
  const { totalAmount } = location.state || {};
  const [selectedAddress, setSelectedAddress] = useState("");
  const [manualAddress, setManualAddress] = useState("");
  const [showMap, setShowMap] = useState(false);

  const OPEN_CAGE_API_KEY = "4ce32dab67d7401ab2a7b90e9da8462c"; // Replace with your OpenCage API Key

  const initializeMap = () => {
    const map = L.map("map-container").setView([12.9716, 77.5946], 12); // Default to Bangalore, India

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    const marker = L.marker([12.9716, 77.5946], { draggable: true }).addTo(map);

    marker.on("dragend", () => {
      const { lat, lng } = marker.getLatLng();

      fetch(
         `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${OPEN_CAGE_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const address =
            data.results[0]?.formatted || "Could not fetch address";
          setSelectedAddress(address);
        })
        .catch((error) => console.error("Error fetching address:", error));
    });
  };

  const handlePayment = () => {
    const address = manualAddress || selectedAddress;

    if (!address) {
      alert("Please select or enter an address before proceeding to payment.");
      return;
    }

    if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) {
      alert("Invalid amount for payment");
      return;
    }

    const options = {
      key: "rzp_test_XpcnRUirOO8j6U",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Your Company",
      description: "Payment for Product",
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#F37254",
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  useEffect(() => {
    if (showMap) {
      initializeMap();
    }
  }, [showMap]);

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-info">
        <h3>Total Amount: ₹{totalAmount}</h3>
        <p>
          <strong>Shipping Address:</strong>{" "}
          {manualAddress || selectedAddress || "Please select an address"}
        </p>
        <div>
          <button onClick={() => setShowMap(!showMap)}>
            {showMap ? "Close Map" : "Select Address on Map"}
          </button>
          {showMap && <div id="map-container" style={{ height: "400px" }} />}
        </div>
        <div>
          <h4>Or Enter Address Manually:</h4>
          <input
            type="text"
            value={manualAddress}
            onChange={(e) => setManualAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
      </div>
      <button className="pay-now-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;