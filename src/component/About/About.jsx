import React from 'react'
import './About.css'
import about from '../../assets/about.png'

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img src={about} alt="image" className="aboutImg" />
      </div>
      <div className="aboutRight">
        <div className="hedding">
          <h2>Share Your Plate</h2>
        </div>

        <p className="aboutUs1">
          <h3>About Us</h3>
          <br />
          We are a user-friendly central hub interface to connect food donors
          with recipients in a streamlined and transparent manner, aiming to
          alleviate hunger and promote sustainable food practices. And we
          provide a platform Where people can post their thoughts about
          Sustainable Development to increase the awareness.
        </p>
        <br />

        <p className="aboutUs2">
          <h3>Our Objective</h3>
          <br />
          <b>Facilitate Food Donations:</b> Provide a user-friendly interface
          for individuals, businesses, and organizations to donate surplus food
          items. <br />
          <b>Ensure Equitable Distribution:</b> Connect food donors with
          verified charitable organizations, community centers, and shelters
          that distribute food to those in need. <br />
          <b>Reduce Food Waste:</b> Promote the efficient use of surplus food by
          redirecting it to where it is most needed, thus minimizing food waste.{" "}
          <br />
          <b>Raise Awareness:</b> Educate the public about food insecurity
          issues, sustainable food practices, and the impact of food donations
          on communities. <br />
          <b>Encourage Community Engagement:</b> Engage volunteers and foster
          partnerships with stakeholders to support ongoing food bank
          operations.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About
