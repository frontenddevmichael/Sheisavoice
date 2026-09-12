"use client";

import { IMPACT_STATS } from "@/lib/constants";
import MotionSection, { MotionChild } from "@/components/ui/Motion";
import useCounter from "@/hooks/useCounter";

export default function ImpactStats() {
  const { ref: counterRef, count } = useCounter(IMPACT_STATS.childrenCount, 1800);

  return (
    <section className="w-full bg-surface-lowest py-space-5xl" id="impact-counter">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12">
        <MotionSection preset="scale">
          <div className="rounded-card-lg bg-surface-low p-space-xl lg:p-space-2xl shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-5 flex flex-col gap-space-md" ref={counterRef}>
                <span className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-lowest shadow-sm w-fit">
                  <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                  </span>
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
                    LIVE Clinical Registry
                  </span>
                </span>

                <div className="flex items-baseline gap-space-sm pt-space-xs">
                  <span className="font-headline text-headline-xl font-bold text-primary leading-none tracking-tighter">
                    {count}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline text-headline-sm text-primary">Children</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">
                      Active Onboarding
                    </span>
                  </div>
                </div>

                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                  As of {IMPACT_STATS.lastUpdated}, {IMPACT_STATS.childrenCount} children with special
                  needs are onboarded and receiving therapy and healthcare access through our partner
                  network, a number that keeps growing with every intake round.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-space-md bg-surface-lowest p-space-lg lg:p-space-xl rounded-card-md shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">monitor_heart</span>
                    <span className="font-label-lg text-label-lg text-primary font-bold">
                      Clinical Care Pipeline Status
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    Continuous Enrollment
                  </span>
                </div>

                <div className="flex flex-col gap-space-sm pt-space-xs">
                  {IMPACT_STATS.therapyPlacements.map((item) => {
                    const barColor =
                      item.color === "primary"
                        ? "bg-primary-container"
                        : item.color === "secondary"
                          ? "bg-secondary-container"
                          : "bg-tertiary-fixed-dim";
                    const textColor =
                      item.color === "primary"
                        ? "text-primary"
                        : item.color === "secondary"
                          ? "text-secondary"
                          : "text-tertiary-container";
                    const label =
                      item.percent === 100
                        ? "100% Placed"
                        : item.color === "secondary"
                          ? "Active Cohort"
                          : "Bi-weekly Circles";

                    return (
                      <div key={item.label} className="flex flex-col gap-1">
                        <div className="flex justify-between text-body-sm font-body">
                          <span className="text-on-surface font-medium">{item.label}</span>
                          <span className={`${textColor} font-bold`}>{label}</span>
                        </div>
                        <div className="w-full bg-surface-mid rounded-full h-3 overflow-hidden">
                          <div
                            className={`${barColor} h-3 rounded-full`}
                            style={{
                              width: `${item.percent}%`,
                              animation: "fill-width 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                              animationDelay: "0.3s",
                              ["--target-width" as string]: `${item.percent}%`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-space-sm flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                  <span>All sessions conducted through accredited partner clinics and licensed practitioners.</span>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
