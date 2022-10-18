import React from "react";
import pinIcon from "../media/pin-icon.svg"

export default function Card(props) {
    console.log(props.imageUrl);

    return (
        <div className="card">
            <img alt="card" 
            src={process.env.PUBLIC_URL + "/media/" + props.imageUrl} 
            className="card-image"/>
            
            <div className="info">
                <h2 className="location">
                    <img src={pinIcon} alt="" width="7px" className="pin-icon" />
                    {props.location.toUpperCase()}
                </h2>
                <span className="mapsUrl">
                    <a href={props.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </span>
                <h3 className="title">{props.title}</h3>
                <div className="start-end-date">
                    {props.startDate} - {props.endDate}
                </div>
                <h4 className="desc">{props.description}</h4>
            </div>
        </div>
    )
}