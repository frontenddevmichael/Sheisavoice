"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Lightbox from "./Lightbox";
import { MOMENTS_DATA } from "@/lib/constants";
import type { MomentData } from "@/lib/types";

const FILTER_TABS = [
  { key: "all", label: "All Moments" },
  { key: "special-needs", label: "Special Needs Outreach" },
  { key: "education", label: "Education Support" },
  { key: "female-voice", label: "Female Voice Events" },
  { key: "partnerships", label: "Community Partnerships" },
] as const;

export default function PhotoGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered =
    activeFilter === "all"
      ? MOMENTS_DATA
      : MOMENTS_DATA.filter((m) => m.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper className="py-space-5xl">
      {/* Filter controls */}
      <div className="flex flex-col items-center gap-space-lg mb-space-3xl">
        <div className="flex flex-wrap justify-center gap-space-sm" role="tablist" aria-label="Filter moments">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeFilter === tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-space-md py-space-xs rounded-full font-label-sm text-label-sm font-bold transition-all duration-300 ${
                activeFilter === tab.key
                  ? "bg-primary text-on-primary shadow-md"
                  : "bg-surface-mid text-on-surface-variant hover:bg-surface-high"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="font-label-sm text-label-sm text-on-surface-variant/60">
          Showing{" "}
          <span className="font-bold text-primary">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "moment" : "moments"}
        </p>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
        {filtered.map((item, index) => (
          <PhotoCard
            key={item.id}
            item={item}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filtered}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </SectionWrapper>
  );
}

function PhotoCard({
  item,
  onClick,
}: {
  item: MomentData;
  onClick: () => void;
}) {
  return (
    <article className="group bg-surface-low rounded-2xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 pressable">
      {/* Image area */}
      <div
        className="relative aspect-[4/3] bg-surface-mid cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imgSrc}
          alt={item.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge overlay top-left */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-space-md py-space-2xs rounded-full font-label-xs text-label-xs font-bold backdrop-blur-sm ${item.badgeBg}`}
          >
            {item.categoryLabel}
          </span>
        </div>

        {/* Zoom icon bottom-right on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-surface/60 backdrop-blur-sm flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-on-surface text-lg">zoom_in</span>
          </div>
        </div>
      </div>

      {/* Caption content */}
      <div className="p-space-lg space-y-space-sm">
        <div className="flex items-center gap-space-sm text-on-surface-variant/60">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span className="font-label-xs text-label-xs">{item.date}</span>
          <span className="text-on-surface-variant/30">|</span>
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span className="font-label-xs text-label-xs">{item.location}</span>
        </div>

        <h3 className="font-headline text-headline-xs text-primary">
          {item.caption}
        </h3>

        <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
          {item.note}
        </p>

        <button
          onClick={onClick}
          className="inline-flex items-center gap-space-xs font-label-sm text-label-sm font-bold text-secondary hover:text-primary transition-colors pt-space-xs link-underline"
        >
          <span>View Full Record</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </article>
  );
}
