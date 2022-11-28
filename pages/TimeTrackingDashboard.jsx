import React from "react";
import styling from "../styles/TimeTrackingDashboard.module.css";
import userImg from "../public/images/timeTrackingDashboard/image-jeremy.png";
import Image from "next/image";

const TimeTrackingDashboard = () => {
  return (
    <div className={styling.container}>
      <div className={styling.userDetails}>
        <div className={styling.userInfo}>
          <div className={styling.imgContainer}>
            <Image src={userImg} layout="fill" objectFit="contain"></Image>
          </div>
          <p className={styling.userName}>
            <span className={styling.userName__sm}>Report for </span>
            <br />
            Jeremy Robson
          </p>
        </div>
        <ul className={styling.timeOptions}>
          <li className={styling.timeOption}>Daily</li>
          <li className={styling.timeOption}>Weekly</li>
          <li className={styling.timeOption}>Monthly</li>
        </ul>
      </div>
      <div className={styling.timeCard}>
        <div>
          <span>Work</span>
          <span>...</span>
        </div>
        <h4>32hrs</h4>
        <span>last week - 36hrs</span>
      </div>
      <div className={styling.timeCard}></div>
      <div className={styling.timeCard}></div>
      <div className={styling.timeCard}></div>
      <div className={styling.timeCard}></div>
      <div className={styling.timeCard}></div>
    </div>
  );
};

export default TimeTrackingDashboard;
