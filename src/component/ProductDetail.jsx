import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProductDetail(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {productDetail.category}
          </h4>
          <h1 className="display-5">{productDetail.title}</h1>
          <p className="lead fw-bolder">
            Rating {productDetail.rating && productDetail.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">{productDetail.price}</h3>
          <p className="lead">{productDetail.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(productDetail)}>
            Add to cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 mx-3 py-2">
            Go to cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default ProductDetail;
