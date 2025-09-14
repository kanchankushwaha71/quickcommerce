import { useParams, useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.product; // Product data passed from Services page

  if (!product) {
    return <div>Product not found for ID: {productId}</div>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail-page">
      <div className="detail-content">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <h2>{product.name}</h2>
          <div className="detail-category">{product.category}</div>
          <div className="detail-prices">
            <span className="detail-current-price">₹{product.price}</span>
            <span className="detail-original-price">₹{product.originalPrice}</span>
          </div>
          <p className="detail-description">{product.description}</p>

          <div className="detail-section">
            <h3>Key Features</h3>
            <ul className="feature-list">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {product.nutritionInfo && (
            <div className="detail-section">
              <h3>Nutrition Information</h3>
              <div className="nutrition-info">
                {Object.entries(product.nutritionInfo).map(([key, value]) => (
                  <div key={key} className="nutrition-item">
                    <span className="nutrition-key">{key}:</span>
                    <span className="nutrition-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
