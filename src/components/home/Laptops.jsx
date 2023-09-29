import React from 'react';
import { laptopsdata, responsive2 } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./home.css";
import { Link } from 'react-router-dom';

export const Laptops = () => {
  const product = laptopsdata.map((item) => (

    <Link to="tvs" className='tv-link'><div className="laptop-cards" key={item.name}>
      <img className="lap-image" src={item.image} alt="product image" />
      <h2>{item.name}</h2>
      <p className="price">₹{item.price}</p>
    </div></Link>
  ));

  return (
    <>
      <div className='title3'>
        <h1 className='top'>TOP SELLING TV</h1>
        <span>VIEW ALL PRODUCTS</span>
      </div>
      <div className="lap-sell">
        <Carousel responsive={responsive2} infinite={true}>
          {product}
        </Carousel>
      </div>
    </>
  );
}
