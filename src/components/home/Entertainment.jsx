import React from 'react';
import { Entertainment, responsive5 } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./home.css";

export const Enter = () => {
  return (
    <>
      <div className='title3'>
        <h1 className='top'>TOP SELLING GAMINGS AND ENTERTAINMENTS</h1>
        <span>VIEW ALL PRODUCTS</span>
      </div>
      <div className="games">
        <Carousel responsive={responsive5} infinite={true}>
          {Entertainment.map((item) => (
            <div className="gaming" key={item.name}>
              <img className="game-image" src={item.image} alt="product image" />
              <h2>{item.name}</h2>
              <p className="price">₹{item.price}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="banner-div1">
        <img src="https://www.lotuselectronics.com/assets/images/brand/buttom_banner.jpg" alt="" />
      </div>
    </>
  )
}
