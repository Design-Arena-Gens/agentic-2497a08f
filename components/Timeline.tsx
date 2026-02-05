"use client";

type TimelineItem = {
  title: string;
  subtitle: string;
  meta?: string | boolean;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-slate-700/60 pl-6">
      {items.map((item, index) => (
        <li key={item.title} className="mb-6 last:mb-0">
          <div className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border border-amber-400/70 bg-amber-400/80 shadow shadow-amber-400/40" />
          <h3 className="font-heading text-lg font-semibold text-white">
            {item.title}
          </h3>
          <p className="text-sm text-slate-300">{item.subtitle}</p>
          {item.meta ? (
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
              {typeof item.meta === "string"
                ? item.meta
                : index === 0
                  ? "Completed"
                  : "In Progress"}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
