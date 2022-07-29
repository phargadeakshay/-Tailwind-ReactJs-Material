import React from "react";
import axios from "axios";
import { useState } from "react";

const GetCake = () => {
  const [cake, setCake] = useState([]);
  const fetchcake = () => {
    axios
      .get("https://apifromashu.herokuapp.com/api/allcakes")
      .then((response) => setCake(response.data.data))
      .then((error) => console.log(error));
    console.log("api response is -", cake);
  };

  return (
    <div>
      <button onClick={fetchcake}>getCake</button>
      {cake.map((cakelist) => {
        return (
          <div key={cakelist.cakeid} className="my-12 col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={cakelist.image} alt={"img"} />
              <div className="card-body">
                <h5 className="card-title">{cakelist.name}</h5>
                <p className="card-text">{cakelist.price}</p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetCake;
