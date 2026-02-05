"use client";

import { profile } from "@/data/profile";
import { ContactCard } from "@/components/ContactCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { LanguageCard } from "@/components/LanguageCard";
import { Section } from "@/components/Section";
import { SkillPills } from "@/components/SkillPills";
import { Timeline } from "@/components/Timeline";
import { motion } from "framer-motion";

const contactIcons = {
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.25 5.25a2 2 0 0 1 2-2h.8a2 2 0 0 1 1.94 1.6l.41 2.05a2 2 0 0 1-.92 2.12l-.93.58a14.49 14.49 0 0 0 6.65 6.65l.59-.93a2 2 0 0 1 2.11-.92l2.06.41a2 2 0 0 1 1.6 1.94v.8a2 2 0 0 1-2 2h-.72C9.88 19.65 4.35 14.12 2.99 7.03V6.97a2 2 0 0 1 2-1.72h.26Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m7 8 4.62 3.24a1 1 0 0 0 1.16 0L17 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  location: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 19v-7.5l-8-5.5-8 5.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default function Page() {
  return (
    <main className="relative mx-auto max-w-6xl space-y-10 px-6 py-12 md:py-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cobalt-500/40 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-800/20 blur-[150px]" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 p-10 shadow-2xl shadow-black/50"
      >
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
              Veteran Transformer Specialist
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white md:text-5xl">
              {profile.name}
            </h1>
            <p className="text-lg font-medium text-cobalt-200">
              {profile.title}
            </p>
            <p className="max-w-2xl text-base text-slate-200 md:text-lg">
              {profile.summary}
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="h-44 w-44 rounded-full border border-cobalt-500/80 bg-gradient-to-br from-cobalt-500/30 via-blue-500/20 to-amber-400/20 shadow-glow">
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-heading text-xl font-semibold text-white">
                  15+ yrs
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ContactCard
            items={[
              {
                label: "Mobile",
                value: profile.contact.phone,
                icon: contactIcons.phone,
                href: `tel:${profile.contact.phone.replace(/\s/g, "")}`
              },
              {
                label: "Email",
                value: profile.contact.email,
                icon: contactIcons.email,
                href: `mailto:${profile.contact.email}`
              },
              {
                label: "Current Location",
                value: profile.contact.currentLocation,
                icon: contactIcons.location
              },
              {
                label: "Permanent Address",
                value: profile.contact.permanentAddress,
                icon: contactIcons.home
              }
            ]}
          />
        </div>
      </motion.section>

      <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
        <Section
          id="experience"
          title="Professional Experience"
          eyebrow="Career Journey"
          description="Over a decade of leadership in transformer production floors, anchoring build quality, throughput, and safety across Saudi Arabia’s premier manufacturers."
        >
          {profile.experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </Section>

        <div className="space-y-8">
          <Section
            id="skills"
            title="Technical Mastery"
            description="Comprehensive command of high-voltage transformer assembly, diagnostics, and finishing operations."
          >
            <SkillPills skills={profile.skills} />
          </Section>

          <Section
            id="languages"
            title="Languages"
            description="Adaptable communication across multinational project teams and vendors."
          >
            <LanguageCard languages={profile.languages} />
          </Section>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr,1.2fr]">
        <Section
          id="education"
          title="Education & Certifications"
          description="Foundational academics paired with continuous skill-building to keep pace with transformer manufacturing innovation."
        >
          <Timeline
            items={profile.education.map((item) => ({
              title: item.title,
              subtitle: item.institution,
              meta:
                typeof item.completed === "string"
                  ? `Completed ${item.completed}`
                  : item.completed
            }))}
          />
        </Section>

        <Section
          id="interests"
          title="Interests"
          description="Curiosity-driven initiatives that sharpen competitive advantage in transformer design and execution."
        >
          <ul className="space-y-4 text-sm text-slate-300">
            {profile.interests.map((interest) => (
              <li key={interest} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-400" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <footer className="border-t border-slate-800/60 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Precision power transformer
        assembly leadership.
      </footer>
    </main>
  );
}
