import React from "react";
import profileCSS from "./../Profile/Profile.module.css";
import HeroImg from "./../../assets/GAB_Hero.jpg";
function Profile() {
  return (
    <div className={profileCSS.ProfileWrapper}>
      <h2>Gerald Baalham</h2>
      <div className={profileCSS.headerImg}>
        <img src={HeroImg} alt="" />
      </div>
      <div className={profileCSS.specialization}>
        <p>Specialisation</p>
        <h3>
          Full Stack Web Design and <br /> Software Engineer
        </h3>
      </div>
      <div className={profileCSS.social}>
        <p>Follow me on social media</p>
        <div className={profileCSS.socialIcons}>
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-behance-line"></i>
          <i className="ri-dribbble-line"></i>
        </div>
      </div>
      <button>Let&apos;s Work Together !</button>
    </div>
  );
}

export default Profile;
