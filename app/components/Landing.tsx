"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Landing({ onFinish }: { onFinish: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onFinish();
        }, 500);
      },
    });

    tl.fromTo(
      ".landing-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    )
      .fromTo(
        ".landing-sub",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5",
      )
      .to(".landing-container", {
        opacity: 0,
        duration: 1,
        delay: 1,
      });
  }, [onFinish]);

  return (
    <div ref={containerRef} className="landing-container">
      <h1 className="landing-title">Code-Decode</h1>
      <p className="landing-sub">Encrypt. Decode. Have Fun.</p>
    </div>
  );
}
