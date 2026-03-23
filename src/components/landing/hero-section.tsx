"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const codeBlock = `> interceptor.log | grep DECISION
{
  "timestamp": "2024-10-26T14:32:45.123Z",
  "agent_id": "loan_approval_bot_v2",
  "applicant_id": "U98234",
  "credit_score": 680,
  "loan_amount": 125000,
  "model_output": {
    "decision": "APPROVE",
    "confidence": 0.85
  },
  "rule_vault_interception": {
    "status": "INTERCEPTED",
    "evaluation_time": "43ms",
    "rules_checked": ["EU_AI_ACT_ART_10", "FAIR_LENDING_RULE_4"],
    "verdict": {
      "outcome": "BLOCK",
      "reason": "High-risk AI system flag: credit score threshold
        not met. Fair lending policy violation detected.",
      "action_taken": "BLOCKED_TRANSACTION"
    }
  }
}`;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#262626]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/bg-pattern.png)",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
              HERO
            </p>
            <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your AI agents are making decisions right now.{" "}
              <span className="text-[#f59e0b]">Are you sure?</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#a3a3a3]">
              Every decision intercepted, evaluated, approved or blocked in
              milliseconds. EU AI Act compliant.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button className="bg-[#f59e0b] px-6 py-3 font-semibold text-[#0d0d0d] hover:bg-[#d97706] rounded-[4px]">
                  Get Early Access
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="border-[#333] bg-transparent px-6 py-3 text-white hover:bg-[#1a1a1a] rounded-[4px]"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Terminal code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[8px] border border-[#262626] bg-[#0a0a0a] p-1">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-[#262626] px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
              </div>
              <div className="relative overflow-hidden p-4">
                <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-[#a3a3a3] sm:text-xs">
                  {codeBlock}
                </pre>
                {/* Verdict badges */}
                <div className="absolute right-6 top-20">
                  <span className="rounded-[4px] bg-[#22c55e] px-3 py-1 font-mono text-sm font-bold text-black">
                    APPROVE
                  </span>
                </div>
                <div className="absolute right-6 top-36">
                  <span className="rounded-[4px] bg-[#ef4444] px-3 py-1 font-mono text-sm font-bold text-white">
                    BLOCK
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
