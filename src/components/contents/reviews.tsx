import React from "react";
import { AnimationContainer } from "../utils/animation-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { allReviews } from "contentlayer/generated";
import { ReviewProps } from "@/types";
import { MagicCard } from "../ui/magic-card";
import { ReviewCard } from "../utils/review-card";

export const Reviews = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer animation="slide-up" delay={0.1}>
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Reviews
          </h2>
        </div>
      </AnimationContainer>

      <AnimationContainer
        animation="slide-up"
        delay={0.2}
        className="flex items-center justify-center overflow-hidden relative w-full pt-10 mx-auto"
      >
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {allReviews.map((review: ReviewProps, index: number) => (
              <CarouselItem key={index} className="relative">
                <div className="absolute inset-0 w-4/5 h-20 top-1/4 left-1/2 -translate-x-1/2 -rotate-45 lg:h-52 bg-blue-500/10 blur-[8rem]" />
                <MagicCard className="p-2">
                  <ReviewCard review={review} />
                </MagicCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-4 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </AnimationContainer>
    </div>
  );
};
