import React from "react";
import styling from "../styles/BlogrLanding.module.css";
import logo from "../public/images/Blogr/logo.svg";
import futureImg from "../public/images/Blogr/illustration-editor-desktop.svg";
import Image from "next/image";

const BlogrLanding = () => {
  return (
    <div className={styling.container}>
      <nav className={styling.nav}>
        <div className={styling.topNav}>
          <div className={styling.topNav__left}>
            <Image src={logo} width={100} layout="fixed"></Image>
            <ul className={styling.topNav__left__links}>
              <li>Product</li>
              <li>Company</li>
              <a href="#future">Connect</a>
            </ul>
          </div>
          <ul className={styling.topNav__right__links}>
            <li>Login</li>
            <li className={styling.topNav__right__linkSpecial}>Sign Up</li>
          </ul>
        </div>
        <header className={styling.header}>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className={styling.header__btns}>
            <button
              className={[styling.header__btn, styling.header__btnLeft].join(
                " "
              )}
            >
              Start for Free
            </button>
            <button
              className={[styling.header__btn, styling.header__btnRight].join(
                " "
              )}
            >
              Learn More
            </button>
          </div>
        </header>
      </nav>
      <section id="future" className={styling.futureSection}>
        <h3 className={styling.sectionTitle}>Designed for the future</h3>
        <div className={styling.futureSection__text}>
          <div className={styling.futureSection__text__Split}>
            <span>Introducing an extensible editor</span>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className={styling.futureSection__text__Split}>
            <span>Robust content management</span>
            <p>
              {" "}
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div className={styling.futureSection__img}>
          <Image src={futureImg} layout="fill" objectFit="contain"></Image>
        </div>
      </section>
    </div>
  );
};

export default BlogrLanding;
