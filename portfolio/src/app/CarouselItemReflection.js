import React from "react";

export default function CarouselItemReflection({ imgUrl, imgTitle, imgAlt }) {
    return (
        <div className="carousel-card carousel-reflection">
            <img src={imgUrl} title={imgTitle} alt={imgAlt} ></img>
        </div>
    );
}