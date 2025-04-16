import React from "react";
import { CardDetail } from "./types";

export default function CarouselItemReflection({ imgUrl, imgTitle, imgAlt }: CardDetail) {
    return (
        <div className="carousel-reflection">
            <img src={imgUrl} title={imgTitle} alt={imgAlt} ></img>
        </div>
    );
}