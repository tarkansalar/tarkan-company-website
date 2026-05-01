"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  quizData,
  getBand,
  getStatus,
  BOOKING_URL,
  type QuizQuestion,
} from "@/lib/quiz-data";

type Phase = "questions" | "loading" | "results";

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("questions");
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(8).fill(null)
  );
  const [scores, setScores] = useState<(number | null)[]>(
    new Array(8).fill(null)
  );
  const [labels, setLabels] = useState<string[]>(new Array(8).fill(""));

  const q: QuizQuestion = quizData[qIdx];
  const total = scores.reduce((a, b) => (a || 0) + (b || 0), 0) as number;
  const band = getBand(total);

  function pickAnswer(i: number, score: number, label: string) {
    const a = [...answers];
    const s = [...scores];
    const l = [...labels];
    a[qIdx] = i;
    s[qIdx] = score;
    l[qIdx] = label;
    setAnswers(a);
    setScores(s);
    setLabels(l);
  }

  function next() {
    if (answers[qIdx] === null) return;
    if (qIdx < 7) setQIdx(qIdx + 1);
    else {
      setPhase("loading");
      setTimeout(() => setPhase("results"), 2200);
    }
  }

  if (phase === "loading") return <LoadingScreen />;
  if (phase === "results")
    return (
      <ResultsScreen
        total={total}
        band={band}
        scores={scores as number[]}
        labels={labels}
      />
    );

  return (
    <main className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-8">
      <div className="bg-card-bg border-l-4 border-neon w-full max-w-2xl my-8 p-6 sm:p-10 relative">
        <div className="flex items-center justify-between mb-6">
          <span className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon">
            Q{q.num} OF 8
          </span>
          <Link
            href="/"
            className="font-space font-bold text-sm text-supporting hover:text-white transition-colors"
          >
            ✕ Close
          </Link>
        </div>

        <div className="h-1 bg-white/10 rounded mb-10 overflow-hidden">
          <div
            className="h-full bg-neon transition-[width] duration-300"
            style={{ width: `${((qIdx + 1) / 8) * 100}%` }}
          />
        </div>

        <h2 className="font-space font-bold text-2xl lg:text-3xl text-white mb-8 leading-[1.3]">
          {q.text}
        </h2>

        <div className="space-y-3 mb-8">
          {q.options.map((o, i) => {
            const selected = answers[qIdx] === i;
            return (
              <button
                key={i}
                onClick={() => pickAnswer(i, o.score, o.label)}
                className={
                  selected
                    ? "w-full text-left font-inter text-base p-5 border-2 border-neon bg-neon/10 text-white transition-colors"
                    : "w-full text-left font-inter text-base p-5 border border-white/15 bg-black/40 text-white hover:border-neon hover:bg-neon/5 transition-colors"
                }
              >
                {o.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={answers[qIdx] === null}
          className={`bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors ${
            answers[qIdx] !== null ? "" : "opacity-40 cursor-not-allowed"
          }`}
        >
          {qIdx === 7 ? "See Results" : "Next"}
        </button>
      </div>
    </main>
  );
}

function LoadingScreen() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="font-space font-bold text-xl lg:text-2xl text-white mb-6">
          Analyzing your numbers
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 rounded-full bg-neon animate-bounce" style={{ animationDelay: "0.15s" }} />
          <div className="w-2 h-2 rounded-full bg-neon animate-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>
    </main>
  );
}

function ResultsScreen({
  total,
  band,
  scores,
  labels,
}: {
  total: number;
  band: ReturnType<typeof getBand>;
  scores: number[];
  labels: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      if (!canvasRef.current) return;
      const { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } = await import("chart.js");
      Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
      const chart = new Chart(canvasRef.current, {
        type: "radar",
        data: {
          labels: quizData.map((q) => q.dim),
          datasets: [
            {
              data: scores,
              backgroundColor: band.color + "33",
              borderColor: band.color,
              borderWidth: 2,
              pointBackgroundColor: band.color,
              pointBorderColor: band.color,
              pointRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
              min: 0,
              max: 2,
              ticks: { stepSize: 1, display: false },
              grid: { color: "rgba(255,255,255,0.1)" },
              angleLines: { color: "rgba(255,255,255,0.1)" },
              pointLabels: {
                color: "rgba(255,255,255,0.7)",
                font: { size: 11, family: "Inter, sans-serif" },
              },
            },
          },
          plugins: { legend: { display: false } },
        },
      });
      cleanup = () => chart.destroy();
    })();
    return () => cleanup?.();
  }, [band.color, scores]);

  const exposures: string[] = [];
  if (scores[0] === 0) exposures.push("SKU bloat is compressing your margins");
  if (scores[2] === 0) exposures.push("Dead stock is trapping cash - likely $100K-$1M+");
  if (scores[3] === 0) exposures.push("You don't know your real acquisition cost");
  if (scores[4] === 0) exposures.push("No positioning moat - AI competitors will eat you alive");
  if (scores[5] === 0) exposures.push("You ARE the system - one illness away from crisis");
  if (scores[6] === 0) exposures.push("Channel blindness - you're likely funding your least profitable channel");
  if (scores[7] === 0) exposures.push("No kill discipline - everything stays, nothing gets cut");
  if (!exposures.length && total < 16) exposures.push("Minor optimizations could still unlock significant margin");

  return (
    <main className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl my-8">
        <Link href="/" className="font-space font-bold text-sm text-supporting hover:text-white transition-colors mb-6 inline-block">
          ← Back to site
        </Link>

        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-4">YOUR 80/20 PROFIT SCORE</div>
          <div className="font-space font-extrabold text-6xl lg:text-7xl text-white leading-none">
            {total}
            <span className="text-2xl text-supporting font-bold"> / 16</span>
          </div>
          <div className="font-space font-bold text-2xl lg:text-3xl mt-4 mb-3" style={{ color: band.color }}>
            {band.label}
          </div>
          <p className="font-inter text-[17px] leading-[1.6] text-white">{band.description}</p>
        </div>

        <div className="bg-card-bg border-l-4 border-neon p-8 lg:p-10 mb-6">
          <div className="font-space font-bold text-[11px] tracking-[0.15em] uppercase text-neon mb-6">OPERATIONAL PROFILE</div>
          <div className="max-w-md mx-auto">
            <canvas ref={canvasRef} />
          </div>
          <p className="font-inter text-sm text-supporting text-center mt-4">Your operational profile across 8 dimensions</p>
        </div>

        <div className="space-y-4 mb-6">
          {quizData.map((q, i) => {
            const s = scores[i];
            const st = getStatus(s);
            const ip = q.interps[s as 0 | 1 | 2] ?? q.interps[0];
            return (
              <div key={i} className="bg-card-bg border-l-4 p-6" style={{ borderLeftColor: st.color }}>
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <div className="font-space font-bold text-white text-base">{q.dim}</div>
                  <div className="font-space font-bold text-sm" style={{ color: st.color }}>
                    {s}/2 · {st.text}
                  </div>
                </div>
                <div className="font-inter text-xs text-supporting mb-2">You answered: &ldquo;{labels[i]}&rdquo;</div>
                <div className="font-inter text-sm text-white leading-[1.6]">{ip}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-card-bg border-2 border-neon p-8 lg:p-10">
          <h3 className="font-space font-bold text-2xl text-white mb-3">What This Means</h3>
          <p className="font-inter text-[17px] text-supporting leading-[1.6] mb-6">{band.nextSteps}</p>
          {exposures.length > 0 && (
            <>
              <h4 className="font-space font-bold text-sm text-neon uppercase tracking-wide mb-3">Your biggest exposure areas:</h4>
              <ul className="space-y-2 mb-6">
                {exposures.map((e, i) => (
                  <li key={i} className="border-l-4 border-neon pl-4 font-inter text-[15px] text-white">{e}</li>
                ))}
              </ul>
            </>
          )}
          <p className="font-space font-bold text-lg text-white leading-[1.4] mb-6">
            &ldquo;The 80/20 Bestseller Engine finds these in 48 hours. If it doesn&apos;t find at least 5x what you paid - I keep working until it does.&rdquo;
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block">Book Free Call</a>
          <p className="font-inter text-sm text-supporting mt-3">No pitch. Just clarity on what these numbers mean for your specific business.</p>
        </div>
      </div>
    </main>
  );
}
