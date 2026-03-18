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
      { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
    )
      .fromTo(
        ".landing-sub",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        "-=0.5",
      )
      .to(".landing-container", {
        opacity: 0,
        duration: 0,
        delay: 0,
      });
  }, [onFinish]);

  return (
    <div ref={containerRef} className="landing-container">
      <h1 className="landing-title">developed by DINKU</h1>
      <p className="landing-sub">Code-Decode</p>
      <p className="landing-sub">Encrypt. Decode. Have Fun.</p>
    </div>
  );
}
