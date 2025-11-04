import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousal.css";
import Slider from "react-slick";
import Category from "../category/category";
import download from '../../images/Loading_icon.gif'
import { UseProduct } from "../../hooks/ProductProvider";
function Carousal() {
  const { products, loading, error } = UseProduct();

  if (loading) return <img src={download} id="loading-img"/>
  if (error) return <p>Error: ${error}</p>;

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(0,0,0,0.5)",
          borderRadius: "50%",
          right: "0px",
          zIndex: 2,
          width: "50px",
          height: "50px",
          paddingLeft: "15px",
          paddingTop: "15px",
        }}
        onClick={onClick}
      />
    );
  };

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(0,0,0,0.5)",
          borderRadius: "50%",
          left: "20px",
          zIndex: 2,
          width: "50px",
          height: "50px",
          paddingLeft: "15px",
          paddingTop: "15px",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {products.map((item) => {
          return (
            <>
              <div className="carousal" key={item.id}>
                <div className="left">
                  <h3 id="h3">Powering your world with these products</h3>
                  <h1 id="h1">{item.title}</h1>
                  <p id="desc">{item.description}</p>
                  <button id="shop-btn">Shop Now</button>
                </div>
                <div className="right">
                  <img src={item.image} alt={item.title} id="right-img" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
      <Category/>
    </>
  );
}

export default Carousal;
