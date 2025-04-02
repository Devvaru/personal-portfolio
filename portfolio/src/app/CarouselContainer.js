import React from "react";
import "./carousel.css";
import { cardDetails } from "./CarouselData";
import CarouselItem from "./CarouselItem";
import CarouselItemReflection from "./CarouselItemReflection";

export default function AutoplayCarousel() {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <div classname="flex flex-col">
                            <CarouselItem
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                                imgAlt={cardDetails[detailKey].alt}
                            ></CarouselItem>
                            <CarouselItemReflection
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                                imgAlt={cardDetails[detailKey].alt}
                            ></CarouselItemReflection>
                        </div>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <div classname="flex flex-col">
                            <CarouselItem
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                                imgAlt={cardDetails[detailKey].alt}
                            ></CarouselItem>
                            <CarouselItemReflection
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].title}
                                imgAlt={cardDetails[detailKey].alt}
                            ></CarouselItemReflection>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}