"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 shadow-xl shadow-slate-950/40 backdrop-blur",
        className
      )}
    >
      <div className="space-y-4">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/80">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-3xl font-semibold text-white">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base text-slate-300">{description}</p>
        ) : null}
      </div>
      <div className="mt-6 space-y-6">{children}</div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-slate-50/5" />
    </section>
  );
}
