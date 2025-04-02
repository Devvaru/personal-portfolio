import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, imgAlt }) {
    return (
        <div className="carousel-card">
            <img src={imgUrl} title={imgTitle} alt={imgAlt} ></img>
        </div>
    );
}