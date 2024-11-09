import React from "react";
import { TbBusStop, TbLock, TbHeadset, TbCurrencyDollar } from "react-icons/tb";
import "./Hero.css"; // Make sure to link your CSS file

const Hero = () => {
  return (
    <div className="heroMain">
      <div className="heroLeft">
        <h1>Cannabis Oils: CBD Oil and THC Oil Available</h1>
        <p>
          Discover a diverse range of food, concentrates, cannabis oils,
          capsules, CBD oils, baked buns, and dried flowers - available in
          indica, sativa, and hybrid varieties with varying CBD and THC
          potencies. Cannabis accessories can also be purchased.
        </p>
        <button className="heroButton">Shop Now</button>
        <div className="features">
          <div className="flex gap-5">
            <div className="featureItem">
              <TbBusStop className="featureIcon" />
              <h4>Free Shipping & Returns </h4>
            </div>
            <div className="featureItem">
              <TbCurrencyDollar className="featureIcon" />
              <h4>Money Back Guarantee</h4>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="featureItem">
              <TbLock className="featureIcon" />
              <h4>100% Secure Payment</h4>
            </div>
            <div className="featureItem">
              <TbHeadset className="featureIcon" />
              <h4>Online Support</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="heroRight">
        <img
          src="https://html.merku.love/herbalist/img/index2/leaf.webp"
          alt="Cannabis Leaves"
          className="heroImage"
        />
      </div>
    </div>
  );
};

export default Hero;
