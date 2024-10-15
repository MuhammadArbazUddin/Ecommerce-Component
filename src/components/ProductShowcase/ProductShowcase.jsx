import React, { useState, useEffect } from "react";
import "./ProductShowcase.css";

function ProductShowcase() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Timer logic
  useEffect(() => {
    const countdownDate = new Date("2024-12-31T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-showcase">
      <div className="product-info">
        <h1 className="product-title">
          CBD Facial Serum: Anti-Aging + Daily Moisturizer
        </h1>
        <p className="product-description">
          Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris
          a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra
          convallis posuere.
        </p>
        <div className="product-pricing">
          <span className="old-price">$48.97</span>
          <span className="new-price">$27.97</span>
        </div>
        <div className="countdown-timer">
          <div className="time-box">
            <span className="time">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.minutes}</span>
            <span className="label">Mins</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.seconds}</span>
            <span className="label">Secs</span>
          </div>
        </div>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <div className="product-image-showcase">
        <img
          src="https://html.merku.love/herbalist/img/index2/serum.webp"
          alt="CBD Facial Serum"
          className="image"
        />
      </div>
    </div>
  );
}

export default ProductShowcase;
