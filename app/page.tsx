"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Landing from "./components/Landing";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showLanding, setShowLanding] = useState(true);

  const applyDarkTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--d-primary", "rgb(28,28,30)");
    root.style.setProperty("--d-secondary", "rgb(44,44,46)");
    root.style.setProperty("--d-color", "#a1a1a6");

    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const applyLightTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--d-primary", "#ffffff");
    root.style.setProperty("--d-secondary", "#f2f2f2");
    root.style.setProperty("--d-color", "#000000");

    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    if (saved === "light") applyLightTheme();
    else applyDarkTheme();
  }, []);

  if (showLanding) {
    return <Landing onFinish={() => setShowLanding(false)} />;
  }

  return (
    <>
      <section id="section-1">
        <div id="navbar">
          <div></div>
          <div>Code-Decode</div>
          <div>☰</div>
        </div>
      </section>

      <section id="hp-sec-2">
        <div>
          <span>Hey!</span>
          <br />
          Encrypt your message to a different character set that I have assigned
          for all the english alphabets and send it to your friends,
        </div>
        <div>
          <span>Benefit?</span>
          <br />
          Nothing but will it be fun when they will ask, what the hell is this?
          yes absolutely.
        </div>
      </section>

      <section id="hp-sec-3">
        <div>
          <div>
            <Link href="/decode">
              <img id="hm-img" src="/decode.png" alt="Decode" />
            </Link>
          </div>

          <div>
            <Link href="/code">
              <img id="hm-img" src="/code.png" alt="Code" />
            </Link>
          </div>
        </div>

        <div>
          <Link id="hm-decode-btn" href="/decode">
            Decode
          </Link>
          <Link id="hm-code-btn" href="/code">
            Code
          </Link>
        </div>
      </section>

      <section id="footer">
        <div>
          <div
            id="toggle-switch"
            onClick={() =>
              theme === "dark" ? applyLightTheme() : applyDarkTheme()
            }
            style={{ cursor: "pointer" }}
          >
            <p className={theme === "light" ? "active" : ""}>Light</p>
            <p className={theme === "dark" ? "active" : ""}>Dark</p>
          </div>

          <div id="branding">
            <a href="#">Don't Click!</a>
          </div>
        </div>
      </section>
    </>
  );
}
