"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimationContainer } from "../utils/animation-container";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { allProjects, allBlogs } from "contentlayer/generated";

const contents = [
  {
    title: "Projects",
    url: "/projects",
    data: allProjects,
  },
  {
    title: "Blogs",
    url: "/blogs",
    data: allBlogs,
  },
];

export const Featured = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer
        animation="slide-up"
        delay={0.1}
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Featured Works
          </h2>
          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-10">
            Here you'll find a selection of my latest projects and blog posts.
            Each piece reflects my passion for building, learning, and sharing
            insights from my journey in tech. Dive in to explore what I've been
            working on and writing about recently.
          </p>
        </div>
      </AnimationContainer>

      <div className="flex flex-col pt-10 w-full">
        <div className="flex flex-col gap-10">
          {contents.map((content) => (
            <div key={content.title}>
              <AnimationContainer
                animation="slide-up"
                delay={0.2}
                className="flex items-center justify-center overflow-hidden w-full mx-auto"
              >
                <div className="w-full">
                  <h2 className="text-lg lg:text-xl font-medium text-left w-full">
                    {content.title}
                  </h2>
                </div>
              </AnimationContainer>

              <AnimationContainer
                animation="slide-up"
                delay={0.3}
                className="flex flex-col items-center justify-center gap-10 w-full mx-auto pt-10 relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  className="bg-blue-500/10 hidden lg:block -z-10 w-[30rem] left-[-5rem] bottom-[8rem] absolute h-[18rem] blur-[10rem] rounded-full"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 w-full">
                  {/* Project card or Blog card */}
                </div>
              </AnimationContainer>

              <AnimationContainer
                animation="slide-up"
                delay={0.3}
                className="mt-6"
              >
                <Link href={content.url}>
                  <Button variant="secondary" size="sm">
                    View more
                    <ArrowRightIcon className="size-4 ml-1" />
                  </Button>
                </Link>
              </AnimationContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
