import React from "react";
import "./carousel.css";
import { cardDetails } from "./CarouselData";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                            imgAlt={cardDetails[detailKey].alt}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                            imgAlt={cardDetails[detailKey].alt}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
}