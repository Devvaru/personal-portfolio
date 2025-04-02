import React from "react";
import { CardDetail } from "./types";

export default function CarouselItem({ imgUrl, imgTitle, imgAlt }: CardDetail) {
    return (
        <div className="carousel-card">
            <img src={imgUrl} title={imgTitle} alt={imgAlt} ></img>
        </div>
    );
}