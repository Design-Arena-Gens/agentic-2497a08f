"use client";

import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { role, company, location, period, bullets } = experience;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-white">
            {role}
          </h3>
          <p className="text-sm font-medium text-amber-400">{company}</p>
        </div>
        <div className="text-sm text-slate-400 text-right sm:text-left">
          <p>{period}</p>
          <p className="text-slate-500">{location}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cobalt-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
