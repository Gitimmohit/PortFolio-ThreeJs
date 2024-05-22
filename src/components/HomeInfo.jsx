import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => {
    return (
      <div className="info-box">
        <p>{text}</p>
        <Link to={link}>{btnText}</Link>
      </div>
    );
  };

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-1">
      Hii I am <span className="font-semibold">Mohit</span> 👋
      <br />A Software Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="worked with many company and Learning many things"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="worked with many company and Learning many things"
      link="/about"
      btnText="Learn More"
    />
  ),
  4: (
    <InfoBox
      text="worked with many company and Learning many things"
      link="/about"
      btnText="Learn More"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
