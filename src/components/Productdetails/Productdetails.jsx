import React from "react";
import { useState, useEffect } from "react";
import { phonedata } from "../../database/Data";
import { useParams } from "react-router-dom";
import cart from "./cart.png";
import shop from "./bag.png";
import send from "./search-file.png";
import "./pdts.css";
import delivary from "./cargo-truck.png";
import days from "./calendar.png";
import store from "./store.png";

export const Productdetails = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState();
  const [photo,setphoto] = useState("");


  useEffect(() => {
    const data = phonedata.filter((item) => {
      return item.id == productId;
    });
    setproduct(data[0]);
  }, [productId]);

  if (!product) {
    return null;
  }

  const {
    image,
    image2,
    name,
    image3,
    image4,
    desc,
    price,
    offer,
    brand,
    ram,
    storage,
    color
  } = product;

  return (
    <>
      <div className="product-name">
        <h1>{name}</h1>
      </div>
      <div className="product-details">
        <div className="product-details-1">
          <div className="product-images">
            <div className="views">
              <div className="view-1" onClick={()=> setphoto(image2)}>
                <img src={image2} alt="" />
              </div>
              <div className="view-1" onClick={()=> setphoto(image3)}>
                <img src={image3} alt="" />
              </div>
              <div className="view-1" onClick={()=> setphoto(image4)}>
                <img src={image4} alt="" />
              </div>
            </div>
            <div className="single">
              <img src={photo || image} alt="" />
            </div>
          </div>
          <div className="buttons">
            <div className="cart">
              <img src={cart} alt="" />
              <span>Add to cart</span>
            </div>
            <div className="buy">
              <img src={shop} alt="" />
              <span>Buy now</span>
            </div>
            <div className="send">
              <img src={send} alt="" />
              <span>Send enquiry</span>
            </div>
          </div>
        </div>
        <div className="product-details-2">
          <h1 className="description">{desc}</h1>
          <div className="ram">
            <div className="ram1">
                <span>{ram}</span>

            </div>
            <div className="ram1">
                <span>{storage}</span>

            </div>
            <div className="ram2">
                <span>{color}</span>
            </div>
          </div>
          <div className="price-details">
            <div className="offer1">
              <h1 className="offer1-text">8 % OFF</h1>
            </div>
            <div className="rate">
              <h1>₹{price}</h1>
              <span className="save">You save ₹5000</span>
              <h2>₹{offer}</h2>
              <span className="mrp">MRP(inclusive of all taxes)</span>
            </div>
            <div className="delivary">
              <div className="delivary-1">
                <img src={delivary} alt="" />
                <span>Standard Delivary</span>
              </div>
              <div className="delivary-2">
                <img src={store} alt="" />
                <span>Store Pickup</span>
              </div>
              <div className="delivary-3">
                <img src={days} alt="" />
                <span>7 Days delivary</span>
              </div>
            </div>
          </div>
          <span className="location-span">Check out our special in-store deals at your nearest location.</span>
        </div>
      </div>
    </>
  );
};
