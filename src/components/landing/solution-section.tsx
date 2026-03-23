"use client";

import { motion } from "framer-motion";

export function SolutionSection() {
  return (
    <section className="border-b border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          SOLUTION
        </p>
        <h2 className="mb-12 text-center font-sans text-3xl font-bold sm:text-4xl">
          The Interceptor
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[8px] border border-[#262626] bg-[#111111] p-8 sm:p-12"
        >
          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0">
            {/* AI Agent */}
            <div className="flex flex-col items-center">
              <div className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-6 py-3">
                <span className="font-mono text-sm text-white">[ AI Agent ]</span>
              </div>
              <span className="mt-2 font-mono text-[10px] text-[#737373]">
                Millisecond
                <br />
                Latency
              </span>
            </div>

            {/* Arrow */}
            <div className="flex items-center px-2 sm:px-4">
              <div className="hidden h-px w-8 bg-[#555] sm:block" />
              <span className="font-mono text-xs text-[#737373]">
                DECISION REQUEST →
              </span>
              <div className="hidden h-px w-8 bg-[#555] sm:block" />
            </div>

            {/* RuleVault */}
            <div className="flex flex-col items-center">
              <div className="rounded-[4px] border-2 border-[#f59e0b] bg-[#f59e0b]/10 px-6 py-3">
                <span className="font-sans text-sm font-bold text-[#f59e0b]">
                  RuleVault
                </span>
                <br />
                <span className="font-sans text-sm font-bold text-[#f59e0b]">
                  Interceptor
                </span>
                <br />
                <span className="font-mono text-xs text-[#f59e0b]/70">(43ms)</span>
              </div>
              <span className="mt-2 font-mono text-[10px] text-[#737373]">
                Rule Engine /
                <br />
                Policy Store
              </span>
            </div>

            {/* Evaluation arrow */}
            <div className="flex items-center px-2 sm:px-4">
              <span className="font-mono text-xs text-[#737373]">EVALUATION →</span>
            </div>

            {/* Outcomes */}
            <div className="flex flex-col gap-3">
              {/* Approve path */}
              <div className="flex items-center gap-2">
                <span className="rounded-[4px] bg-[#22c55e] px-3 py-1 font-mono text-xs font-bold text-black">
                  APPROVE
                </span>
                <span className="font-mono text-[10px] text-[#737373]">→</span>
                <div className="rounded-[4px] border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-1">
                  <span className="font-mono text-[10px] text-[#22c55e]">
                    Real World
                    <br />
                    Application / Action
                  </span>
                </div>
              </div>
              {/* Block path */}
              <div className="flex items-center gap-2">
                <span className="rounded-[4px] bg-[#ef4444] px-3 py-1 font-mono text-xs font-bold text-white">
                  BLOCK
                </span>
                <span className="font-mono text-[10px] text-[#737373]">✕</span>
                <div className="rounded-[4px] border border-[#ef4444]/30 bg-[#ef4444]/10 px-3 py-1">
                  <span className="font-mono text-[10px] text-[#ef4444]">
                    Dead End /
                    <br />
                    Quarantine Log
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-[#a3a3a3]">
            <strong className="text-white">Not a CCTV. A Bouncer.</strong> — RuleVault
            sits IN the decision path. Decisions never execute if blocked. Other tools
            watch from the sideline and alert after the damage is done. We intercept
            before it happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
