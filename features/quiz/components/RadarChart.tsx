"use client";

import { useEffect, useRef } from "react";
import type { Chart as ChartType } from "chart.js";
import { quizData } from "../data/questions";

type Props = {
  scores: number[];
  color: string;
};

export default function RadarChart({ scores, color }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    let chart: ChartType | null = null;

    (async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

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

      if (cancelled) return;

      Chart.register(
        RadarController,
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
      );

      const existing = Chart.getChart(canvas);
      if (existing) existing.destroy();

      chart = new Chart(canvas, {
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
    })();

    return () => {
      cancelled = true;
      chart?.destroy();
    };
  }, [color, scores]);

  return <canvas ref={canvasRef} />;
}
