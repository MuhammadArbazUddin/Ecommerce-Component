import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaCheck } from "react-icons/fa";
import "./HaveAnyQuestion.css";

const HaveAnyQuestion = () => {
  return (
    <div className="have-any-question">
      <h2>Have any Questions?</h2>
      <p>
        Elementum eu facilisis sed odio morbi quis commodo odio.
        <br /> Mauris rhoncus aenean vel elit scelerisque mauris pellentesque
      </p>
      <div className="info-sections">
        <div className="info-box">
          <h3>Our Office Location</h3>
          <div className="info-location">
            <FaMapMarkerAlt className="HAQicon" />
            <span style={{ textAlign: "left" }}>
              211 Lehner Valleys Apt. 287 <br /> Harristad
            </span>
          </div>
          <p>
            Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl
            nisi scelerisque eu ultrices
          </p>
        </div>
        <div className="info-box highlight">
          <h3>How Can We Help?</h3>
          <ul>
            <li>
              <FaCheck className="check-icon" /> Orci nulla pellentesque
              dignissim
            </li>
            <li>
              <FaCheck className="check-icon" /> Nam at lectus urna duis
              convallis
            </li>
            <li>
              <FaCheck className="check-icon" /> Quis auctor elit sed vulputate
            </li>
            <li>
              <FaCheck className="check-icon" /> Nam at lectus urna duis
              convallis
            </li>
          </ul>
        </div>
        <div className="info-box">
          <h3>Our Phone</h3>
          <div className="info-phone">
            <FaPhoneAlt className="HAQicon" />
            <span>
              +1-896-882-3255 <br />
              +1-249-342-7501
            </span>
          </div>

          <p>
            Tincidunt vitae semper quis lectus nulla. Viverra accumsan in nisl
            nisi scelerisque eu ultrices
          </p>
        </div>
      </div>
    </div>
  );
};

export default HaveAnyQuestion;
