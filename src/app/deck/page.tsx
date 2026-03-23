"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "RuleVault",
    subtitle: "AI Decision Interceptor for Regulated Industries",
    content: "Every AI decision, approved or blocked in milliseconds.",
    bg: "from-[#0d0d0d] to-[#111111]",
  },
  {
    title: "The Problem",
    subtitle: "$30M+ in EU AI Act fines per violation",
    content:
      "AI agents are making thousands of unmonitored decisions per second. No audit trail. No compliance. No brakes. August 2, 2026 is the deadline.",
    bg: "from-[#0d0d0d] to-[#1a0a0a]",
  },
  {
    title: "The Solution",
    subtitle: "Not a CCTV. A Bouncer.",
    content:
      "RuleVault sits IN the decision path — intercepting, evaluating, and blocking non-compliant AI decisions in 43ms. Competitors only watch. We stop.",
    bg: "from-[#0d0d0d] to-[#0d1a0d]",
  },
  {
    title: "How It Works",
    subtitle: "3 steps, 43 milliseconds",
    content:
      "1. AI Agent sends decision payload → 2. RuleVault evaluates against your policies → 3. Verdict returned: APPROVE, BLOCK, or FLAG. Full audit trail generated.",
    bg: "from-[#0d0d0d] to-[#111111]",
  },
  {
    title: "Market",
    subtitle: "EU AI Act creates a $10B+ compliance market",
    content:
      "Every bank, insurer, and hospital deploying AI must comply by August 2, 2026. 5 months away. No incumbent offers in-path interception — only post-hoc monitoring.",
    bg: "from-[#0d0d0d] to-[#1a1a0d]",
  },
  {
    title: "Traction",
    subtitle: "Early signals",
    content:
      "847ms avg response • 99.9% uptime SLA • 7-year audit retention • EU AI Act aligned • Bloomberg Terminal-grade dashboard • Court-admissible audit logs",
    bg: "from-[#0d0d0d] to-[#111111]",
  },
  {
    title: "Business Model",
    subtitle: "Usage-based SaaS",
    content:
      "Free: $0 (100 decisions/day) → Lite: $2K/mo (10K decisions/day) → Pro: $50K/yr (unlimited + 7-year retention + SLA + SSO). Enterprise contracts for regulated industries.",
    bg: "from-[#0d0d0d] to-[#111111]",
  },
  {
    title: "Competitive Advantage",
    subtitle: "Only in-path interceptor in the market",
    content:
      "Fiddler, Aporia, WhyLabs, IBM — all monitoring tools. They watch from the sideline. RuleVault is the only solution that BLOCKS decisions before execution. Bouncer vs CCTV.",
    bg: "from-[#0d0d0d] to-[#0d0d1a]",
  },
  {
    title: "Team",
    subtitle: "Compliance + AI Engineering",
    content:
      "Anya Sharma (CEO) — 12 years financial compliance • Ben Carter (CTO) — ex-Stripe infra • Li Wei — AI Ethics PhD • David Chen — Lead Compliance Architect",
    bg: "from-[#0d0d0d] to-[#111111]",
  },
  {
    title: "The Ask",
    subtitle: "Start free today",
    content:
      "August 2, 2026 is coming. Start intercepting AI decisions now — no credit card required. rulevault.ashketing.com",
    bg: "from-[#0d0d0d] to-[#1a0d00]",
  },
];

export default function DeckPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <div className="relative flex h-screen flex-col bg-[#0d0d0d]">
      {/* Slide */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-b ${slides[current].bg} px-8 text-center`}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <h1 className="font-sans text-5xl font-bold text-[#f59e0b] sm:text-7xl">
              {slides[current].title}
            </h1>
            <h2 className="mt-4 font-sans text-xl text-white sm:text-2xl">
              {slides[current].subtitle}
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
              {slides[current].content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-[#262626] px-8 py-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1 font-mono text-sm text-[#737373] disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>

        {/* Progress dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === current ? "bg-[#f59e0b]" : "bg-[#333]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-1 font-mono text-sm text-[#737373] disabled:opacity-30"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Keyboard navigation */}
      <KeyboardNav onNext={next} onPrev={prev} />
    </div>
  );
}

function KeyboardNav({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev]);
  return null;
}
