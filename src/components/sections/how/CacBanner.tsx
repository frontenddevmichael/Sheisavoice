import { SITE } from "@/lib/constants";

export default function CacBanner() {
  return (
    <section className="w-full bg-surface-lowest py-space-xl">
      <div className="max-w-[var(--max-w-content)] mx-auto px-5 lg:px-12 flex flex-col sm:flex-row items-center justify-center gap-space-md text-center">
        <span className="material-symbols-outlined text-primary text-[20px]">
          verified
        </span>
        <p className="font-body text-body-sm text-on-surface-variant">
          <span className="font-bold text-primary">CAC Registration #{SITE.cacReg}</span>
          {" · "}
          Incorporated with the Corporate Affairs Commission of Nigeria in {SITE.incorporatedYear}.
        </p>
      </div>
    </section>
  );
}
