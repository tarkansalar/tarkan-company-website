"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/rafey%20alam.mp4";
const COVER_URL =
  "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/rafey%20alam%20cover.jpeg";
const LIMIT = 70;

function fmt(s: number) {
  s = Math.max(0, Math.floor(s));
  return Math.floor(s / 60) + ":" + (s % 60 < 10 ? "0" : "") + (s % 60);
}

type IconState = "play" | "pause" | "restart";

export default function RafeyVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);
  const [ended, setEnded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [centerHidden, setCenterHidden] = useState(false);
  const [centerIcon, setCenterIcon] = useState<IconState>("play");
  const [barIcon, setBarIcon] = useState<IconState>("play");

  const handleCenterClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (ended) {
      setEnded(false);
      setCenterHidden(true);
      v.currentTime = 0;
      void v.play();
      return;
    }
    if (v.paused) void v.play();
    else v.pause();
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => {
      setPlaying(true);
      setCenterHidden(true);
      setBarIcon("pause");
    };
    const onPause = () => {
      setPlaying(false);
      if (ended) setBarIcon("restart");
      else setBarIcon("play");
    };
    const onTimeUpdate = () => {
      if (v.currentTime >= LIMIT) {
        setEnded(true);
        v.pause();
        v.currentTime = LIMIT;
        setCenterIcon("restart");
        setCenterHidden(false);
        setBarIcon("restart");
      }
      setTime(Math.min(v.currentTime, LIMIT));
    };
    const onSeeking = () => {
      if (v.currentTime > LIMIT) v.currentTime = LIMIT;
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("seeking", onSeeking);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("seeking", onSeeking);
    };
  }, [ended]);

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const target = Math.max(0, Math.min(LIMIT, pct * LIMIT));
    v.currentTime = target;
    if (target < LIMIT && ended) {
      setEnded(false);
      setBarIcon(v.paused ? "play" : "pause");
    }
    setTime(target);
  };

  const showCover = !playing && (ended || time === 0);

  return (
    <div
      id="rafey-container"
      className={`bg-card-bg border-l-4 border-neon overflow-hidden mb-4 w-fit mx-auto relative group ${
        playing ? "is-playing" : "is-idle"
      }`}
    >
      <video
        ref={videoRef}
        id="rafey-video"
        className="max-h-[80vh] w-auto block"
        preload="metadata"
        playsInline
        poster={COVER_URL}
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showCover && time > 0 && (
        <img
          src={COVER_URL}
          alt="Rafey Alam"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <button
        id="rafey-center-btn"
        onClick={handleCenterClick}
        className={`absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-opacity duration-300 ${
          centerHidden ? "hidden" : ""
        }`}
        aria-label="Play"
      >
        <span className="w-24 h-24 rounded-full bg-black/70 border-2 border-neon flex items-center justify-center">
          {centerIcon === "play" && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#C8FF00">
              <polygon points="7 4 19 12 7 20 7 4" />
            </svg>
          )}
          {centerIcon === "pause" && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#C8FF00">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          )}
          {centerIcon === "restart" && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C8FF00"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <polyline points="3 4 3 10 9 10" />
            </svg>
          )}
        </span>
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 pt-10 pb-4 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={handleCenterClick}
            className="text-white hover:text-neon transition-colors shrink-0"
            aria-label="Play"
          >
            {barIcon === "play" && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
            {barIcon === "pause" && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
            {barIcon === "restart" && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <polyline points="3 4 3 10 9 10" />
              </svg>
            )}
          </button>
          <div
            ref={progressRef}
            onClick={onProgressClick}
            className="flex-1 h-1 bg-white/25 rounded cursor-pointer relative"
          >
            <div
              className="h-full bg-neon rounded"
              style={{ width: `${(time / LIMIT) * 100}%` }}
            />
          </div>
          <span className="text-[11px] text-white font-mono whitespace-nowrap">
            {fmt(time)} / {fmt(LIMIT)}
          </span>
        </div>
      </div>
    </div>
  );
}
