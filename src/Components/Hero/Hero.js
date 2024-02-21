import "./Hero.css"
import heroPhot from "./photo-grid.png"
function Hero(){
  return(
    <> 
      <div className="hero-photo">
      <img src={heroPhot} ></img>
      </div>
      
      <div className="hero-p">
        <p>Explore Beyond Boundaries: Your Journey, Our Destination!</p>
        <p>Our curated adventures redefine luxury travel, promising seamless experiences and a lifetime of extraordinary tales.</p>
      </div>
    </>
  )
}

export default Hero