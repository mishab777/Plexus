import React from 'react'
import "./Phones.css"
import { phonedata } from '../../database/Data'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Phones = () => {
  const [data, setData] = useState(phonedata);
  const [originalData] = useState(phonedata);

  const filterset = (catitem) => {
    const result = phonedata.filter((curdata) => {
      return curdata.brand === catitem;
    });
   setData(result);
  };
  const internal = (catitem) => {
    const result = phonedata.filter((curdata) => {
      return curdata.ram === catitem;
    });
   setData(result);
  };
  const external = (catitem) => {
    const result = phonedata.filter((curdata) => {
      return curdata.storage === catitem;
    });
   setData(result);
  };
  const clearFilters = () => {
    setData(originalData);
};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <div className='banner'>
        <h1>SMART PHONES</h1>
        <span>Shop from wide range of best smartphones brands. Plexus brings wide range of top selling smartphones at best prices</span>

    </div>
    <div class="product-page">
  <div class="category-filter">
   <h1>Filter By</h1>
   <div className="brand">
    <h2>Brand</h2>
    <div className="checkboxes">
   <label className="container">Apple
  <input type="checkbox" onChange={() => filterset("ios")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Vivo
  <input type="checkbox" onClick={() => filterset("vivo")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Oppo
  <input type="checkbox" onClick={() => filterset("Oppo")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Samsung
  <input type="checkbox" onClick={() => filterset("Samsung")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Realme
  <input type="checkbox" onClick={() => filterset("realme")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<div className="brand">
    <h2>Internal</h2>
    <div className='checkboxes'>
   <label className="container">4GB
  <input type="checkbox" onClick={() => internal("4GB RAM")}/>
  <span className="checkmark"></span>
</label>
<label className="container">6GB
  <input type="checkbox" onClick={() => internal("6GB RAM")}/>
  <span className="checkmark"></span>
</label>
<label className="container">8GB
  <input type="checkbox" onClick={() => internal("8GB RAM")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<div className="brand">
    <h2>Storage</h2>
    <div className="checkboxes">
   <label className="container">64GB
  <input type="checkbox" onClick={() => external("64GB ROM")}/>
  <span className="checkmark"></span>
</label>
<label className="container">128GB
  <input type="checkbox" onClick={() => external("128GB ROM")}/>
  <span className="checkmark"></span>
</label>
<label className="container">256GB
  <input type="checkbox" onClick={() => external("256GB ROM")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<button className='clear' onClick={() => clearFilters()}>Clear filters</button>
  </div>
  <div class="product-list">
{data.slice(0,12).map((item) =>{
return(
  <Link to={`/productdetails/${item.id}`} className='details-link'><div class="product">
    <div className="img-div">
<img className='mobile-image' src={item.image} alt="" />
</div>
<div className="list-desc">
            <h1 className='item-name'>{item.name}</h1>
            <div className='offer'>
              <h1 className='offer-text'>8 % off</h1>

            </div>
            <div className="prices">
              <h1>₹{item.price}</h1>
              <span>You save ₹5000</span>
              <h2>₹{item.offer}</h2>
            </div>
            <div className="bottom">
              <div className="bottom-1">
                <img src="https://cdn-icons-png.flaticon.com/128/7764/7764668.png" alt="" />
                <h3>Compare</h3>

              </div>
              <div className="bottom-1">
                <img src="https://cdn-icons-png.flaticon.com/128/10179/10179058.png" alt="" />
                <h3>Shop with video</h3>
              </div>
              <div className="bottom-1">
                <img src="https://cdn-icons-png.flaticon.com/128/2697/2697432.png" alt="" />
                <h3>Connect to store</h3>
              </div>
            </div>

          </div>
    </div>
    </Link>
)
})}
    
  </div>
</div>

  

    </>
  )
}
