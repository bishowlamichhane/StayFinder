import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`); // cambiar a backticks
  };

  return (
    <article>
      <header>
        <img src={hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{hotel.name}</h3>
        <p className="hotelRating">{hotel.rating}</p>
        <span>
          {hotel.city.name}, {hotel.city.country}
        </span>
        <div className="hotelPrice">${hotel.price}</div>
      </section>
      <footer>
        <button onClick={handleClick}>See more...</button>
      </footer>
    </article>
  );
};

export default HotelCard;
