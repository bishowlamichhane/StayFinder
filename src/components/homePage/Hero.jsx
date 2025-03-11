import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div
          className={`${styles.welcomeText} text-6xl font-extrabold tracking-tight`}
        >
          Book your stay now
        </div>
        <div className={`${styles.searchContainer} w-full h-14 relative`}>
          <input
            type="text"
            placeholder="Search hotels and lodges"
            className={`${styles.searchInput} w-full h-full px-4 py-2 rounded-full shadow-md `}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
