import React from "react";
import { CardDetail } from "./types";

export default function CarouselItemReflection({ imgUrl, imgTitle, imgAlt }: CardDetail) {
    return (
        <div className="carousel-reflection flex flex-auto justify-center items-center h-full w-[75px] lg:w-[100px]">
            <img src={imgUrl} title={imgTitle} alt={imgAlt} className="h-full opacity-50 w-[100] scale-y-[-1]" style={{ maskImage: 'linear-gradient(transparent, black)' }}></img>
        </div>
    );
}