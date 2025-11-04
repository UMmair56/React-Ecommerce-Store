import React from 'react';
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react';
import './feature.css';

const features = [
  { icon: <Truck />, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: <Lock />, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: <RotateCcw />, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: <Clock />, text: '24/7 Support', subtext: 'Dedicated customer service' },
];

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-box">
            <div className="feature-icon">{feature.icon}</div>
            <p className="feature-title">{feature.text}</p>
            <p className="feature-subtext">{feature.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
