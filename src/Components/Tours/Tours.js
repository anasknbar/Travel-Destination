import "./Tours.css";
const jsonData = require("../../data/db.json");

function Tours() {
  // const filteredData = jsonData.map((item) => {
  //   return [item.name,item.image]
  // })
  return (
    <>
      <div className="container">
        {jsonData.map((item, index) => (
          <div className="image-div" key={index}>
            <img  className='img-site' src={item.image}></img>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tours;
