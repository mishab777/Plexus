import React from 'react'
import "./home.css"


export const Banner = () => {
  return (
    <>
    <div className='banner-head'>
      <h1>Best Deals And Lowest Price On Top Brands</h1>

    </div>
    <div className='banners'>
      <div className="banner1">
        <h1>UPTO 30% OFF</h1>
      <img src="https://emibaba.com/wp-content/uploads/2022/07/HP-Victus-16-e0162AX-Gaming-Laptop4.jpg" alt="" />
      </div>
      <div className="banner1">
        <h1>UPTO 40% OFF</h1>
      <img src="https://i.pinimg.com/1200x/8e/2a/65/8e2a65b080c0bb3fd4c98ccaff6fec17.jpg" alt="" />
      </div>
      <div className="banner1">
        <h1>UPTO 25% OFF</h1>
      <img src="https://m.media-amazon.com/images/I/61RlH8j5s2L._SX679_.jpg" alt="" />
      </div>

    </div>
    </>
  )
}
