import TourDetail from "../../TourDetails/TourDetail";
import "./Tour.css";

import { Link } from "react-router-dom";


function Tour(props) {
  
  const dataArray = props.data;
  const handleCardClick = (cardId) => {
    // console.log(`Clicked on card with ID: ${cardId}`);
    
      
     <TourDetail dd="anas"/>
    
  };
  return (
    <>
      
        <div className="container">
          {dataArray.map((item, index, array) => (
            // <li key={item.id}>{item.name}</li>
            <Link key={item.id} to={`/TourDetail/${item.id}`} className="card--link-css">
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="data-card"
            >
              <img src={item.image} className="city-img"></img>
              <span>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p>
                  5.0 <span className="rating">(6).{item.price}</span>{" "}
                </p>
              </span>

              <p>{item.name}</p>
              <p>
                {" "}
                <span className="price">From ${item.price}</span> / night
              </p>
            </div>
             </Link>
          ))}
        </div>
      
    </>
  );
}

export default Tour;
