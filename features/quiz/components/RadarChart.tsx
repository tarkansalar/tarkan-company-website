"use client";

import { useEffect, useRef } from "react";
import { quizData } from "../data/questions";

type Props = {
  scores: number[];
  color: string;
};

export default function RadarChart({ scores, color }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      if (!canvasRef.current) return;
      const {
        Chart,
        RadarController,
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend,
      } = await import("chart.js");
      Chart.register(
        RadarController,
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
      );
      const chart = new Chart(canvasRef.current, {
        type: "radar",
        data: {
          labels: quizData.map((q) => q.dim),
          datasets: [
            {
              data: scores,
              backgroundColor: color + "33",
              borderColor: color,
              borderWidth: 2,
              pointBackgroundColor: color,
              pointBorderColor: color,
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
  }, [color, scores]);

  return <canvas ref={canvasRef} />;
}
