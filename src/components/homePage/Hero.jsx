import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className="text-5xl text-blue-800 font-bold ">Welcome</div>
        <div className="w-full  h-12">
          <input
            type="text"
            placeholder="Search hotels and lodges"
            className="border border-1-solid w-full h-full px-2 rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
