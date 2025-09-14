import { useState } from "react";

const ProductListWithModal = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Organic Spices",
      price: 199,
      description: "A premium collection of organic spices for your kitchen.",
      image: "/images/spices.jpg",
    },
    {
      id: 2,
      name: "Fresh Groceries",
      price: 299,
      description: "Daily fresh groceries delivered to your doorstep.",
      image: "/images/groceries.jpg",
    },
    {
      id: 3,
      name: "Juices",
      price: 99,
      description: "Natural and fresh fruit juices packed with nutrients.",
      image: "/images/juices.jpg",
    },
  ];

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      <h1 className="text-center text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-700">₹{product.price}</p>
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-40 w-full object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
            <p className="text-gray-900 font-bold mt-4">
              Price: ₹{selectedProduct.price}
            </p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListWithModal;
