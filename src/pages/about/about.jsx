import './about.css'
import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();

  const goToProduct = ()=>{
    navigate('/Product')
    window.scroll(0,0)
  }
  return (
    <>
      <div className="about">
        <h1 id='a-h1'>About EShop </h1>
        <p>
          Welcome to <span>EShop</span>, your one-stop destination for the
          latest and greatest online products. From cutting-edge gadgets to
          must-have accessories — we’re here to power up your life with premium
          products and unbeatable service.
        </p>
        <h2> Our Mission</h2>
        <p>
          At EShop, our mission is to make innovative shopping accessible to
          everyone. We’re passionate about connecting people with the tools and
          tech they need to thrive in a digital world — all at competitive
          prices and delivered with speed and care
        </p>
        <h2>Why Choose EShop?</h2>
        <ul>
          <li>Top-quality products sourced from trusted suppliers.</li>
          <li>Fast, secure shipping and reliability you can trust.</li>
          <li> Responsive customer support,always ready to help. </li>
          <li>Easy returns and hassle-free shopping experience.</li>
        </ul>
        <h2>Our Vision</h2>
        <p>
          We envision a future where online shopping becomes a seamless
          experience for everyone, everywhere. At EShop, we’re committed to
          staying ahead of the curve — offering intuitive interfaces, real-time
          data integrations, and a trustworthy digital ecosystem.
        </p>
        <h3>Join to EShop Family</h3>
        <p>
          Become part of EShop — where smart shopping meets community. Explore,
          discover, and connect with us today.
        </p>
        <button onClick={goToProduct}>Start Shopping</button>
      </div>
    </>
  );
}

export default About;
