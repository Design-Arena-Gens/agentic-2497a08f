"use client";

import { motion } from "framer-motion";

export function SkillPills({ skills }: { skills: string[] }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
      }}
      className="flex flex-wrap gap-3"
    >
      {skills.map((skill) => (
        <motion.li
          key={skill}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 }
          }}
          className="rounded-full border border-cobalt-500/40 bg-cobalt-500/10 px-4 py-2 text-sm font-medium text-slate-100 shadow shadow-cobalt-500/20"
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
}
