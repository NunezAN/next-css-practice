import styles from "../styles/Home.module.css";
import Link from "next/link";
import IntroSection from "./IntroSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.project__links}>
        <Link className={styles.project__link} href="/IntroSection">
          Intro Section
        </Link>
        <Link className={styles.project__link} href="/BlogrLanding">
          Blogr Landing Page
        </Link>
      </div>
    </div>
  );
}
