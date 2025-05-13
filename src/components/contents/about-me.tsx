import React from "react";
import { AnimationContainer } from "../utils/animation-container";

export const AboutMe = () => {
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            About Me
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
            I am a passionate software developer with a deep curiosity for
            technology and a love for building meaningful digital products. My
            interests span across AI/ML, blockchain, automation, and
            full-spectrum software development—from web and mobile apps to
            desktop tools, APIs, and CLIs. I enjoy diving into new challenges,
            solving complex problems, and constantly pushing myself to grow as a
            developer. My focus is always on building smooth, reliable, and
            purposeful experiences that make a real impact. Outside of coding, I
            am often exploring new tech trends or brainstorming ideas for tools
            that can simplify life. Let&apos;s create something powerful
            together! 🚀
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};
