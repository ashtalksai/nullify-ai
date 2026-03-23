"use client";

import { motion } from "framer-motion";
import { Eye, FileWarning, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "The Invisible Batch Problem",
    description:
      "Thousands of micro-decisions happen in opaque batches. You only see the aggregate outcome, not the individual policy violations buried within. Total lack of oversight.",
  },
  {
    icon: FileWarning,
    title: "The Audit Trail Gap",
    description:
      "Traditional logs only record the input and final output. They miss the decision logic, the rule evaluation, and the 'why'. Defending in court becomes impossible.",
  },
  {
    icon: TrendingUp,
    title: "The Scale Trap",
    description:
      "Manual review cannot keep pace with AI speed. Scaling your AI means scaling your liability exponentially without automated brakes.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-b border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          PROBLEM
        </p>
        <h2 className="font-sans text-3xl font-bold sm:text-4xl">
          3 ways unmonitored AI destroys compliance
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[8px] border border-[#262626] bg-[#111111] p-6"
            >
              <problem.icon className="mb-4 h-8 w-8 text-[#f59e0b]" />
              <h3 className="mb-3 font-sans text-lg font-semibold">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-[#a3a3a3]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
