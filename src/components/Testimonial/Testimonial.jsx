import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "John Doe",
    image: "https://html.merku.love/herbalist/img/index2/review04.webp",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet. Phasellus imperdiet",
    ratingT: 1, // Add product ratingT
  },
  {
    name: "Jane Smith",
    image: "https://html.merku.love/herbalist/img/index2/review04.webp",
    review:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    ratingT: 4, // Add product ratingT
  },
  {
    name: "Alex Johnson",
    image: "https://html.merku.love/herbalist/img/index2/review04.webp",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ratingT: 3, // Add product ratingT
  },
  {
    name: "Maria Garcia",
    image: "https://html.merku.love/herbalist/img/index2/review04.webp",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ratingT: 2, // Add product rating
  },
];

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function (i) {
      return <div className="custom-dot"></div>;
    },
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-container">
      <h2>Your Trust is Our Top Concern</h2>
      <p>
        Feugiat sed lectus vestibulum mattis ullamcorper velit. <br /> Sed
        pulvinar proin gravida hendrerit lectus
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <div className="product-ratingT">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`starT ${
                    i < testimonial.ratingT ? "filledT" : ""
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-review">"{testimonial.review}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
