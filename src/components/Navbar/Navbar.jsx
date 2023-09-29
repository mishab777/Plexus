import React from "react";
import "./Navbar.css";
import schedule from "./date.png";
import book from "./booking.png";
import search from "./search.png";
import love from "./love.png";
import cart from "./shopping-cart.png";
import logo from "./technology.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="schedule">
          <img className="date" src={schedule} alt="" />
          <span>Schedule your store visit</span>
        </div>
        <div className="schedule">
          <img className="date" src={book} alt="" />
          <span>Book your order on phone</span>
        </div>
        <div className="search">
          <img src={search} alt="" />
          <input
            type="search"
            name=""
            id=""
            placeholder="what are you looking for?"
          />
        </div>
        <div className="icons">
          <img src={cart} alt="" />
          <img src={love} alt="" />
        </div>
      </div>
      <div className="navbar2">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to='/' className="plexus-link"><h1>PLEXUS</h1></Link>
        </div>
        <div className="menus">
          <span className="dropdown">
            Television
            <div className="dropdown-content">
              <div className="content">
              <span>SMART TV</span>
              <span>HD LED TV</span>
              <span>4K Ultra HD TV</span>
              <span>8K Ultra HD TV</span>
              <span>OLED TV</span>
              <span>QLED TV</span>
              <span>Full HD LED TV</span>
              </div>
              
            </div>
          </span>
          <span className="dropdown">
            Smartphone&wearable
            <div className="dropdown-content3">
              <div className="smartphone">
                <div className="smart1">
                  <h1>MOBILES</h1>
                  <span>I phone</span>
                  <span>Android</span>
                  <span>Featered Mobiles</span>

                </div>
                <div className="smart2">
                  <h1>SMART WEARABLES</h1>
                  <span>Smart watches</span>
                  <span>Digital Watches</span>
                  <span>Analog watches</span>
                </div>
                <div className="smart1">
                  <h1>TABLETS&IPADS</h1>
                  <span>Mini tablets</span>
                  <span>Phablets</span>
                  <span>Booklets</span>
                </div>
                <div className="smart2">
                  <h1>TELEPHONES</h1>
                  <span>Cordless phone</span>
                  <span>Landline phone</span>
                  <span>View All</span>
                </div>

              </div>
            </div>
          </span>
          <span className="dropdown">
            Computers
            <div className="dropdown-content4">
              <div className="computers">
              <div className="cmp1">
                <h1>LAPTOPS</h1>
                <span>Windows laptop</span>
                <span>MacBook laptop</span>
                <span>Linux laptop</span>
                <span>Gaming laptop</span>
                <span>Convertible</span>
                <span>Thin&Light</span>

              </div>
              <div className="cmp2">
                <h1>DESKTOPS</h1>
                <span>AIO desktops</span>
                <span>Tower desktops</span>

              </div>
              <div className="cmp1">
                <h1>PRINTERS</h1>
                <span>Inkjet printers</span>
                <span>Liser printers</span>

              </div>
              </div>
            </div>
          </span>
          <span className="dropdown">
            Audio&video
            <div className="dropdown-content4">
            <div className="computers">
              <div className="cmp1">
                <h1>HOME THEATERS</h1>
                <span>Sound bar</span>
                <span>Projectors</span>
                <span>Gaming</span>
                <span>Gaming software</span>
                <span>Gaming console</span>

              </div>
              <div className="cmp2">
                <h1>SPEAKERS</h1>
                <span>Party/Onebox/Amplified</span>
                <span>Bluetooth speaker</span>
                <span>Multimedia speaker</span>
                <span>Smart speaker</span>
                <span>Tower speaker</span>

              </div>
              <div className="cmp1">
                <h1>HEAD PHONES</h1>
                <span>Ear phone</span>
                <span>Head phone</span>
                <span>Neckband</span>
                <span>Wireless headphone</span>
                <span>Wireless earbuds</span>

              </div>
              </div>
            </div>
          </span>
          <span className="dropdown">
            Home Appliances
            <div className="dropdown-content5">
              <div className="smartphone">
              <div className="smart1">
                <h1>AIR CONDITIONRES</h1>
                <span>Window AC</span>
                <span>Portable AC</span>
                <span>Wall Mounted</span>
                <span>Tower AC</span>
                <span>Cassette AC</span>

              </div>
              <div className="smart2">
                <h1>REFRIGERATORS</h1>
                <span>Single door</span>
                <span>Double door</span>
                <span>Side by side</span>
                <span>Triple door</span>
                <span>French door</span>
                <span>Mini refrigerator</span>
                <span>Built in</span>
                <span>Bottom freezer</span>

              </div>
              <div className="smart1">
                <h1>WASHING MACHINES</h1>
                <span>Semi automatic</span>
                <span>Front Load</span>
                <span>Top Load</span>
                <span>Cloth Dryer</span>
                <h1>DISH WASHER</h1>
                <h1>ROOM COOLERS</h1>
                <h1>WATER HEATERS</h1>

              </div>
              <div className="smart2">
                <h1>WATER PURIFIERS</h1>
                <span>Water dispensor</span>
                <span>Water purifier</span>
                <span>Water cooler</span>
                
              </div>
              <div className="smart1">
                <h1>FLOOR&HOME CARE</h1>
                <span>Air poorifier</span>
                <span>Vaccum cleaner</span>
                <span>Vegetable&water purifier</span>
                <h1>DEEP FREEZER</h1>
                <h1>ELECTRONICS SAFE</h1>
                <h1>SEWING MACHINES</h1>
                <h1>ROOM HEATERS</h1>

              </div>
              <div className="smart2">
                <h1>FANS</h1>
                <span>Cieling fans</span>
                <span>Exhaust</span>
                <span>Wall fans</span>
                <span>Table fans</span>
                <span>Pedestal fans</span>
                <span>Tower fans</span>
                
              </div>
              </div>
            </div>
          </span>
          <span className="dropdown">
            Kitchen Appliances
            <div className="dropdown-content6">
              <div className="smartphone">

              
            <div className="smart1">
                <h1>COOKING APPLIANCES</h1>
                <span>Window AC</span>
                <span>Portable AC</span>
                <span>Wall Mounted</span>
                <span>Tower AC</span>
                <span>Cassette AC</span>

              </div>
              <div className="smart2">
                <h1>FOOD PREPARATION</h1>
                <span>Single door</span>
                <span>Double door</span>
                <span>Side by side</span>
                <span>Triple door</span>
                <span>French door</span>
                <span>Mini refrigerator</span>
                <span>Built in</span>
                <span>Bottom freezer</span>

              </div>
              <div className="smart1">
                <h1>JUICE MAKER GRINDER</h1>
                <span>Semi automatic</span>
                <span>Front Load</span>
                <span>Top Load</span>
                <span>Cloth Dryer</span>
                <h1>DISH WASHER</h1>
                <h1>ROOM COOLERS</h1>
                <h1>WATER HEATERS</h1>

              </div>
              <div className="smart2">
                <h1>MICROWAVE OVEN</h1>
                <span>Solo microwave</span>
                <span>Grill Microwave</span>
                <span>Convection</span>
                <span>Built in</span>
              </div>
              </div>
            </div>
          </span>
          <span className="dropdown">
          Cameras
            <div className="dropdown-content7">
              <div className="camera">
              <h1>DIGITAL/DSLR CAMERA</h1>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
