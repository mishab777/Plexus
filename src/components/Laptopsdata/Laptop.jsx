import React from 'react'
import "./lap.css"
import { phonedata } from '../../database/Data'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Laptop = () => {
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
          return curdata.processor === catitem;
        });
       setDatas(result);
      };
    const internal = (catitem) => {
      const result = phonedata.filter((curdata) => {
        return curdata.Ram === catitem;
      });
     setDatas(result);
    };
    const external = (catitem) => {
      const result = phonedata.filter((curdata) => {
        return curdata.ssd === catitem;
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
        <h1>LAPTOPS</h1>
        <span>Shop from wide range of best windows laptop brands. Plexus brings wide range of top selling windows laptop at best prices.</span>
    </div>
    <div class="product-page">
    <div class="category-filter">
   <h1>Filter By</h1>
   <div className="brand">
    <h2>Brand</h2>
    <div className="checkboxes">
   <label className="container">MACBOOK
  <input type="checkbox" onChange={() => brands("apples")}/>
  <span className="checkmark"></span>
</label>
<label className="container">HP
  <input type="checkbox" onChange={() => brands("hp")}/>
  <span className="checkmark"></span>
</label>
<label className="container">DELL
  <input type="checkbox" onChange={() => brands("dell")}/>
  <span className="checkmark"></span>
</label>
<label className="container">LENOVO
  <input type="checkbox" onChange={() => brands("lenovo")}/>
  <span className="checkmark"></span>
</label>
<label className="container">ASUS
  <input type="checkbox" onClick={() => brands("asus")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<div className="brand">
    <h2>RAM</h2>
    <div className='checkboxes'>
   <label className="container">8GB
  <input type="checkbox" onChange={() => internal("8GB")}/>
  <span className="checkmark"></span>
</label>
<label className="container">16GB
  <input type="checkbox" onChange={() => internal("16GB")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<div className="brand">
    <h2>SSD</h2>
    <div className="checkboxes">
   <label className="container">256GB
  <input type="checkbox" onChange={() => external("256GB")}/>
  <span className="checkmark"></span>
</label>
<label className="container">512GB
  <input type="checkbox" onChange={() => external("512GB")}/>
  <span className="checkmark"></span>
</label>
<label className="container">1TB
  <input type="checkbox" onChange={() => external("1TB")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<div className="brand">
    <h2>Processor</h2>
    <div className="checkboxes">
   <label className="container">INTEL 
  <input type="checkbox" onChange={() => processor("i5")}/>
  <span className="checkmark"></span>
</label>
<label className="container">RYZEN
  <input type="checkbox" onChange={() => processor("ryzen")}/>
  <span className="checkmark"></span>
</label>
</div>
</div>
<button className='clear' onClick={() => clearFilters()}>Clear filters</button>

  </div>
  <div class="product-list">
    {datas.filter((item) => item.id >= 13 && item.id <= 23).map((item) =>{
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
