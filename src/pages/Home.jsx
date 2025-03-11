import { useSelector } from "react-redux";
import HotelCard from "../components/homePage/HotelCard";
import styles from "./Home.module.css";
import Header from "../components/homePage/Header";
import Hero from "../components/homePage/Hero";

const Home = () => {
  const hotels = useSelector((state) => state.hotels);

  console.log(hotels);

  return (
    <div className={styles.homeContainer}>
      <Header />
      <Hero />
      <div className={styles.hotelGrid}>
        {hotels?.map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
