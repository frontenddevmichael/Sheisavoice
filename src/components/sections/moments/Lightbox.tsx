"use client";

import { useEffect, useCallback } from "react";
import type { MomentData } from "@/lib/types";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: readonly MomentData[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const item = items[currentIndex];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-surface/20 backdrop-blur-sm text-white hover:bg-surface/40 transition-colors flex items-center justify-center"
        aria-label="Close lightbox"
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      {/* Previous */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-surface/20 backdrop-blur-sm text-white hover:bg-surface/40 transition-colors flex items-center justify-center"
        aria-label="Previous image"
      >
        <span className="material-symbols-outlined text-2xl">chevron_left</span>
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-surface/20 backdrop-blur-sm text-white hover:bg-surface/40 transition-colors flex items-center justify-center"
        aria-label="Next image"
      >
        <span className="material-symbols-outlined text-2xl">chevron_right</span>
      </button>

      {/* Main content */}
      <div className="relative max-w-5xl w-full mx-4 md:mx-8 flex flex-col items-center gap-space-lg" onClick={(e) => e.stopPropagation()}>
        {/* Counter */}
        <div className="text-white/70 font-label-sm text-label-sm tracking-wider uppercase">
          {currentIndex + 1} of {items.length}
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[16/10] bg-surface-mid rounded-2xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imgSrc}
            alt={item.alt}
            className="w-full h-full object-contain transition-transform duration-300"
          />
        </div>

        {/* Caption area */}
        <div className="text-center space-y-space-sm w-full max-w-2xl">
          <span
            className={`inline-flex items-center px-space-md py-space-2xs rounded-full font-label-sm text-label-sm font-bold ${item.badgeBg}`}
          >
            {item.categoryLabel}
          </span>
          <h3 className="font-headline text-headline-sm text-white">
            {item.caption}
          </h3>
          <p className="font-body text-body-sm text-white/60">
            {item.date} &middot; {item.location}
          </p>
          <p className="font-body text-body-sm text-white/50 italic">
            {item.note}
          </p>
        </div>

        {/* Safeguarding footer */}
        <p className="font-label-xs text-label-xs text-white/30 text-center max-w-lg">
          All imagery published with verified consent. Identifiable details withheld to protect
          beneficiary dignity.
        </p>
      </div>
    </div>
  );
}
