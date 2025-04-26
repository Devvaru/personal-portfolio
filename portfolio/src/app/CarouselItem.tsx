import React from "react";
import { CardDetail } from "./types";

export default function CarouselItem({ imgUrl, imgTitle, imgAlt }: CardDetail) {
    return (
        <div className="carousel-card flex flex-auto justify-center items-center h-full w-[75px] lg:w-[100px]">
            <img src={imgUrl} title={imgTitle} alt={imgAlt} className="h-full transition-transform duration-300 hover:scale-90" />
        </div>
    );
}