"use client";

import { useEffect } from "react";

// One small client effect for the whole /canggus page (renders nothing):
// 1. Scroll reveal: IntersectionObserver adds .is-in to [data-reveal] blocks
//    (CSS transition on opacity + transform, see visual.css). Blocks already
//    on screen at load are marked first, so nothing above the fold blinks.
// 2. Pointer tilt: one delegated pointermove listener on the page root sets
//    --rx/--ry on the hovered [data-tilt] card, at most once per frame.
//    Only for hover-capable fine pointers (desktop); phones stay static.
// No scroll listener. Everything is skipped below 1024 px and with
// prefers-reduced-motion (content is then simply shown, nothing hidden).
export default function Fx() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-cg-root]");
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    // Phones/tablets: fully static (no reveal, no tilt). Keeps scrolling on
    // slow CPUs free of layer churn; measured long tasks at 4x throttle.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const blocks = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const vh = window.innerHeight;
    for (const el of blocks) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-in");
    }
    root.classList.add("cg-fx");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    for (const el of blocks) if (!el.classList.contains("is-in")) io.observe(el);

    const cleanups: (() => void)[] = [() => io.disconnect()];

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      let cur: HTMLElement | null = null;
      let raf = 0;
      let px = 0;
      let py = 0;
      const reset = (el: HTMLElement) => {
        el.classList.remove("is-tilting");
        el.style.removeProperty("--rx");
        el.style.removeProperty("--ry");
      };
      const apply = () => {
        raf = 0;
        if (!cur) return;
        const r = cur.getBoundingClientRect();
        const max = Number(cur.dataset.tilt) || 6;
        const x = Math.min(Math.max((px - r.left) / r.width - 0.5, -0.5), 0.5);
        const y = Math.min(Math.max((py - r.top) / r.height - 0.5, -0.5), 0.5);
        cur.style.setProperty("--ry", `${(x * max * 2).toFixed(2)}deg`);
        cur.style.setProperty("--rx", `${(-y * max * 2).toFixed(2)}deg`);
        cur.classList.add("is-tilting");
      };
      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        const t = (e.target as Element | null)?.closest?.<HTMLElement>("[data-tilt]") ?? null;
        if (t !== cur) {
          if (cur) reset(cur);
          cur = t;
        }
        if (!cur) return;
        px = e.clientX;
        py = e.clientY;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const onLeave = () => {
        if (cur) reset(cur);
        cur = null;
      };
      root.addEventListener("pointermove", onMove, { passive: true });
      root.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
