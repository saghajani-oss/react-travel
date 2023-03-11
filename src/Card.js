import React from "react";

export default function Card(props) {
    return (
      <div className="card">
        <div className="card-img">
          <img src={`../img/${props.img}`} alt="japan" />
        </div>
        <div className="card-content">
          <img src="../img/location.png" alt="location" />
          <span>{props.location}</span>
          <a href="#">View on Google Maps</a>
          <h2>{props.title}</h2>
          <h4 className="travel-date">{props.date}</h4>
          <p>
            {props.description}
          </p>
        </div>
      </div>
    );
}