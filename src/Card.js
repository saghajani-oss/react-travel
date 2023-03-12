import React from "react";

export default function Card(props) {
    return (
      <div className="card">
        <div className="card-img">
          <img src={`../img/${props.item.img}`} alt="japan" />
        </div>
        <div className="card-content">
          <img src="../img/location.png" alt="location" />
          <span>{props.item.location}</span>
          <a href="#">View on Google Maps</a>
          <h2>{props.item.title}</h2>
          <h4 className="travel-date">{props.item.date}</h4>
          <p>
            {props.item.description}
          </p>
        </div>
      </div>
    );
}