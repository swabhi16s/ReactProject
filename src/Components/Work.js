import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Browse our menu and pick the meals you love. We offer a variety of dishes to satisfy every taste and dietary need.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Select how often you want your meals delivered. Whether it's daily, weekly, or monthly, we’ve got you covered. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy fresh meals delivered to your doorstep swiftly and reliably. Our delivery service ensures your food arrives on time and in perfect condition.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Foodie, we make enjoying delicious, healthy meals easy and convenient. Follow these simple steps to get started with our service:
        </p>
        
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;