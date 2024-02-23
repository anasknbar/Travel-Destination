import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import data from "../../data/db.json";
import "./TourDetail.css"
import { useState } from "react";

const TourDetail = () => {
  // Use the useParams hook to get the parameters from the URL
  const { id } = useParams();
  const requestedCard = data.filter((item) => {
    return item.id === id;
  })[0];

// --------------------- this addition for Lab 17 re-sumbmition
const initialDescriptionLines = 50;
  const [showMore, setShowMore] = useState(false);// those are built in state in react

  const tourDescription = requestedCard.info; //my info

  const descriptionToShow = showMore // if its clicked >> true and it will show more content, this is state from react >> otherwise false, 
    ? tourDescription
    : tourDescription.split(' ').slice(0, initialDescriptionLines).join(' ');

  const handleToggleDescription = () => {
    setShowMore(!showMore);
  }
// ----------------------
  
  return (
    <>
      <Header />
      <div className="container-for-detail">
        <div className="data-card">
          <img src={requestedCard.image} className="city-img"></img>
          <span>
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            <p>
              5.0 <span className="rating">(6).{requestedCard.price}</span>{" "}
            </p>
          </span>

          <p>{requestedCard.name}</p>
          <p>
          
            <span className="price">From ${requestedCard.price}</span> /
            night
          </p>
        </div>
        
        <p className="description-p">{descriptionToShow} <button onClick={handleToggleDescription} className="showBtn">
        {showMore? 'See Less...' : 'See More...'}
      </button></p>
      </div>
      
    </>
  );
};

export default TourDetail;
