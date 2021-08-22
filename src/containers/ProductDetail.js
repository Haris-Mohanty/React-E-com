import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err:", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="section">
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-5">
              <div class="text-center p-5">
                {" "}
                <img className="img-fluid" alt={title} src={image} />
              </div>
            </div>
            <div className="col-lg-7">
              <h1>{title}</h1>
              <hr />
              <h2>
                <a className="">${price}</a>
              </h2>
              <h6 className="alert alert-primary">
                <b>{category}</b>
              </h6>
              <p>{description}</p>
              <button type="button" className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
