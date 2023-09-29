import React from 'react';
import { computerData, responsive3 } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./home.css";
import { Link } from 'react-router-dom';

export const Computers = () => {
  const product = computerData.map((item) => (
    <Link to='laptops' className='computer-link'><div className="cmp-cards" key={item.name}>
      <img className="cmp-image" src={item.image} alt="product image" />
      <h2>{item.name}</h2>
      <p className="price">₹{item.price}</p>
    </div></Link>
  ));

  return (
    <>
      <div className='title3'>
        <h1 className='top'>TOP SELLING LAPTOPS AND COMPUTERS</h1>
        <span>VIEW ALL PRODUCTS</span>
      </div>
      <div className="cmp-sell">
        <Carousel responsive={responsive3} infinite={true}>
          {product}
        </Carousel>
      </div>
    </>
  );
}
