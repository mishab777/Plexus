import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-1">
            <h1>Products</h1>
            <span>Television</span>
            <span>Smartphones</span>
            <span>Audio&video</span>
            <span>Laptops&computers</span>
            <span>Kitchen Appliances</span>
            <span>Home Appliances</span>
            <span>Cameras</span>
        </div>
        <div className="footer-1">
            <h1>Stores</h1>
            <span>Indore</span>
            <span>Bhopal</span>
            <span>Ujjain</span>
            <span>Jabalpur</span>
            <span>Raipur</span>
            <span>Bhilai</span>
            <span>Nagpur</span>
        </div>
        <div className="footer-1">
            <h1>Support</h1>
            <span>Privacy policy</span>
            <span>Refund policy</span>
            <span>Terms and condition</span>
            <span>My account</span>
            <span>About us</span>
            <span>Contact us</span>
            <span>Sitemap</span>
        </div>
        <div className="footer-2">
            <div className="footer-2-1">
                <img src="https://www.lotuselectronics.com/assets/images/icon/free-delivery.png" alt="" />
                <span>Free Shipping & Returns</span>
            </div>
            <div className="footer-2-1">
                <img src="https://www.lotuselectronics.com/assets/images/icon/credit-card.png" alt="" />
                <span>Secure Payments online</span>
            </div>
            <div className="footer-2-1">
                <img src="https://www.lotuselectronics.com/assets/images/icon/exchange.png" alt="" />
                <span>Attractive Exchange offer</span>
            </div>
        </div>
      </div>
      <div className="free">
        
      </div>
    </>
  );
};
