import React from "react";
import chat from "./assets/chat.png";
import fdelivery from "./assets/f-delivery.png";
import coin from "./assets/coin.png";



function Guarantee(props) {
  const { img, title, description } = props.service;
  return (
    <div className='guarantee'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

function GuaranteeList() {
  const services = [
    {
      img: fdelivery,
      title: "Free shipping",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dignissimos voluptatum."
    },
    {
      img: coin,
      title: "100% Money back",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dignissimos voluptatum."
    },
    {
      img: chat,
      title: "Online support 24/7",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dignissimos voluptatum."
    },
  ];

  return (
    <div className="services">
      { services.map((service, key) => <Guarantee key={key} service={service} />)}
    </div>
  );
}

export default GuaranteeList;
