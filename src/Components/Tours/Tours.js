import "./Tours.css";

import Tour from "./Tour/Tour";
import data from "../../data/db.json"


function Tours() {

  return (
    <>
      <Tour
      data = {data}
      />
    </>
  );
}

export default Tours;
