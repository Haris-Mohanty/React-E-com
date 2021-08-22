import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col" key={id}>
        <Link to={`/product/${id}`}>
          <div className="card h-100">
            <img src={image} class="card-img-top" alt={title} />
            <div className="card-body">
              <p className="card-title">{title}</p>
            </div>
            <div className="card-footer">
              <b className="card-subtitle mb-2 text-muted">$ {price}</b>
              <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
