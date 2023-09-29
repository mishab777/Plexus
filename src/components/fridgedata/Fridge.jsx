import React from 'react'
import "./fridge.css"
import { phonedata } from '../../database/Data'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Fridges = () => {
    const [originalData] = useState(phonedata);
    const [datas, setDatas] = useState(phonedata);
    const brands = (catitem) => {
      const result = phonedata.filter((curdata) => {
        return curdata.brand === catitem;
      });
     setDatas(result);
    };
    const processor = (catitem) => {
        const result = phonedata.filter((curdata) => {
          return curdata.capacity === catitem;
        });
       setDatas(result);
      };
    const internal = (catitem) => {
      const result = phonedata.filter((curdata) => {
        return curdata.door === catitem;
      });
     setDatas(result);
    };
    const clearFilters = () => {
        setDatas(originalData);
    };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
    <div className="banner">
        <h1>REFRIGERATORS</h1>
        <span>Shop from wide range of best refrigerator brands. Plexus brings wide range of top selling refrigerators at best prices.</span>
    </div>
    <div class="product-page">
    <div class="category-filter">
   <h1>Filter By</h1>
   <div className="brand">
    <h2>Brand</h2>
    <div className="checkboxes">
   <label className="container">Samsung
  <input type="checkbox" onChange={() => brands("samsung")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Hitachi
  <input type="checkbox" onChange={() => brands("hitachi")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Godrej
  <input type="checkbox" onChange={() => brands("godrej")}/>
  <span className="checkmark"></span>
</label>
<label className="container">LG
  <input type="checkbox" onChange={() => brands("lg")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Whirlpool
  <input type="checkbox" onChange={() => brands("whirlpool")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Haier
  <input type="checkbox" onChange={() => brands("haier")}/>
  <span className="checkmark"></span>
</label>

</div>
</div>
<div className="brand">
    <h2>Door-type</h2>
    <div className='checkboxes'>
   <label className="container">Double door
  <input type="checkbox" onChange={() => internal("double")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Triple door
  <input type="checkbox" onChange={() => internal("triple")}/>
  <span className="checkmark"></span>
</label>
<label className="container">Side by Side
  <input type="checkbox" onChange={() => internal("side by side")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<div className="brand">
    <h2>Storage-Capacity</h2>
    <div className="checkboxes">
   <label className="container">200-300L 
  <input type="checkbox" onChange={() => processor("200")}/>
  <span className="checkmark"></span>
</label>
<label className="container">300-500L
  <input type="checkbox" onChange={() => processor("300")}/>
  <span className="checkmark"></span>
</label>
<label className="container">500-600L
  <input type="checkbox" onChange={() => processor("600")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<button className='clear' onClick={() => clearFilters()}>Clear filters</button>
  </div>
  <div class="product-list">
    {datas.filter((item) => item.id >= 34 && item.id <= 43).map((item) =>{
        return(
          <Link to={`/productdetails/${item.id}`} className='details-link'><div class="product" key={item.id}>
                <div className="image-div">
                    <img src={item.image} alt="" />
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
