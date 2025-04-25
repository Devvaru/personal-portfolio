import React from "react";
import "./carousel.css";
import { cardDetails } from "./CarouselData";
import CarouselItem from "./CarouselItem";
import CarouselItemReflection from "./CarouselItemReflection";

export default function CarouselContainer() {
    return (
        <div className="carousel-container overflow-hidden relative h-[200px] w-full">
            <div className="carousel-track absolute left-0 flex items-center justify-center gap-[10px] w-max h-full">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <div className="flex flex-col" key={`carousel-item-${detailKey}`}>
                            <CarouselItem
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].imgTitle}
                                imgAlt={cardDetails[detailKey].imgAlt}
                            ></CarouselItem>
                            <CarouselItemReflection
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].imgTitle}
                                imgAlt={cardDetails[detailKey].imgAlt}
                            ></CarouselItemReflection>
                        </div>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <div className="flex flex-col" key={`carousel-reflection-${detailKey}`}>
                            <CarouselItem
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].imgTitle}
                                imgAlt={cardDetails[detailKey].imgAlt}
                            ></CarouselItem>
                            <CarouselItemReflection
                                imgUrl={cardDetails[detailKey].imgUrl}
                                imgTitle={cardDetails[detailKey].imgTitle}
                                imgAlt={cardDetails[detailKey].imgAlt}
                            ></CarouselItemReflection>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}