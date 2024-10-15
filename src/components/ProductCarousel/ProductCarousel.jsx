import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductCarousel.css";
import { FaStar, FaEye, FaShoppingCart } from "react-icons/fa";

const ProductCarousel = () => {
  return (
    <section className="creative-slider">
      <div className="slider-inner">
        <div className="slider-heading">
          <h1>Popular Products</h1>
          <p>
            Suscipit tellus mauris a diam maecenas sed enim ut sem.
            <br /> Turpis egestas maecenas pharetra convallis posuere
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{ enabled: false }}
          spaceBetween={20}
          slidesPerView={4}
          className="slider-row"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="product-box">
                <div className="img-wrapper">
                  <img
                    src="https://html.merku.love/herbalist/img/shop/07.webp"
                    alt="Product"
                  />
                  <div className="hover-overlay">
                    <div className="icon">
                      <FaEye className=" view-icon" size={22} />
                    </div>
                    <div className="icon">
                      <FaShoppingCart className=" add-to-cart-icon" size={22} />
                    </div>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-rating">
                    {[...Array(4)].map((_, starIndex) => (
                      <FaStar key={starIndex} color="#f4b400" />
                    ))}
                    <FaStar color="#cccccc" />
                  </div>
                  <div className="product-title">Product Name</div>
                  <div className="product-price">
                    <span className="current-price">$7.97</span>
                    <span className="old-price">$10.97</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
