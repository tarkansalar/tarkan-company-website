"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  FORMAT_FLOWS,
  GUMMY_LINE,
  SERVICE_FLOWS,
  type ProcessFlow,
  type ProcessPhoto,
  type ProcessStep,
} from "../data/production";
import { CANGGUS_ASSET_BASE } from "../data/catalog";
import Icon, { IconTile, type IconName } from "./Icon";

// ------------------------------------------------------------------ tabs
type Tab = { id: string; label: string; icon?: IconName };

function Tabs({
  tabs,
  active,
  onChange,
  label,
  idBase,
}: {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
  label: string;
  idBase: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = tabs.findIndex((t) => t.id === active);
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    if (n < 0) return;
    e.preventDefault();
    onChange(tabs[n].id);
    refs.current[n]?.focus();
  };
  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={onKey}
      className="-mx-6 px-6 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:flex-wrap"
    >
      {tabs.map((t, i) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${idBase}-tab-${t.id}`}
            aria-selected={on}
            aria-controls={`${idBase}-panel`}
            tabIndex={on ? 0 : -1}
            onClick={() => onChange(t.id)}
            className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] ${
              on
                ? "border-[#282828] bg-[#282828] text-white"
                : "border-[#282828]/12 bg-white text-[#282828] hover:border-[#fb6ba8] hover:text-[#e0558f]"
            }`}
          >
            {t.icon && <Icon name={t.icon} className="h-4 w-4 text-[#fb6ba8]" />}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

// ------------------------------------------------------------- QC badges
function QcBadge({ step }: { step: ProcessStep }) {
  if (!step.qc) return null;
  if (step.qc.kind === "ccp") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#282828] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
        <Icon name="shieldCheck" className="h-3.5 w-3.5 text-[#fb6ba8]" />
        {step.qc.label} · Critical control point
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fb6ba8]/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#c93d78]">
      <Icon name="scanSearch" className="h-3.5 w-3.5" />
      Inspection
    </span>
  );
}

function Branch({ step }: { step: ProcessStep }) {
  if (!step.unqualified) return null;
  return (
    <ul className="mt-2.5 flex flex-wrap gap-2 text-[12px] font-semibold">
      <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-[#282828]/10 text-[#282828]">
        <Icon name="check" className="h-3.5 w-3.5 text-[#fb6ba8]" strokeWidth={2.25} />
        Qualified: {step.pass === "storage" ? "to storage" : "continue"}
      </li>
      <li className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-[#282828]/10 text-[#282828]/75">
        <Icon name="circleX" className="h-3.5 w-3.5 text-[#282828]/60" />
        Unqualified: unqualified treatment
      </li>
    </ul>
  );
}

// ------------------------------------------------------- service timeline
function ServiceTimeline({ flow }: { flow: ProcessFlow }) {
  return (
    <ol className="mt-8 grid gap-x-4 gap-y-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-4">
      {flow.steps.map((s, i) => {
        const last = i === flow.steps.length - 1;
        return (
          <li key={s.name} className="relative flex gap-4 pb-6 sm:pb-4 lg:pb-0">
            {/* vertical connector on phones */}
            {!last && (
              <span aria-hidden="true" className="sm:hidden absolute left-[21px] top-12 bottom-0 w-px bg-[#fb6ba8]/30" />
            )}
            <div className="flex h-full w-full gap-4 rounded-3xl sm:bg-white sm:p-5 sm:ring-1 sm:ring-[#282828]/8 sm:shadow-[0_24px_48px_-40px_rgba(40,40,40,0.4)]">
              <span className="relative">
                <IconTile name={s.icon} />
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#282828] px-1 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[15px] font-bold leading-[1.35] text-[#282828]">{s.name}</p>
                {s.note && <p className="mt-1 text-[13px] leading-[1.5] text-[#282828]/70">{s.note}</p>}
                {s.qc && (
                  <div className="mt-2">
                    <QcBadge step={s} />
                  </div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

// ---------------------------------------------------- dosage-form panels
function Photos({ photos, label }: { photos: ProcessPhoto[]; label: string }) {
  if (!photos.length) return null;
  const [main, ...rest] = photos;
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl bg-[#fdf0f6]">
        <Image
          src={`${CANGGUS_ASSET_BASE}${main.src}`}
          alt={`${label}: ${main.alt}`}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={main.blur}
          sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, 100vw"
          className="object-cover"
        />
      </div>
      {rest.map((p) => (
        <div key={p.src} className="relative aspect-square overflow-hidden rounded-3xl bg-[#fdf0f6]">
          <Image
            src={`${CANGGUS_ASSET_BASE}${p.src}`}
            alt={`${label}: ${p.alt}`}
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={p.blur}
            sizes="(min-width: 1280px) 260px, (min-width: 1024px) 21vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function FormatSteps({ flow }: { flow: ProcessFlow }) {
  const lanes = flow.steps.filter((s) => s.lane);
  const main = flow.steps.filter((s) => !s.lane);
  return (
    <div>
      {lanes.length > 0 && (
        <div className="mb-6 rounded-3xl bg-white p-5 ring-1 ring-[#282828]/8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">
            <Icon name="gitBranch" className="h-4 w-4" />
            Parallel preparation
          </p>
          <ul className="mt-4 space-y-3">
            {lanes.map((s) => (
              <li key={s.name} className="flex items-start gap-3">
                <IconTile name={s.icon} size="sm" className="mt-0.5" />
                <span className="text-[14px] leading-[1.5] text-[#282828]">
                  <span className="font-semibold">{s.name}</span>
                  {s.joinsAt && (
                    <span className="block text-[13px] text-[#282828]/70">{`Joins the main line at ${s.joinsAt === "Seal" ? "sealing" : s.joinsAt.toLowerCase()}`}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ol className="relative">
        {main.map((s, i) => {
          const last = i === main.length - 1;
          const qc = Boolean(s.qc);
          return (
            <li key={s.name} className="relative flex gap-4 pb-5 last:pb-0">
              {!last && <span aria-hidden="true" className="absolute left-[21px] top-12 bottom-0 w-px bg-[#fb6ba8]/30" />}
              <span className="relative">
                <IconTile
                  name={s.icon}
                  className={qc ? "!bg-[#282828] !text-[#fb6ba8] !ring-[#282828]" : ""}
                />
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-[#282828] ring-1 ring-[#282828]/15">
                  {i + 1}
                </span>
              </span>
              <div
                className={`min-w-0 flex-1 rounded-2xl px-4 py-3 ${qc ? "bg-white ring-1 ring-[#fb6ba8]/30 shadow-[0_18px_36px_-30px_rgba(251,107,168,0.8)]" : ""}`}
              >
                <p className="text-[15px] font-bold leading-[1.35] text-[#282828]">{s.name}</p>
                {s.note && <p className="mt-1 text-[13px] leading-[1.5] text-[#282828]/70">{s.note}</p>}
                {s.qc && (
                  <div className="mt-2">
                    <QcBadge step={s} />
                  </div>
                )}
                <Branch step={s} />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const FORMAT_ICON: Record<string, IconName> = {
  gummies: "candy",
  "capsule-making": "pill",
  "drops-production": "droplet",
  "powder-production": "layers",
};

export default function ProductionFlows() {
  const base = useId().replace(/:/g, "");
  const [service, setService] = useState(SERVICE_FLOWS[0].id);
  const [format, setFormat] = useState<string>(GUMMY_LINE.id);

  const sFlow = SERVICE_FLOWS.find((f) => f.id === service) ?? SERVICE_FLOWS[0];
  const fFlow = FORMAT_FLOWS.find((f) => f.id === format);

  const formatTabs: Tab[] = [
    { id: GUMMY_LINE.id, label: GUMMY_LINE.label, icon: FORMAT_ICON.gummies },
    ...FORMAT_FLOWS.map((f) => ({ id: f.id, label: f.label, icon: FORMAT_ICON[f.id] })),
  ];

  return (
    <>
      {/* 1. Service flow: request to delivery */}
      <div className="mt-12 lg:mt-14">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">Service flow</h3>
        <div className="mt-5">
          <Tabs
            tabs={SERVICE_FLOWS.map((f) => ({ id: f.id, label: f.label }))}
            active={service}
            onChange={setService}
            label="Service flows"
            idBase={`${base}-svc`}
          />
        </div>
        <div
          role="tabpanel"
          id={`${base}-svc-panel`}
          aria-labelledby={`${base}-svc-tab-${sFlow.id}`}
          tabIndex={0}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] rounded-3xl"
        >
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] leading-[1.5] text-[#282828]/80">
            <span className="font-semibold text-[#282828]">{sFlow.title}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-semibold ring-1 ring-[#282828]/10">
              <Icon name="factory" className="h-3.5 w-3.5 text-[#fb6ba8]" />
              {sFlow.facility}
            </span>
            <span className="text-[13px] text-[#282828]/65">{sFlow.steps.length} steps</span>
          </p>
          <ServiceTimeline flow={sFlow} />
        </div>
      </div>

      {/* 2. By dosage form */}
      <div className="mt-20 lg:mt-24">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">By dosage form</h3>
        <div className="mt-5">
          <Tabs tabs={formatTabs} active={format} onChange={setFormat} label="Dosage forms" idBase={`${base}-fmt`} />
        </div>
        <div
          role="tabpanel"
          id={`${base}-fmt-panel`}
          aria-labelledby={`${base}-fmt-tab-${format}`}
          tabIndex={0}
          className="mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] rounded-3xl"
        >
          <div>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] leading-[1.5] text-[#282828]/80 mb-6">
              <span className="font-semibold text-[#282828]">{fFlow ? fFlow.title : GUMMY_LINE.title}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-semibold ring-1 ring-[#282828]/10">
                <Icon name="factory" className="h-3.5 w-3.5 text-[#fb6ba8]" />
                {fFlow ? fFlow.facility : GUMMY_LINE.facility}
              </span>
            </p>
            {fFlow ? (
              <FormatSteps flow={fFlow} />
            ) : (
              <ul className="space-y-4">
                {GUMMY_LINE.facts.map((f, i) => (
                  <li key={f} className="flex items-start gap-4 rounded-2xl bg-white p-4 ring-1 ring-[#282828]/8">
                    <IconTile name={i === 0 ? "factory" : "candy"} className="mt-0.5" />
                    <span className="text-[15px] leading-[1.55] text-[#282828]">{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Photos
            key={format}
            photos={fFlow ? fFlow.photos : GUMMY_LINE.photos}
            label={fFlow ? fFlow.label : GUMMY_LINE.label}
          />
        </div>

        {/* Legend */}
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-[#282828]/75" aria-label="Legend">
          <li className="inline-flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#282828]">
              <Icon name="shieldCheck" className="h-3.5 w-3.5 text-[#fb6ba8]" />
            </span>
            CCP: critical control point
          </li>
          <li className="inline-flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fb6ba8]/12 text-[#c93d78]">
              <Icon name="scanSearch" className="h-3.5 w-3.5" />
            </span>
            Inspection step
          </li>
          <li className="inline-flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-[#282828]/10">
              <Icon name="circleX" className="h-3.5 w-3.5 text-[#282828]/60" />
            </span>
            Unqualified product goes to unqualified treatment
          </li>
        </ul>
      </div>
    </>
  );
}
