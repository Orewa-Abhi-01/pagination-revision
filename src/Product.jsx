const Product = ({ image, title, brand, category, price, rating }) => {
  return (
    <div className="product-container">
      <img src={image} alt="" className="product-img" />
      <div className="category-brand">
        <h4>Category:{category}</h4>
        <h4>Brand:{brand}</h4>
      </div>
      <h3 className="product-title">{title}</h3>
      <div className="pric-rating-sec">
        <h3>${price}</h3>
        <h4>Rating:{rating}</h4>
      </div>
    </div>
  );
};

export default Product;
