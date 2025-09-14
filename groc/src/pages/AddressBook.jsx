import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressBook = () => {
  const navigate = useNavigate();

  // Sample address list
  const [addresses] = useState([
    { id: 1, address: "123, ABC Street, XYZ City" },
    { id: 2, address: "456, DEF Avenue, LMN Town" },
    { id: 3, address: "789, GHI Road, OPQ City" }
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [totalAmount] = useState(500); // Example amount, you can set dynamically

  // Handle address selection
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  // Navigate to payment page with selected address and totalAmount
  const handleProceedToPayment = () => {
    if (!selectedAddress) {
      alert("Please select an address to proceed with payment");
      return;
    }
    navigate("/payment", { state: { selectedAddress, totalAmount } });
  };

  return (
    <div>
      <h1>Select Shipping Address</h1>
      <div>
        {addresses.map((address) => (
          <div key={address.id}>
            <input
              type="radio"
              id={address.id}
              name="address"
              value={address.address}
              onChange={() => handleSelectAddress(address.address)}
            />
            <label htmlFor={address.id}>{address.address}</label>
          </div>
        ))}
      </div>
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default AddressBook;
