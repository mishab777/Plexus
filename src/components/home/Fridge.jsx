import React from 'react';
import { FridgeData, responsive4 } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./home.css";
import { Link } from 'react-router-dom';

export const Fridges = () => {
  return (
    <>
      <div className='title3'>
        <h1 className='top'>TOP SELLING REFRIGERATORS AND WASHING MACHINES</h1>
        <span>VIEW ALL PRODUCTS</span>
      </div>
      <div className="fridges">
        <Carousel responsive={responsive4} infinite={true}>
          {FridgeData.map((item) => (
            <Link to='fridge' className='fridge-link'><div className="fridge" key={item.name}>
              <img className="fridge-image" src={item.image} alt="product image" />
              <h2>{item.name}</h2>
              <p className="price">₹{item.price}</p>
            </div></Link>
          ))}
        </Carousel>
      </div>
      <div className="banner-div">
        <h1>Pick a time as per your convenience
and our executive will give you a call</h1>
<button>Book order on Phone</button>
      </div>
    </>
  )
}
