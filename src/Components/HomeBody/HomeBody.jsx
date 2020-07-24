import React from 'react';
import "./style.scss";

const HomeBody = () => {
    return (
        <div className="gkp-homebody--container">
            <div className="gkp-homebody--profile-pic-container">
                <img className="gkp-homebody--profile-pic" src= "../assets/images/elliptical_profile_pic.png"/>
            </div>
            <section id="gkp-homebody--name-section">
            <h1 className="gkp-homebody--name">Grant Kyle</h1>
            </section>
            <section id="gkp-homebody--title-section">
            <h2 className="gkp-homebody--title">software developer; digital marketer; lifelong learner</h2>
            </section>
            <section id="gkp-homebody--social-section">

            </section>
        </div>
    )
}


export default HomeBody


