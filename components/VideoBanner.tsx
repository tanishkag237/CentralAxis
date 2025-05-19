"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface VideoBannerProps {
  videoSrc: string;
  heading: React.ReactNode;
  subtext: React.ReactNode;
  position?: "center" | "top" | "bottom" | "top-left" | "bottom-right";
  buttonContent: React.ReactNode;
  buttonContent2?: React.ReactNode;
}

const positionStyles: Record<string, string> = {
  center: "items-center justify-center text-center",
  top: "items-center justify-start text-center",
  bottom: "items-center justify-end text-center",
  "top-left": "items-start justify-start text-left",
  "bottom-right": "items-end justify-end text-right",
};

export default function VideoBanner({
  videoSrc,
  heading,
  subtext,
  position = "center",
  buttonContent,
  buttonContent2,
}: VideoBannerProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-xl">
      <div className="relative w-full h-auto rounded-lg overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-[98%] h-full object-cover"
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/70 z-10" />

        <div
          className={cn(
            "relative z-20 flex flex-col px-4 py-10 text-white h-full w-full",
            positionStyles[position]
          )}
        >
          <div>
            <div className="text-2xl md:text-2xl font-semibold mb-2">{heading}</div>
            <div className="text-sm md:text-base max-w-5xl font-light mb-3">{subtext}</div>
            {buttonContent}
            {buttonContent2}
          </div>
        </div>
      </div>
    </section>
  );
}
