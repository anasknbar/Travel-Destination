import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import data from "../../data/db.json";
import "./TourDetail.css"

const TourDetail = () => {
  // Use the useParams hook to get the parameters from the URL
  const { id } = useParams();
  const requestedCard = data.filter((item) => {
    return item.id === id;
  })[0];


  
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
        
        <p>{requestedCard.info}</p>
      </div>
    </>
  );
};

export default TourDetail;
