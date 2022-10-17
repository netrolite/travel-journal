import React from "react";

export default function Card(props) {
    console.log(props.imageUrl);

    return (
        <div className="card">
            <img alt="card-image" 
            src={process.env.PUBLIC_URL + "/media/" + props.imageUrl} />
            
            <div className="info">
                <span className="location">{props.location}</span>
                <span className="mapsUrl">
                    <a href={props.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </span>
                <div className="title">{props.title}</div>
                <span className="start-date">{props.startDate} - </span>
                <span className="end-date">{props.endDate}</span>
                <div className="desc">{props.description}</div>
            </div>
        </div>
    )
}