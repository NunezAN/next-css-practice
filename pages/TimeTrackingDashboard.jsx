import React, { useState } from "react";
import styling from "../styles/TimeTrackingDashboard.module.css";
import userImg from "../public/images/timeTrackingDashboard/image-jeremy.png";
import Image from "next/image";

const TimeTrackingDashboard = () => {
  const [selected, setSelected] = useState("DAILY");
  const times = {
    work: {
      daily: 5,
      dailyLast: 7,
      weekly: 32,
      weeklyLast: 36,
      monthly: 103,
      monthlyLast: 128,
    },
    play: {
      daily: 1,
      dailyLast: 2,
      weekly: 10,
      weeklyLast: 8,
      monthly: 23,
      monthlyLast: 29,
    },
    study: {
      daily: 0,
      dailyLast: 1,
      weekly: 4,
      weeklyLast: 7,
      monthly: 13,
      monthlyLast: 19,
    },
  };
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
          <li
            className={[
              styling.timeOption,
              selected === "DAILY" && styling.selected,
            ].join(" ")}
            onClick={() => setSelected("DAILY")}
          >
            Daily
          </li>
          <li
            className={[
              styling.timeOption,
              selected === "WEEKLY" && styling.selected,
            ].join(" ")}
            onClick={() => setSelected("WEEKLY")}
          >
            Weekly
          </li>
          <li
            className={[
              styling.timeOption,
              selected === "MONTHLY" && styling.selected,
            ].join(" ")}
            onClick={() => setSelected("MONTHLY")}
          >
            Monthly
          </li>
        </ul>
      </div>
      <div className={styling.timeCard}>
        <div className={styling.timeCard__title}>
          <span>Work</span>
          <span>...</span>
        </div>
        <h4 className={styling.timeCard__hours}>
          {selected === "DAILY"
            ? times.work.daily
            : selected === "MONTHLY"
            ? times.work.monthly
            : times.work.weekly}
          hrs
        </h4>
        <span className={styling.timeCard__last}>
          last week -{" "}
          {selected === "DAILY"
            ? times.work.dailyLast
            : selected === "MONTHLY"
            ? times.work.monthlyLast
            : times.work.weeklyLast}
          hrs
        </span>
      </div>
      <div className={styling.timeCard}>
        <div className={styling.timeCard__title}>
          <span>Play</span>
          <span>...</span>
        </div>
        <h4 className={styling.timeCard__hours}>
          {selected === "DAILY"
            ? times.play.daily
            : selected === "MONTHLY"
            ? times.play.monthly
            : times.play.weekly}
          hrs
        </h4>
        <span className={styling.timeCard__last}>
          last week -{" "}
          {selected === "DAILY"
            ? times.play.dailyLast
            : selected === "MONTHLY"
            ? times.play.monthlyLast
            : times.play.weeklyLast}
          hrs
        </span>
      </div>
      <div className={styling.timeCard}>
        <div className={styling.timeCard__title}>
          <span>Study</span>
          <span>...</span>
        </div>
        <h4 className={styling.timeCard__hours}>
          {selected === "DAILY"
            ? times.study.daily
            : selected === "MONTHLY"
            ? times.study.monthly
            : times.study.weekly}
          hrs
        </h4>
        <span className={styling.timeCard__last}>
          last week -{" "}
          {selected === "DAILY"
            ? times.study.dailyLast
            : selected === "MONTHLY"
            ? times.study.monthlyLast
            : times.study.weeklyLast}
          hrs
        </span>
      </div>
      <div className={styling.timeCard}>
        <div className={styling.timeCard__title}>
          <span>Excercise</span>
          <span>...</span>
        </div>
        <h4 className={styling.timeCard__hours}>32hrs</h4>
        <span className={styling.timeCard__last}>last week - 36hrs</span>
      </div>
      <div className={styling.timeCard}>
        <div className={styling.timeCard__title}>
          <span>Social</span>
          <span>...</span>
        </div>
        <h4 className={styling.timeCard__hours}>32hrs</h4>
        <span className={styling.timeCard__last}>last week - 36hrs</span>
      </div>
      <div className={styling.timeCard}>
        <div className={styling.timeCard__title}>
          <span>Self Care</span>
          <span>...</span>
        </div>
        <h4 className={styling.timeCard__hours}>32hrs</h4>
        <span className={styling.timeCard__last}>last week - 36hrs</span>
      </div>
    </div>
  );
};

export default TimeTrackingDashboard;
