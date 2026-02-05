"use client";

type Language = {
  name: string;
  proficiency: string;
};

export function LanguageCard({ languages }: { languages: Language[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {languages.map((language) => (
        <div
          key={language.name}
          className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4 text-center shadow shadow-slate-950/30"
        >
          <p className="font-heading text-lg font-semibold text-white">
            {language.name}
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-amber-400/90">
            {language.proficiency}
          </p>
        </div>
      ))}
    </div>
  );
}
