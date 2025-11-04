import React from 'react';
import './midbinner.css'
import binner from '../../images/binner.jpg'

const MidBanner = () => {
  return (
    <div className="midbanner-wrapper">
      <div className="midbanner-container"style={{backgroundImage: `url(${binner})`,}}>
        <div className="midbanner-overlay">
          <div className="midbanner-content">
            <h1>Electronics At Your Fingertips</h1>
            <p>
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
