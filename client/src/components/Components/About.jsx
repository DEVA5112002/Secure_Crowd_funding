import React from "react";
import Bitcon from "../../assets/Assets/crowdfund.jpg";
import SolutionStep from "./SolutionStep";
import "../../Styles/About.css";


function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Bitcon} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Decentralized CrowdFund, your trusted partner for accessible and
          Investments. Our expert features offer online crypto campaign
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a Digital Mania.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Right Platform"
          description="Find your perfect Platform for Investment and Make your fund collection with ease at Crowder. "
        />

        <SolutionStep
          title="Make a Campaigns"
          description="Make your campaigns for your business world wide and make investor happy."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced application and specialized investment thorugh crypto are here to provide Best Crowd funding experience and plans, helping you achieve your best possible investment."
        />
      </div>
    </div>
  );
}

export default About;
