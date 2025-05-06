import React from "react";
import { BlogProps } from "@/types";
import { AnimationContainer } from "./animation-container";

export const BlogCard = ({ blog }: { blog: BlogProps }) => {
  return (
    <AnimationContainer>
      <h1>Blog Card</h1>
    </AnimationContainer>
  );
};
