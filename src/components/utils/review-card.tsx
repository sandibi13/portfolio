import React from "react";
import { ReviewProps } from "@/types";
import { Card, CardContent } from "../ui/card";
import { StarIcon } from "lucide-react";

export const ReviewCard = ({ review }: { review: ReviewProps }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hashHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarIcon
            key={i}
            className="size-4 lg:size-5 fill-foreground text-foreground"
          />
        );
      } else if (i === fullStars && hashHalfStar) {
        stars.push("");
      } else {
        stars.push("");
      }
    }
    return stars;
  };

  return (
    <Card className="border-none p-0 transition-all duration-300 select-none rounded-xl lg:rounded-2xl">
      <CardContent className="flex flex-col h-[22rem] lg:h-80 aspect-video p-4 md:p-6">
        <div className="flex items-center gap-2">
          {renderStars(review.rating)}
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 flex-grow mt-4 text-sm text-justify md:text-lg lg:text-xl leading-relaxed">
          {review.text}
        </p>
        <div className="mt-auto">
          <h4 className="text-lg text-foreground font-semibold">
            {review.name}
          </h4>
          <p className="text-muted-foreground text-sm">{review.country}</p>
        </div>
      </CardContent>
    </Card>
  );
};
