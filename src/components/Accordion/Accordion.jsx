import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1725992340772-47fd8f8df459?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cannabis"
        />
      </div>
      <div className="content-section">
        <h2>The Effects of Cannabis on Your Body</h2>
        <p>
          Elementum eu facilisis sed odio morbi quis commodo odio. Mauris
          rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit
          amet nulla facilisi morbi tempus.
        </p>
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className={activeIndex === index ? "active" : ""}
              >
                {item.title}
              </button>
              <div
                className="accordion-content"
                style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    title: "Reduce Inflammation and Relieve Pain",
    content:
      "Cannabis has been found to reduce inflammation and help manage pain for many patients.",
  },
  {
    title: "Kill Cancer Cells and Slow Tumor Growth",
    content:
      "Research suggests that cannabis may help in slowing the growth of some types of tumors.",
  },
  {
    title: "Relax Tight Muscles in People with MS",
    content:
      "Cannabis may help relax tight muscles in patients with multiple sclerosis.",
  },
  {
    title: "Stimulate Appetite and Improve Weight",
    content:
      "Cannabis can stimulate appetite, making it useful for those who have trouble eating due to illness.",
  },
];

export default Accordion;
