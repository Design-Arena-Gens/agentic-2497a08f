"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ContactItem = {
  label: string;
  value: string;
  icon: ReactNode;
  href?: string;
};

export function ContactCard({ items }: { items: ContactItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="grid gap-4 sm:grid-cols-2"
    >
      {items.map((item) => {
        const content = (
          <div className="flex items-start gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 text-sm text-slate-200 transition hover:border-cobalt-500 hover:shadow-glow">
            <div className="mt-0.5 text-amber-400">{item.icon}</div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 font-medium text-white">{item.value}</p>
            </div>
          </div>
        );

        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            rel="noopener noreferrer"
            className="block"
          >
            {content}
          </a>
        ) : (
          <div key={item.label}>{content}</div>
        );
      })}
    </motion.div>
  );
}
