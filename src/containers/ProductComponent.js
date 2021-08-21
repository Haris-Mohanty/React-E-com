import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col" key={id}>
        <div className="card h-100">
          <img src={image} class="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">$ {price}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{category}</h6>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
