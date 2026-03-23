"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  FileText,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ─── EU AI Act Countdown ─── */
function useCountdown() {
  const [days, setDays] = useState(0);
  useEffect(() => {
    const target = new Date("2026-08-02T00:00:00Z").getTime();
    const update = () => setDays(Math.max(0, Math.ceil((target - Date.now()) / 86400000)));
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  return days;
}

/* ─── Slide 1: Cover ─── */
function CoverSlide({ days }: { days: number }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#f59e0b]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">
              AI Decision Interception
            </span>
          </div>
          <h1 className="font-sans text-5xl md:text-7xl font-bold text-[#f59e0b] leading-[1.05]">
            RuleVault
          </h1>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-xl">
            Every AI decision, approved or blocked in milliseconds.
          </p>
          <p className="text-base text-[#a3a3a3] max-w-lg">
            The compliance layer for AI agents in regulated industries.
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#2a2a2a] bg-[#0d0d0d]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
              <span className="ml-2 font-mono text-[10px] text-[#606060]">terminal</span>
            </div>
            <div className="p-4 font-mono text-xs leading-relaxed">
              <p className="text-[#737373]">&gt; POST /api/v1/decide</p>
              <p className="text-[#a3a3a3]">&gt; {`{"agent_id": "loan-processor",`}</p>
              <p className="text-[#a3a3a3] pl-4">{`"decision_type": "loan_approval",`}</p>
              <p className="text-[#a3a3a3] pl-4">{`"payload": {"amount": 150000}}`}</p>
              <div className="my-3 border-t border-[#2a2a2a]" />
              <p className="text-[#ef4444]">{`{"verdict": "BLOCKED",`}</p>
              <p className="text-[#a3a3a3] pl-4">{`"rule": "high-risk-threshold",`}</p>
              <p className="text-[#f59e0b] pl-4">{`"latency_ms": 43}`}</p>
            </div>
          </div>
        </div>
        {/* Countdown bar */}
        <div className="lg:col-span-5 mt-4">
          <div className="bg-[#1a0a00] border border-[#f59e0b]/30 rounded-md px-6 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
              <span className="font-mono text-sm text-[#f59e0b] font-semibold">
                {days} days until EU AI Act enforcement
              </span>
            </div>
            <span className="font-mono text-xs text-[#ef4444]">
              August 2, 2026 · Fines: €30M / 6% global revenue
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 2: The Problem ─── */
function ProblemSlide() {
  const cards = [
    {
      title: "The Invisible Batch Problem",
      quote: `"We ran 50,000 AI loan decisions last month. Three were wrong. We found out two weeks later."`,
      source: "— Head of AI, European bank",
      icon: <EyeOff className="w-5 h-5" />,
    },
    {
      title: "The Audit Trail Gap",
      quote:
        "EU AI Act Article 13: High-risk AI must maintain logs sufficient to enable post-market monitoring. Most teams have no structured audit trail. None are immutable.",
      source: "Article 13, EU AI Act",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "The Scale Trap",
      quote:
        "A human can review 100 AI decisions. An AI agent makes 100,000. Manual oversight doesn't scale. The compliance obligation remains.",
      source: "",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#ef4444]/10 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-[#ef4444]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">The Problem</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 max-w-3xl leading-snug">
          AI agents are making consequential decisions.{" "}
          <span className="text-[#ef4444]">Nobody&apos;s watching in real time.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#3a3a3a] transition-all duration-150"
            >
              <div className="w-8 h-8 rounded-md bg-[#ef4444]/10 flex items-center justify-center text-[#ef4444] mb-4">
                {card.icon}
              </div>
              <h3 className="font-sans text-base font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed italic">{card.quote}</p>
              {card.source && (
                <p className="font-mono text-xs text-[#606060] mt-3">{card.source}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 bg-[#1a0a00] border border-[#f59e0b]/20 rounded-md px-8 py-4">
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-[#f59e0b]">€30M</div>
            <div className="font-mono text-xs text-[#737373]">Fine per violation</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-[#f59e0b]">6%</div>
            <div className="font-mono text-xs text-[#737373]">Global revenue</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-[#f59e0b]">Aug 2, 2026</div>
            <div className="font-mono text-xs text-[#737373]">Enforcement date</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3: The Insight ─── */
function InsightSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
            <Eye className="w-4 h-4 text-[#f59e0b]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">The Insight</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 max-w-3xl leading-snug">
          The industry built surveillance.{" "}
          <span className="text-[#f59e0b]">We built a bouncer.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* CCTV */}
          <div className="bg-[#111111] border border-[#ef4444]/20 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ef4444]">
                🎥 CCTV Camera
              </span>
              <span className="bg-[#ef4444]/10 text-[#ef4444] font-mono text-[10px] px-2 py-0.5 rounded-sm uppercase">
                Existing
              </span>
            </div>
            <p className="text-sm text-[#737373] mb-4">Fiddler AI / Aporia / WhyLabs / IBM</p>
            <ul className="space-y-2">
              {["Watch decisions execute", "Alert after the fact", "Retroactive dashboard", '"This happened"'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                  <X className="w-3.5 h-3.5 text-[#ef4444] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bouncer */}
          <div className="bg-[#111111] border border-[#22c55e]/20 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#22c55e]">
                🚧 The Bouncer
              </span>
              <span className="bg-[#22c55e]/10 text-[#22c55e] font-mono text-[10px] px-2 py-0.5 rounded-sm uppercase">
                RuleVault
              </span>
            </div>
            <p className="text-sm text-[#737373] mb-4">In-path decision interception</p>
            <ul className="space-y-2">
              {["Intercepts before execution", "Evaluates against behavioral rules", "Approves or blocks in <100ms", '"This will not happen"'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                  <Check className="w-3.5 h-3.5 text-[#22c55e] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture */}
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-mono">
            <span className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2 rounded text-[#a3a3a3]">AI Agent</span>
            <ArrowRight className="w-4 h-4 text-[#737373]" />
            <span className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-4 py-2 rounded text-[#f59e0b] font-semibold">RULEVAULT</span>
            <ArrowRight className="w-4 h-4 text-[#737373]" />
            <span className="bg-[#22c55e]/10 border border-[#22c55e]/30 px-4 py-2 rounded text-[#22c55e]">APPROVED → Real World</span>
          </div>
          <div className="flex justify-center mt-3">
            <span className="bg-[#ef4444]/10 border border-[#ef4444]/30 px-4 py-2 rounded text-[#ef4444] font-mono text-sm">
              BLOCKED → Audit Log
            </span>
          </div>
          <p className="text-center font-mono text-xs text-[#737373] mt-4">
            &quot;The EU AI Act doesn&apos;t ask you to monitor. It asks you to control.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 4: The Solution ─── */
function SolutionSlide() {
  const steps = [
    {
      num: "01",
      title: "Define Your Rules",
      desc: "Build behavioral rules in the Rule Builder. IF decision_type = \"loan_approval\" AND amount > 100000 AND risk_score > 0.85 → BLOCK. No code. Drag-and-drop. Test before deploying.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      num: "02",
      title: "Intercept Every Decision",
      desc: "Your AI agent sends a POST request. RuleVault evaluates it against your rules. Returns verdict in <100ms. Decision executes ONLY if approved.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      num: "03",
      title: "Prove Compliance",
      desc: "Every decision — APPROVED, BLOCKED, FLAGGED — is written to an immutable audit log. Court-record format. 7-year retention. Export for regulators on demand.",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#22c55e]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">The Solution</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-snug">
          RuleVault: <span className="text-[#f59e0b]">In-path AI decision interception.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#f59e0b]/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-2xl font-bold text-[#f59e0b]">{step.num}</span>
                <div className="w-8 h-8 rounded-md bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b]">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-sans text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 5: Market Opportunity ─── */
function MarketSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-[#f59e0b]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">Market Opportunity</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 max-w-3xl leading-snug">
          $109.9B market. <span className="text-[#f59e0b]">The deadline creates urgency no marketing can replicate.</span>
        </h2>

        {/* Big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { val: "$109.9B", label: "AI governance by 2034" },
            { val: "65.8%", label: "CAGR" },
            { val: "€30M", label: "Max fine per violation" },
            { val: "Aug 2026", label: "Enforcement date" },
          ].map((m) => (
            <div key={m.label} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5 text-center">
              <div className="font-mono text-2xl md:text-3xl font-bold text-[#f59e0b]">{m.val}</div>
              <div className="font-mono text-xs text-[#737373] mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* ICP */}
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#f59e0b] mb-4">Ideal Customer Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[#737373]">Primary:</span>{" "}
              <span className="text-[#a3a3a3]">European banks, insurers, healthcare companies</span>
            </div>
            <div>
              <span className="text-[#737373]">Size:</span>{" "}
              <span className="text-[#a3a3a3]">200–10,000 employees with AI in production</span>
            </div>
            <div>
              <span className="text-[#737373]">Buyer:</span>{" "}
              <span className="text-[#a3a3a3]">CCO (budget) + Head of AI Engineering (champion)</span>
            </div>
            <div>
              <span className="text-[#737373]">Deal Size:</span>{" "}
              <span className="text-[#a3a3a3]">$50K–$500K/yr</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
            <span className="text-[#737373] text-sm">TAM: </span>
            <span className="text-[#a3a3a3] text-sm">~$200M immediately (2,000+ regulated EU companies deploying high-risk AI)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 6: Competitive Landscape ─── */
function CompetitionSlide() {
  const features = [
    "In-path interception",
    "Blocks before execution",
    "EU AI Act workflows",
    "Self-serve (<1 sprint)",
    "<100ms verdict latency",
    "7-year immutable audit log",
    "Mid-market pricing",
  ];
  const competitors = [
    { name: "Fiddler AI", scores: [false, false, false, false, false, false, false] },
    { name: "Aporia", scores: [false, false, false, true, false, false, true] },
    { name: "WhyLabs", scores: [false, false, false, true, false, false, true] },
    { name: "IBM Watson", scores: [false, false, false, false, false, true, false] },
    { name: "RuleVault", scores: [true, true, true, true, true, true, true], highlight: true },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
            <Target className="w-4 h-4 text-[#f59e0b]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">Competition</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
          Four categories of competitors. <span className="text-[#f59e0b]">None intercept.</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left py-3 px-3 text-[#737373] font-normal text-xs">Feature</th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`text-center py-3 px-2 text-xs font-semibold ${
                      c.highlight ? "text-[#f59e0b]" : "text-[#a3a3a3]"
                    }`}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, fi) => (
                <tr key={feat} className="border-b border-[#1a1a1a]">
                  <td className="py-2.5 px-3 text-[#a3a3a3] text-xs">{feat}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className="text-center py-2.5 px-2">
                      {c.scores[fi] ? (
                        <Check className="w-4 h-4 text-[#22c55e] mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-[#ef4444]/50 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-md px-5 py-3">
          <p className="text-sm text-[#a3a3a3]">
            <span className="text-[#f59e0b] font-semibold">Our moat:</span> In-path interception requires a fundamentally different architecture. Competitors can&apos;t pivot without rebuilding from scratch.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 7: Product Demo ─── */
function ProductSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#f59e0b]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">Product Demo</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Live at <span className="text-[#f59e0b]">rulevault.ashketing.com</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Rule Builder */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg overflow-hidden">
            <div className="px-4 py-2.5 border-b border-[#2a2a2a] bg-[#0d0d0d]">
              <span className="font-mono text-xs text-[#f59e0b]">01 — Rule Builder</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded p-3 font-mono text-xs text-[#a3a3a3] space-y-1">
                <p><span className="text-[#f59e0b]">IF</span> decision_type = &quot;loan_approval&quot;</p>
                <p><span className="text-[#f59e0b]">AND</span> amount &gt; 100,000</p>
                <p><span className="text-[#f59e0b]">AND</span> risk_score &gt; 0.85</p>
                <p><span className="text-[#ef4444]">→ BLOCK</span></p>
              </div>
              <p className="text-xs text-[#737373]">Built in 2 minutes. No code required.</p>
            </div>
          </div>

          {/* API */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg overflow-hidden">
            <div className="px-4 py-2.5 border-b border-[#2a2a2a] bg-[#0d0d0d]">
              <span className="font-mono text-xs text-[#f59e0b]">02 — API in Action</span>
            </div>
            <div className="p-4">
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded p-3 font-mono text-[10px] md:text-xs text-[#a3a3a3] space-y-1 overflow-x-auto">
                <p className="text-[#737373]">$ curl -X POST .../api/v1/decide \</p>
                <p className="pl-2">-H &quot;Authorization: Bearer rv_live_...&quot; \</p>
                <p className="pl-2">{`-d '{"agent_id": "loan-v2",`}</p>
                <p className="pl-6">{`"payload": {"amount": 150000,`}</p>
                <p className="pl-6">{`"risk_score": 0.87}}'`}</p>
              </div>
              <div className="mt-3 bg-[#0d0d0d] border border-[#2a2a2a] rounded p-3 font-mono text-[10px] md:text-xs space-y-1">
                <p className="text-[#ef4444]">{`{ "verdict": "BLOCKED",`}</p>
                <p className="text-[#a3a3a3] pl-2">{`"rule_matched": "high-risk-loan",`}</p>
                <p className="text-[#f59e0b] pl-2">{`"latency_ms": 43 }`}</p>
              </div>
            </div>
          </div>

          {/* Audit Log */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg overflow-hidden">
            <div className="px-4 py-2.5 border-b border-[#2a2a2a] bg-[#0d0d0d]">
              <span className="font-mono text-xs text-[#f59e0b]">03 — Audit Log</span>
            </div>
            <div className="p-4 space-y-2">
              {[
                { id: "dec_01HX...", verdict: "BLOCKED", time: "43ms", color: "#ef4444" },
                { id: "dec_01HY...", verdict: "APPROVED", time: "28ms", color: "#22c55e" },
                { id: "dec_01HZ...", verdict: "FLAGGED", time: "51ms", color: "#f59e0b" },
                { id: "dec_01IA...", verdict: "APPROVED", time: "31ms", color: "#22c55e" },
              ].map((row) => (
                <div key={row.id} className="flex items-center justify-between bg-[#0d0d0d] border border-[#2a2a2a] rounded px-3 py-1.5">
                  <span className="font-mono text-[10px] text-[#606060]">{row.id}</span>
                  <span
                    className="font-mono text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-sm"
                    style={{ color: row.color, backgroundColor: `${row.color}15` }}
                  >
                    {row.verdict}
                  </span>
                  <span className="font-mono text-[10px] text-[#737373]">{row.time}</span>
                </div>
              ))}
              <p className="text-xs text-[#737373] mt-2">
                Immutable. Exportable. Court-admissible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 8: Business Model ─── */
function BusinessModelSlide() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "/forever",
      features: ["1 agent", "100 decisions/day", "API access", "Basic audit log"],
      note: "Get engineers integrated. Free tier is the demo.",
      highlight: false,
    },
    {
      name: "Lite",
      price: "$1,000",
      period: "/month",
      features: ["5 agents", "10,000 decisions/day", "Full audit log", "Alerts + CSV export"],
      note: "Self-serve. Target: Series A-C fintech/healthtech.",
      highlight: true,
    },
    {
      name: "Pro",
      price: "$50,000",
      period: "/year",
      features: ["Unlimited agents", "Unlimited decisions", "7-year retention", "SLA 99.99% + SSO"],
      note: "Sales-led. Banks, insurers, hospital groups.",
      highlight: false,
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-[#f59e0b]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">Business Model</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Land on free. Convert on scale. <span className="text-[#f59e0b]">Expand on compliance.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-6 relative ${
                tier.highlight
                  ? "bg-[#f59e0b] text-[#0d0d0d]"
                  : "bg-[#111111] border border-[#2a2a2a] text-white"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-2.5 left-6 bg-[#0d0d0d] text-[#f59e0b] text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="font-sans font-semibold text-base mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-mono text-3xl font-bold">{tier.price}</span>
                <span className={`font-mono text-sm ${tier.highlight ? "opacity-70" : "text-[#737373]"}`}>
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${tier.highlight ? "opacity-90" : "text-[#a3a3a3]"}`}>
                    <Check className={`w-3.5 h-3.5 shrink-0 ${tier.highlight ? "text-[#0d0d0d]" : "text-[#f59e0b]"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className={`text-xs ${tier.highlight ? "opacity-70" : "text-[#606060]"}`}>{tier.note}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            { val: "200 Lite × $12K", label: "$2.4M ARR" },
            { val: "20 Pro × $100K", label: "$2M ARR" },
            { val: "10 Enterprise × $500K", label: "$5M ARR" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-mono text-xs text-[#737373]">{m.val}</div>
              <div className="font-mono text-lg font-bold text-[#f59e0b]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 9: Traction ─── */
function TractionSlide() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-[#22c55e]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#737373]">Traction & Validation</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
          Built for the market that&apos;s about to <span className="text-[#f59e0b]">have no choice.</span>
        </h2>

        {/* Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { val: "Live", label: "Product shipped" },
            { val: "<100ms", label: "Verdict latency" },
            { val: "Immutable", label: "Audit log" },
            { val: "Court-ready", label: "Export format" },
          ].map((s) => (
            <div key={s.label} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4 text-center">
              <div className="font-mono text-lg font-bold text-[#22c55e]">{s.val}</div>
              <div className="font-mono text-xs text-[#737373] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-4 mb-8">
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <p className="text-sm text-[#a3a3a3] italic leading-relaxed">
              <span className="text-[#f59e0b] text-lg">&ldquo;</span>
              Our legal team reviewed the EU AI Act requirements. We need exactly what RuleVault does — real-time interception, not retroactive monitoring. The question is whether we build it or buy it.
              <span className="text-[#f59e0b] text-lg">&rdquo;</span>
            </p>
            <p className="font-mono text-xs text-[#606060] mt-2">— CCO, European financial services company</p>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <p className="text-sm text-[#a3a3a3] italic leading-relaxed">
              <span className="text-[#f59e0b] text-lg">&ldquo;</span>
              I&apos;ve been looking for something that sits IN the decision path, not alongside it. Every other tool I evaluated watches. This one acts.
              <span className="text-[#f59e0b] text-lg">&rdquo;</span>
            </p>
            <p className="font-mono text-xs text-[#606060] mt-2">— Head of AI Governance, Insurance Group</p>
          </div>
        </div>

        {/* IdeaBrowser scores */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Opportunity", score: "9/10" },
            { label: "Problem", score: "9/10" },
            { label: "Feasibility", score: "8/10" },
            { label: "Why Now", score: "9/10" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-xl font-bold text-[#f59e0b]">{s.score}</div>
              <div className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 10: The Ask ─── */
function AskSlide({ days }: { days: number }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0d0d0d] p-8 md:p-16">
      <div className="max-w-5xl w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-[#f59e0b]" />
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          The window is <span className="text-[#f59e0b] font-mono">{days}</span> days.
        </h2>
        <p className="text-xl text-[#a3a3a3] mb-10">After that, the market is buying.</p>

        {/* Use of funds */}
        <div className="max-w-2xl mx-auto mb-10">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-4">$500K Pre-Seed — Use of Funds</h3>
          <div className="space-y-3">
            {[
              { label: "Engineering", pct: 40, desc: "SDK development, enterprise integrations" },
              { label: "Sales", pct: 30, desc: "Outbound motion, first SDR" },
              { label: "Compliance", pct: 20, desc: "Advisor, EU AI Act specialist" },
              { label: "Operations", pct: 10, desc: "" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#a3a3a3] w-24 text-right">{item.label}</span>
                <div className="flex-1 bg-[#1a1a1a] rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="font-mono text-xs text-[#f59e0b] w-10">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { time: "Month 3", goal: "3 paid Lite — $3K MRR" },
            { time: "Month 6", goal: "First Pro pilot — $50K+" },
            { time: "Month 12", goal: "$500K ARR" },
            { time: "Month 18", goal: "$1M ARR — Seed round" },
          ].map((m) => (
            <div key={m.time} className="bg-[#111111] border border-[#2a2a2a] rounded-lg px-5 py-3 text-left">
              <div className="font-mono text-xs text-[#f59e0b] font-semibold">{m.time}</div>
              <div className="text-sm text-[#a3a3a3]">{m.goal}</div>
            </div>
          ))}
        </div>

        {/* Countdown bar */}
        <div className="bg-[#1a0a00] border border-[#f59e0b]/30 rounded-md px-6 py-4">
          <p className="font-mono text-sm text-[#f59e0b] font-semibold mb-2">
            {days} days until EU AI Act enforcement
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="https://rulevault.ashketing.com/contact" className="bg-[#f59e0b] text-[#0d0d0d] font-semibold px-4 py-2 rounded-md hover:bg-[#d97706] transition">
              Book a Compliance Assessment
            </a>
            <a href="https://rulevault.ashketing.com/signup" className="border border-[#f59e0b]/30 text-[#f59e0b] px-4 py-2 rounded-md hover:bg-[#f59e0b]/10 transition">
              Start Free Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Deck Page ─── */
export default function DeckPage() {
  const days = useCountdown();
  const [current, setCurrent] = useState(0);
  const totalSlides = 10;

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, totalSlides - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  // Keyboard + touch navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [next, prev]);

  const slideComponents = [
    <CoverSlide key="cover" days={days} />,
    <ProblemSlide key="problem" />,
    <InsightSlide key="insight" />,
    <SolutionSlide key="solution" />,
    <MarketSlide key="market" />,
    <CompetitionSlide key="competition" />,
    <ProductSlide key="product" />,
    <BusinessModelSlide key="business" />,
    <TractionSlide key="traction" />,
    <AskSlide key="ask" days={days} />,
  ];

  return (
    <div className="relative flex h-screen flex-col bg-[#0d0d0d] overflow-hidden select-none">
      {/* Slide */}
      <div className="flex flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full w-full"
          >
            {slideComponents[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between border-t border-[#262626] px-6 md:px-8 py-3 bg-[#0d0d0d]">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1 font-mono text-xs text-[#737373] hover:text-[#f59e0b] disabled:opacity-30 disabled:hover:text-[#737373] transition"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Prev
        </button>

        {/* Progress dots */}
        <div className="flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-[#f59e0b] w-6" : "bg-[#333] hover:bg-[#555]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === totalSlides - 1}
          className="flex items-center gap-1 font-mono text-xs text-[#737373] hover:text-[#f59e0b] disabled:opacity-30 disabled:hover:text-[#737373] transition"
        >
          Next <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
