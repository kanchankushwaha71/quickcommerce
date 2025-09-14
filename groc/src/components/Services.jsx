import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(new Set());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "India Gate Pure Basmati Rice (1KG)",
      price: 143,
      originalPrice: 166,
      image: "/images/grocery1.png",
      description:
        "Premium quality basmati rice known for its long grains and aromatic flavor. Perfect for biryanis and pulao.",
    },
    {
      id: 2,
      name: "Premium Dry Fruits (200g)",
      price: 234,
      originalPrice: 299,
      image: "/images/delivery.png",
      description:
        "A healthy mix of premium quality dry fruits including almonds, cashews, and raisins.",
    },
    {
      id: 3,
      name: "Paneer Pops",
      price: 234,
      originalPrice: 299,
      image: "path_to_paneer_pops_image",
      description:
        "Crispy paneer bites that are perfect for snacks or parties. Loved by all age groups.",
    },
    {
      id: 1,
      name: "India Gate Pure Basmati Rice (1KG)",
      price: 143,
      originalPrice: 166,
      image: "/images/grocery1.png",
      description:
        "Premium quality basmati rice known for its long grains and aromatic flavor. Perfect for biryanis and pulao.",
    },
    {
      id: 2,
      name: "Premium Dry Fruits (200g)",
      price: 234,
      originalPrice: 299,
      image: "/images/delivery.png",
      description:
        "A healthy mix of premium quality dry fruits including almonds, cashews, and raisins.",
    },
    {
      id: 3,
      name: "Paneer Pops",
      price: 234,
      originalPrice: 299,
      image: "path_to_paneer_pops_image",
      description:
        "Crispy paneer bites that are perfect for snacks or parties. Loved by all age groups.",
    },
    {
      id: 4,
      name: "Lays",
      price: 234,
      originalPrice: 299,
      image: "path_to_lays_image",
      description: "Crunchy potato chips with a classic salted flavor.",
    },
    {
      id: 5,
      name: "Cadbury Dairy Milk",
      price: 234,
      originalPrice: 299,
      image: "path_to_cadbury_image",
      description:
        "Creamy and delicious chocolate that melts in your mouth. A treat for all chocolate lovers.",
    },
    {
      id: 6,
      name: "Himalaya Face Wash",
      price: 234,
      originalPrice: 299,
      image: "path_to_himalaya_image",
      description:
        "Gentle and effective face wash enriched with natural ingredients. Keeps your skin clean and refreshed.",
    },
    {
      id: 7,
      name: "Milk Packet",
      price: 234,
      originalPrice: 299,
      image: "path_to_milk_image",
      description:
        "Fresh and pure milk ideal for daily consumption. Packed with essential nutrients.",
    },
    {
      id: 8,
      name: "Tropicana Juice",
      price: 234,
      originalPrice: 299,
      image: "path_to_tropicana_image",
      description:
        "Delicious and refreshing fruit juice made from 100% natural ingredients.",
    },
  ];

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setAddedToCart((prev) => new Set(prev).add(product.id));
  };

  const handleRemoveFromCart = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container">
      <div className="cart-button-container">
        <button onClick={toggleCart} className="cart-button">
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </div>

      <h1 className="title">Popular Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div
              className="product-image"
              onClick={() => openProductDetails(product)}
            >
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price-container">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
                disabled={addedToCart.has(product.id)}
              >
                {addedToCart.has(product.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-modal">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p>Price: ₹{item.price}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-total">
            <h3>Total: ₹{calculateTotal()}</h3>
          </div>
          <div className="cart-actions">
            <button onClick={toggleCart} className="close-cart-btn">
              Close Cart
            </button>
            <button
              className="checkout-btn"
              onClick={() =>
                navigate("/payment", { state: { totalAmount: calculateTotal() } })
              }
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeProductDetails}>
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-image"
            />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <div className="price-container">
              <span className="current-price">₹{selectedProduct.price}</span>
              <span className="original-price">₹{selectedProduct.originalPrice}</span>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(selectedProduct)}
              disabled={addedToCart.has(selectedProduct.id)}
            >
              {addedToCart.has(selectedProduct.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
