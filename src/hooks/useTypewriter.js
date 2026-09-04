import { useEffect, useState } from "react";

/**
 * Cycles through a list of words with a simple type / pause / delete rhythm.
 * Respects prefers-reduced-motion by just showing the first word statically.
 */
export function useTypewriter(words, { typingMs = 55, deletingMs = 30, holdMs = 1600 } = {}) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(() => (prefersReducedMotion ? words[0] ?? "" : ""));
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = words[index % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingMs);
      } else {
        timeout = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingMs);
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words, typingMs, deletingMs, holdMs, prefersReducedMotion]);

  return text;
}
