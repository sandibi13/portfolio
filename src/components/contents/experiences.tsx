import React from "react";
import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

export const Experiences = () => {
  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        <TimeLineItem active>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-black dark:hover:text-white hover:underline hover:underline-offset-2">
              Backend Developer (Freelance) at Parsor
            </span>{" "}
            •{" "}
            <span className="dark:text-neutral-200 hover:text-neutral-800">
              Jan 2025 - Apr 2025
            </span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Built a contract document parser API, enabling efficient extraction
            and analysis of legal data.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem last>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-black dark:hover:text-white hover:underline hover:underline-offset-2">
              Software Engineer (Fulltime) at Hairo
            </span>{" "}
            •{" "}
            <span className="dark:text-neutral-200 hover:text-neutral-800">
              May 2024 - Nov 2024
            </span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Built features across the stack to support real-time communication
            and social interactions.
          </TimeLineItem.Description>
        </TimeLineItem>
      </TimeLine>
    </div>
  );
};
