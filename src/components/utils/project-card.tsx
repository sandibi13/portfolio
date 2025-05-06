import React from "react";
import { ProjectProps } from "@/types";
import { AnimationContainer } from "./animation-container";

export const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <AnimationContainer>
      <h1>Project Card</h1>
    </AnimationContainer>
  );
};
