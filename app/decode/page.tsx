"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DecodePage() {
  const [input, setInput] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const router = useRouter();

  const decode = (text: string): string => {
    const alph: string[] = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      ".",
      "?",
      "!",
      "#",
      "_",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      ",",
      "'",
    ];

    const newAlph: string[] = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      ".",
      "?",
      "!",
      "#",
      "_",
      "a0",
      "b0",
      "c0",
      "d0",
      "e0",
      "f0",
      "g0",
      "h0",
      "0i",
      "0j",
      ",",
      "'",
    ];

    return text
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word
          .split("`")
          .filter((t) => t !== "")
          .map((token) => {
            const idx = newAlph.indexOf(token);
            return idx !== -1 ? alph[idx] : token;
          })
          .join(""),
      )
      .join(" ");
  };

  const applyDarkTheme = (): void => {
    const root = document.documentElement;
    root.style.setProperty("--d-primary", "rgb(28,28,30)");
    root.style.setProperty("--d-secondary", "rgb(44,44,46)");
    root.style.setProperty("--d-color", "#a1a1a6");

    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const applyLightTheme = (): void => {
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

  const errorShow = (): void => {
    setShowError(true);
    setTimeout(() => setShowError(false), 600);
  };

  const copyDecoded = (): void => {
    try {
      const decoded = decode(input);
      navigator.clipboard.writeText(decoded);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 500);
    } catch (err) {
      errorShow();
    }
  };

  return (
    <>
      <section id="section-1">
        <div id="navbar">
          <div
            onClick={() => router.back()}
            className="PointerCursor"
            role="button"
            aria-label="Go back"
          >
            <span>
              <i className="fa-solid fa-chevron-left PointerCursor"></i>
            </span>{" "}
            Home
          </div>

          <div>Decode</div>

          <div id="sub-nav" onClick={errorShow} role="button" aria-label="Menu">
            <i className="fa-solid fa-grip-lines" />
          </div>
        </div>
      </section>

      <section id="section-2">
        <p id="quote">Chase your stars fool, life is short</p>
      </section>

      <section id="section-3" className="textarea">
        <p>Your Text</p>
        <textarea
          className="input_text_area"
          placeholder="type in something!"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInput(e.target.value)
          }
        />
      </section>

      <section id="section-4" className="textarea">
        <p>Decoded Text</p>

        <div
          id="copy"
          onClick={copyDecoded}
          role="button"
          aria-label="Copy decoded text"
        >
          <i className="fa-regular fa-clipboard" />
        </div>

        <textarea className="input_text_area" value={decode(input)} readOnly />
      </section>

      <section id="section-5">
        <div
          onClick={errorShow}
          role="button"
          aria-label="Customize"
          style={{ cursor: "pointer" }}
        >
          Customize <i className="fa-solid fa-gear" />
        </div>
      </section>

      {showError && <p id="error">Opps! this feature isn't available yet</p>}
      {showCopied && <div id="copied_anim">Copied !</div>}

      <section id="footer">
        <div>
          <div
            id="toggle-switch"
            onClick={() =>
              theme === "dark" ? applyLightTheme() : applyDarkTheme()
            }
            style={{ cursor: "pointer" }}
            aria-hidden={false}
          >
            <p className={theme === "light" ? "active" : ""}>Light</p>
            <p className={theme === "dark" ? "active" : ""}>Dark</p>
          </div>

          <div id="branding">
            <a href="https://www.youtube.com/watch?v=QrwpyID427E&list=RDQrwpyID427E&start_radio=1">
              Don't Click!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
//pseudo commit
