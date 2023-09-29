import React from 'react';
import { MobileData, responsive } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./home.css";
import { Link } from 'react-router-dom';

export const Mobiles = () => {
  const product = MobileData.map((item) => (
    <Link to='phones' className='card-link'><div className="card" key={item.name}>
      <img className="product--image" src={item.imageurl} alt="product image" />
      <h2>{item.name}</h2>
      <p className="price">₹{item.price}</p>
      <button className="view">View More</button>
    </div>
    </Link>
  ));

  return (
    <>
      <div className='title2'>
        <h1 className='top'>TOP SELLING MOBILES</h1>
        <span>VIEW ALL PRODUCTS</span>
      </div>
      <div className="cards">
        <Carousel responsive={responsive} infinite={true}>
          {product}
        </Carousel>
      </div>
    </>
  );
}
