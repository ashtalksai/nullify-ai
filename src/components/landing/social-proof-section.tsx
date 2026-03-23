"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "RuleVault provides the auditable, secure decision layer we need for regulatory compliance without slowing our innovation.",
    author: "CCO, Top Tier Banking",
  },
  {
    quote:
      "The ability to enforce policy rules before our models even act is a game changer for responsible AI deployment.",
    author: "Head of AI, National Insurance Provider",
  },
  {
    quote:
      "We trust RuleVault for its unshakeable stability and real-time transparency in clinical decision workflows.",
    author: "VP, Clinical Healthcare Solutions",
  },
];

const stats = [
  { value: "847ms", label: "AVG RESPONSE" },
  { value: "99.9%", label: "UPTIME SLA" },
  { value: "7 YR", label: "AUDIT RETENTION" },
  { value: "EU AI ACT", label: "COMPLIANT" },
];

export function SocialProofSection() {
  return (
    <section className="border-b border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          8. SOCIAL PROOF
        </p>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[8px] border border-[#262626] bg-[#111111] p-6"
            >
              <span className="font-sans text-4xl text-[#f59e0b]">&ldquo;</span>
              <p className="mt-2 text-sm leading-relaxed text-[#d4d4d4]">
                {t.quote}
              </p>
              <p className="mt-4 font-mono text-xs text-[#737373]">
                — {t.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-mono text-2xl font-bold text-[#f59e0b] sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#737373]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
