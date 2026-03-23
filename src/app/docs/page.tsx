"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  BarChart3,
  Target,
  Megaphone,
  Palette,
  Presentation,
  ExternalLink,
  Github,
  Check,
  X,
  Shield,
  Zap,
  FileText,
  Clock,
  TrendingUp,
  DollarSign,
  Users,
  Mail,
  ChevronRight,
  Menu,
  X as XIcon,
} from "lucide-react";

/* ─── Section definitions ─── */
const sections = [
  { id: "research", title: "Research", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "gtm", title: "GTM Plan", icon: <Target className="w-4 h-4" /> },
  { id: "marketing", title: "Marketing", icon: <Megaphone className="w-4 h-4" /> },
  { id: "brand", title: "Brand", icon: <Palette className="w-4 h-4" /> },
  { id: "pitch", title: "Pitch Deck", icon: <Presentation className="w-4 h-4" /> },
];

/* ─── Google Doc Links ─── */
const DOC_LINKS = {
  research: "https://docs.google.com/document/d/1l_jMWPMVHQ0VnpgnoRKFiqHyaS-ys3QVyN45pSyKX3A/edit",
  enrichment: "https://docs.google.com/document/d/1rTco9UOIeJFFUv5unay9mztphNhQU3SrTHCf2AofgPY/edit",
  gtm: "https://docs.google.com/document/d/1fDZa_49UeSmptrdHK5L1uTiBuwagzJxebQtdVTiwNh8/edit",
  marketing: "https://docs.google.com/document/d/19RwEHYe4Eum0pSplP0vRRJ419_5pZaK4lFy6LzCaTqU/edit",
  brand: "https://docs.google.com/document/d/16DPOVFm2Gb7nWwjEE6-2aSMS9PyJzaZKJLuLi-UjL7M/edit",
  pitchDeck: "https://docs.google.com/document/d/1u7ML2-APtqFI4jX4iG2LJ8xlUIvaAhfp9M01TX0J4cU/edit",
};

function DocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#f59e0b]/30 text-[#a3a3a3] hover:text-[#f59e0b] text-xs font-mono px-3 py-1.5 rounded-md transition"
    >
      <ExternalLink className="w-3 h-3" /> {label}
    </a>
  );
}

/* ─── Research Section ─── */
function ResearchSection() {
  return (
    <div className="space-y-10">
      {/* Executive Summary */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">Research Brief — Nullify AI</h2>
          <div className="flex gap-2">
            <DocLink href={DOC_LINKS.research} label="Research Doc" />
            <DocLink href={DOC_LINKS.enrichment} label="Enrichment Doc" />
          </div>
        </div>
        <p className="text-sm text-[#737373] mb-6">AI Decision Monitoring for Regulated Industries · March 2026</p>

        <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-5 mb-8">
          <p className="text-sm text-[#a3a3a3] leading-relaxed">
            Nullify AI sits between an AI agent and the real world. Every decision gets intercepted, evaluated against behavioral rules, and either approved or blocked before it executes. A loan approval agent that starts accepting applications outside its risk parameters gets caught before the first bad loan funds.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-[#22c55e]/10 text-[#22c55e] font-mono text-xs px-2 py-0.5 rounded-sm font-semibold">
              VERDICT: GO ✅
            </span>
            <span className="font-mono text-xs text-[#737373]">Score: 86/100</span>
          </div>
        </div>
      </div>

      {/* IdeaBrowser Scores */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">IdeaBrowser Scores</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { dim: "Opportunity", score: "9/10", label: "Exceptional" },
            { dim: "Problem", score: "9/10", label: "Severe Pain" },
            { dim: "Feasibility", score: "8/10", label: "Manageable" },
            { dim: "Why Now", score: "9/10", label: "Perfect Timing" },
          ].map((s) => (
            <div key={s.dim} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4 text-center">
              <div className="font-mono text-xl font-bold text-[#f59e0b]">{s.score}</div>
              <div className="text-sm text-white font-medium">{s.dim}</div>
              <div className="font-mono text-[10px] text-[#737373] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Market */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Market Opportunity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#f59e0b] text-[#0d0d0d] rounded-lg p-5">
            <span className="font-mono text-xs uppercase opacity-70">TAM</span>
            <div className="text-3xl font-bold font-mono">$109.9B</div>
            <div className="text-sm opacity-80">AI governance by 2034</div>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373] uppercase">CAGR</span>
            <div className="text-3xl font-bold font-mono text-white">65.8%</div>
            <div className="text-sm text-[#a3a3a3]">Fastest growing compliance segment</div>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373] uppercase">Revenue Potential</span>
            <div className="text-3xl font-bold font-mono text-white">$$$$</div>
            <div className="text-sm text-[#a3a3a3]">$10M–$100M ARR</div>
          </div>
        </div>
      </div>

      {/* Keywords */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Keyword Validation</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left py-2 px-3 text-[#737373] text-xs font-normal">Keyword</th>
                <th className="text-right py-2 px-3 text-[#737373] text-xs font-normal">Volume</th>
                <th className="text-center py-2 px-3 text-[#737373] text-xs font-normal">Competition</th>
                <th className="text-right py-2 px-3 text-[#737373] text-xs font-normal">Growth</th>
              </tr>
            </thead>
            <tbody>
              {[
                { kw: "ai security", vol: "9,900", comp: "MEDIUM", growth: "+519%" },
                { kw: "real-time monitoring", vol: "3,600", comp: "LOW", growth: "—" },
                { kw: "security in ai", vol: "2,400", comp: "MEDIUM", growth: "—" },
                { kw: "ai powered cybersecurity", vol: "720", comp: "LOW", growth: "Fast growing" },
                { kw: "securing ai", vol: "720", comp: "LOW", growth: "Fast growing" },
              ].map((k) => (
                <tr key={k.kw} className="border-b border-[#1a1a1a]">
                  <td className="py-2 px-3 text-[#a3a3a3]">{k.kw}</td>
                  <td className="py-2 px-3 text-[#f59e0b] text-right">{k.vol}</td>
                  <td className="py-2 px-3 text-center text-[#a3a3a3]">{k.comp}</td>
                  <td className="py-2 px-3 text-right text-[#22c55e]">{k.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitor Analysis */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Competitive Landscape</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[
            { name: "Fiddler AI", what: "AI observability & monitoring", weakness: "Retroactive — catches problems AFTER they happen" },
            { name: "Aporia", what: "LLM guardrails & content safety", weakness: "Focused on LLM chatbots, not structured decision monitoring" },
            { name: "WhyLabs", what: "Open-source AI observability", weakness: "DIY, no turnkey compliance workflow" },
            { name: "IBM OpenScale", what: "Enterprise AI governance suite", weakness: "6–18 month implementation, $100K+ contracts" },
          ].map((c) => (
            <div key={c.name} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
              <h4 className="font-semibold text-white text-sm">{c.name}</h4>
              <p className="text-xs text-[#737373] mt-1">{c.what}</p>
              <p className="text-xs text-[#ef4444] mt-2 flex items-start gap-1.5">
                <X className="w-3 h-3 shrink-0 mt-0.5" /> {c.weakness}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-4">
          <p className="text-sm text-[#a3a3a3]">
            <span className="text-[#f59e0b] font-semibold">What they all miss:</span> Real-time BLOCKING. They monitor and alert — nobody intercepts and blocks decisions BEFORE execution. RuleVault is the ONLY tool that sits IN the decision path.
          </p>
        </div>
      </div>

      {/* Why Now */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Why Now</h3>
        <ul className="space-y-2">
          {[
            "EU AI Act mandates real-time monitoring for high-risk AI systems by August 2, 2026 — 5 months away",
            "High-risk AI = loan approvals, insurance claims, medical triage, hiring, credit scoring",
            "Every major enterprise deploying AI in BFSI/healthcare must comply or face massive fines",
            "Companies that build compliance infrastructure BEFORE the mandate have it running when competitors are scrambling",
            "\"One compliance failure in a regulated industry costs more than a decade of the subscription\"",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
              <ChevronRight className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── GTM Section ─── */
function GtmSection() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">GTM Plan — RuleVault</h2>
          <DocLink href={DOC_LINKS.gtm} label="View in Google Docs" />
        </div>
        <p className="text-sm text-[#737373] mb-6">Go-to-Market Strategy · March 2026</p>

        <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-5 mb-8">
          <p className="text-sm text-[#a3a3a3] leading-relaxed">
            RuleVault is an AI decision interceptor for regulated industries. It sits in the decision path and approves or blocks AI agent decisions in milliseconds. The EU AI Act deadline is August 2, 2026 — every bank, insurer, and hospital deploying AI agents MUST have real-time decision monitoring or face fines of €30M or 6% global revenue.
          </p>
        </div>
      </div>

      {/* Buyer Analysis */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Buyer Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#f59e0b] text-[#0d0d0d] rounded-lg p-5">
            <span className="font-mono text-xs uppercase opacity-70">Primary Buyer</span>
            <h4 className="text-lg font-bold mt-1">The Compliance Buyer</h4>
            <p className="text-sm opacity-80 mt-2">CCO, Head of AI Risk, DPO at European banks, insurers, hospitals with AI in production.</p>
            <p className="text-sm opacity-80 mt-2"><strong>Budget:</strong> $50K–$500K/yr</p>
            <p className="text-sm opacity-80 mt-2"><strong>Trigger:</strong> Regulatory deadline, board scrutiny, an AI incident</p>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373] uppercase">Secondary Buyer</span>
            <h4 className="text-lg font-bold text-white mt-1">The Technical Evaluator</h4>
            <p className="text-sm text-[#a3a3a3] mt-2">Head of AI Engineering, CTO, Head of ML Platform. They need an API they can drop in without rearchitecting.</p>
            <p className="text-sm text-[#a3a3a3] mt-2"><strong className="text-white">Trigger:</strong> CCO says &quot;fix this before August.&quot;</p>
          </div>
        </div>
      </div>

      {/* Channel Strategy */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Channel Strategy</h3>
        <div className="space-y-3">
          {[
            { label: "PRIMARY", name: "Cold Email Outbound", desc: "20 targeted emails/day to CCOs at BFSI/healthcare. 5-touch sequence. 5% reply rate target.", metric: "1 pilot per 10 qualified conversations" },
            { label: "PRIMARY", name: "LinkedIn Outbound", desc: "3 posts/week + 10 personalized DMs/day to Compliance and AI Risk profiles.", metric: "Authority building + direct pipeline" },
            { label: "SECONDARY", name: "Developer Communities", desc: "Show HN, r/MachineLearning, LangChain Discord. Bottom-up pull from technical evaluators.", metric: "5+ community threads with engagement" },
            { label: "SECONDARY", name: "Content/SEO", desc: "2 articles/week. Keywords: \"ai security\" (9.9K, +519%), \"EU AI Act compliance\".", metric: "1,000 organic sessions/month by Month 3" },
          ].map((ch) => (
            <div key={ch.name} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4 flex flex-col md:flex-row md:items-start gap-3">
              <span className={`font-mono text-[10px] px-2 py-0.5 rounded-sm shrink-0 ${ch.label === "PRIMARY" ? "bg-[#f59e0b]/10 text-[#f59e0b]" : "bg-[#1a1a1a] text-[#737373]"}`}>
                {ch.label}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white">{ch.name}</h4>
                <p className="text-xs text-[#a3a3a3] mt-1">{ch.desc}</p>
                <p className="font-mono text-[10px] text-[#737373] mt-2">Metric: {ch.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Launch Week */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Launch Week Plan</h3>
        <div className="flex flex-col md:flex-row gap-4">
          {[
            { day: "Day 1", items: ["Product Hunt launch", "Show HN post", "Reddit posts (r/ML, r/SaaS)", "First 20 cold emails", "LinkedIn founder thread"] },
            { day: "Day 2-3", items: ["Respond to all comments", "40 more cold emails", "10 LinkedIn DMs", "LangChain Discord"] },
            { day: "Day 4-7", items: ["Twitter/X thread", "Continue email outreach", "First SEO article", "Review metrics", "Book intro calls"] },
          ].map((d) => (
            <div key={d.day} className="flex-1 border-l-2 border-[#f59e0b]/30 pl-4">
              <span className="font-mono text-xs text-[#f59e0b] font-semibold">{d.day}</span>
              <ul className="mt-2 space-y-1">
                {d.items.map((item, i) => (
                  <li key={i} className="text-xs text-[#a3a3a3] flex items-start gap-1.5">
                    <span className="text-[#737373]">□</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { period: "Week 1", items: ["PH: 150+ upvotes", "HN: 50+ points", "5+ email replies", "3+ LinkedIn responses"] },
            { period: "Month 1", items: ["50+ free signups", "10+ demo calls", "5+ qualified pipeline", "1+ pilot negotiation"] },
            { period: "Month 3", items: ["5+ Lite customers ($5K ARR)", "1 Pro pilot ($50K)", "1,000+ organic traffic/mo", "200+ free users"] },
          ].map((m) => (
            <div key={m.period} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
              <h4 className="font-mono text-xs text-[#f59e0b] font-semibold mb-2">{m.period}</h4>
              <ul className="space-y-1.5">
                {m.items.map((item, i) => (
                  <li key={i} className="text-xs text-[#a3a3a3] flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#22c55e] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Month 1 Budget</h3>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <div><span className="text-[#737373]">Email tooling:</span> <span className="font-mono text-[#a3a3a3]">$100/mo</span></div>
            <div><span className="text-[#737373]">LinkedIn Sales Nav:</span> <span className="font-mono text-[#a3a3a3]">$99/mo</span></div>
            <div><span className="text-[#737373]">SEO content:</span> <span className="font-mono text-[#a3a3a3]">$0</span></div>
            <div><span className="text-[#737373]">PH promotion:</span> <span className="font-mono text-[#a3a3a3]">$0</span></div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#2a2a2a]">
            <span className="font-mono text-lg font-bold text-[#f59e0b]">~$200</span>
            <span className="text-sm text-[#737373] ml-2">total Month 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Marketing Section ─── */
function MarketingSection() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">Marketing Plan — RuleVault</h2>
          <DocLink href={DOC_LINKS.marketing} label="View in Google Docs" />
        </div>
        <p className="text-sm text-[#737373] mb-6">7 Growth Motions Analysis · March 2026</p>
      </div>

      {/* Positioning */}
      <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-6">
        <h3 className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-3">Positioning Statement</h3>
        <div className="space-y-1 text-sm text-[#a3a3a3]">
          <p><span className="text-[#f59e0b] font-semibold">For</span> CCOs and AI teams at regulated enterprises</p>
          <p><span className="text-[#f59e0b] font-semibold">Who</span> must comply with EU AI Act by August 2026</p>
          <p><span className="text-[#f59e0b] font-semibold">RuleVault</span> is the AI decision interceptor</p>
          <p><span className="text-[#f59e0b] font-semibold">That</span> blocks non-compliant AI decisions before execution</p>
          <p><span className="text-[#f59e0b] font-semibold">Unlike</span> monitoring tools that only watch and alert</p>
          <p><span className="text-[#f59e0b] font-semibold">We</span> sit IN the decision path — bouncer, not CCTV</p>
        </div>
      </div>

      {/* Growth Motions */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Growth Motions</h3>
        <div className="space-y-3">
          {[
            { motion: "Outbound Sales (Cold Email)", rating: "PRIMARY", desc: "CCOs respond to personalized outreach referencing their regulatory risk. High ACV ($50K+/yr) justifies the effort." },
            { motion: "Sales-Led Growth (SLG)", rating: "PRIMARY", desc: "Enterprise demos: show API call → 43ms verdict → audit log → EU AI Act compliance report. Close with pilot." },
            { motion: "Product-Led Growth (PLG)", rating: "SECONDARY", desc: "Free tier (1 agent, 100 decisions/day) gets developers hands-on. 3-step wizard to first verdict in <10 min." },
            { motion: "Inbound/Content/SEO", rating: "SECONDARY", desc: "\"EU AI Act compliance tools\" growing keyword category. 2 articles/week for first 3 months." },
            { motion: "Community-Led", rating: "SECONDARY", desc: "HN, Reddit, LangChain Discord. Technical evaluators discover → champion to CCO." },
            { motion: "Partner/Channel", rating: "FUTURE", desc: "System integrators (Accenture, Deloitte). After first 3 paying customers." },
            { motion: "Viral/WoM", rating: "NOT PRIMARY", desc: "B2B compliance tools don't go viral. Referral program planned for later." },
          ].map((m) => (
            <div key={m.motion} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4 flex flex-col md:flex-row md:items-start gap-3">
              <span className={`font-mono text-[10px] px-2 py-0.5 rounded-sm shrink-0 ${
                m.rating === "PRIMARY" ? "bg-[#f59e0b]/10 text-[#f59e0b]" :
                m.rating === "SECONDARY" ? "bg-[#1a1a1a] text-[#a3a3a3]" :
                m.rating === "FUTURE" ? "bg-[#3b82f6]/10 text-[#3b82f6]" :
                "bg-[#1a1a1a] text-[#606060]"
              }`}>
                {m.rating}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white">{m.motion}</h4>
                <p className="text-xs text-[#a3a3a3] mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Strategy */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Content Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { pillar: "EU AI Act Education", audience: "CCOs", examples: ["What CCOs Need to Know", "High-Risk Classification Guide", "AI Audit Trail Requirements", "Fine Avoidance Guide"] },
            { pillar: "Technical Implementation", audience: "AI Engineers", examples: ["LangChain Integration in 30 Min", "Agent Guardrails Architecture", "Immutable Audit Log Design", "Rule Validation Testing"] },
            { pillar: "Competitor Comparisons", audience: "Evaluators", examples: ["RuleVault vs Fiddler AI", "Aporia vs RuleVault", "IBM OpenScale Alternatives", "Monitoring vs Interception"] },
          ].map((p) => (
            <div key={p.pillar} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-1">{p.pillar}</h4>
              <p className="font-mono text-[10px] text-[#737373] mb-3">For: {p.audience}</p>
              <ul className="space-y-1.5">
                {p.examples.map((ex, i) => (
                  <li key={i} className="text-xs text-[#a3a3a3] flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-[#737373] shrink-0" /> {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Strategy */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Social Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f59e0b] text-[#0d0d0d] rounded-lg p-5">
            <span className="font-mono text-xs uppercase opacity-70">Primary Platform</span>
            <h4 className="text-lg font-bold mt-1">LinkedIn</h4>
            <p className="text-sm opacity-80 mt-2">3 posts/week: Monday (regulatory countdown), Wednesday (technical demo), Friday (founder story/insight).</p>
            <p className="text-sm opacity-80 mt-2">10 DMs/day to CCO/DPO profiles.</p>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373] uppercase">Secondary Platform</span>
            <h4 className="text-lg font-bold text-white mt-1">Twitter/X</h4>
            <p className="text-sm text-[#a3a3a3] mt-2">1 thread/week + daily micro-posts. Technical credibility + developer awareness.</p>
          </div>
        </div>
      </div>

      {/* Email Strategy */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Email Marketing</h3>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-semibold text-white">Lead Magnet: &quot;EU AI Act Compliance Checklist for AI Teams&quot;</span>
          </div>
          <div className="space-y-2">
            {[
              { day: "Immediate", action: "Deliver checklist + welcome" },
              { day: "Day 3", action: "\"The one thing most teams miss\" — free demo" },
              { day: "Day 7", action: "Customer story (claims processing)" },
              { day: "Day 14", action: "\"1-sprint implementation plan\"" },
              { day: "Day 21", action: "\"Book a compliance assessment (free, 30 min)\"" },
            ].map((e) => (
              <div key={e.day} className="flex items-center gap-3 text-xs">
                <span className="font-mono text-[#f59e0b] w-16 shrink-0">{e.day}</span>
                <span className="text-[#a3a3a3]">{e.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitor Positioning */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Competitor Positioning</h3>
        <div className="space-y-3">
          {[
            { vs: "vs Fiddler AI", diff: "Fiddler monitors ML performance. We intercept decisions. Different layer, different compliance value." },
            { vs: "vs Aporia", diff: "Aporia does LLM safety guardrails. We intercept structured decisions (loans, claims, triage). Different use case." },
            { vs: "vs WhyLabs", diff: "DIY open-source, no turnkey compliance. We're enterprise-ready with compliance workflows built in." },
            { vs: "vs IBM OpenScale", diff: "6–18 month implementation, IBM Cloud lock-in. We're self-serve, API-first, 1 sprint to integrate." },
          ].map((c) => (
            <div key={c.vs} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white">{c.vs}</h4>
              <p className="text-xs text-[#a3a3a3] mt-1">{c.diff}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-4">
          <p className="text-sm text-[#a3a3a3]">
            <span className="text-[#f59e0b] font-semibold">Unique position:</span> We are the ONLY AI decision interceptor. Every competitor monitors. We stop. This is an architectural difference, not a feature difference.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Brand Section ─── */
function BrandSection() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">Brand & Design Spec — RuleVault</h2>
          <DocLink href={DOC_LINKS.brand} label="View in Google Docs" />
        </div>
        <p className="text-sm text-[#737373] mb-6">Industrial / Utilitarian — Bloomberg Terminal Density</p>
      </div>

      {/* Design Identity */}
      <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-5">
        <h3 className="font-mono text-xs uppercase tracking-wider text-[#737373] mb-3">Design Identity</h3>
        <p className="text-sm text-[#a3a3a3] leading-relaxed">
          Bloomberg Terminal density meets compliance law firm. Dense, data-first. Not a startup. Not a dashboard. A compliance instrument. The unforgettable element: the EU AI Act countdown bar — a live timer showing days until August 2, 2026 fines kick in.
        </p>
      </div>

      {/* Color Palette */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Background", hex: "#0d0d0d", desc: "Primary surface" },
            { name: "Surface", hex: "#111111", desc: "Elevated cards" },
            { name: "Amber Accent", hex: "#f59e0b", desc: "CTAs, highlights" },
            { name: "Amber Hover", hex: "#d97706", desc: "10% darker" },
            { name: "Destructive", hex: "#ef4444", desc: "BLOCKED, errors" },
            { name: "Success", hex: "#22c55e", desc: "APPROVED" },
            { name: "Border", hex: "#2a2a2a", desc: "Subtle dividers" },
            { name: "Text Primary", hex: "#f0f0f0", desc: "Content text" },
          ].map((c) => (
            <div key={c.name} className="rounded-lg overflow-hidden border border-[#2a2a2a]">
              <div className="h-16" style={{ backgroundColor: c.hex }} />
              <div className="p-3 bg-[#111111]">
                <div className="text-xs font-semibold text-white">{c.name}</div>
                <div className="font-mono text-[10px] text-[#f59e0b]">{c.hex}</div>
                <div className="text-[10px] text-[#737373] mt-0.5">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Typography</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373]">Display</span>
            <p className="font-sans text-3xl font-bold text-white mt-2">Space Grotesk</p>
            <p className="text-xs text-[#a3a3a3] mt-2">Headings, hero text. Geometric but human. Authoritative without being cold.</p>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373]">Body</span>
            <p className="font-body text-3xl font-semibold text-white mt-2" style={{ fontFamily: "var(--font-ibm-plex-sans, 'IBM Plex Sans', sans-serif)" }}>IBM Plex Sans</p>
            <p className="text-xs text-[#a3a3a3] mt-2">Paragraphs, UI text. Regulatory/financial credibility. Clean, readable.</p>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
            <span className="font-mono text-xs text-[#737373]">Mono</span>
            <p className="font-mono text-3xl font-semibold text-white mt-2">IBM Plex Mono</p>
            <p className="text-xs text-[#a3a3a3] mt-2">ALL data: timestamps, IDs, code, stats, table content. Court record aesthetic.</p>
          </div>
        </div>
      </div>

      {/* Spacing & Radius */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Design Tokens</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
            <h4 className="font-mono text-xs text-[#737373] uppercase mb-3">Spacing</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-[#a3a3a3]">Base unit</span><span className="font-mono text-white">4px</span></div>
              <div className="flex justify-between"><span className="text-[#a3a3a3]">Section padding (desktop)</span><span className="font-mono text-white">96px</span></div>
              <div className="flex justify-between"><span className="text-[#a3a3a3]">Section padding (mobile)</span><span className="font-mono text-white">48px</span></div>
              <div className="flex justify-between"><span className="text-[#a3a3a3]">Container max-width</span><span className="font-mono text-white">1280px</span></div>
            </div>
          </div>
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
            <h4 className="font-mono text-xs text-[#737373] uppercase mb-3">Border Radius</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center"><span className="text-[#a3a3a3]">Badges, tags</span><span className="font-mono text-white flex items-center gap-2"><span className="w-6 h-4 bg-[#f59e0b]/20 rounded-[4px]" /> 4px</span></div>
              <div className="flex justify-between items-center"><span className="text-[#a3a3a3]">Cards, inputs</span><span className="font-mono text-white flex items-center gap-2"><span className="w-6 h-4 bg-[#f59e0b]/20 rounded-[8px]" /> 8px</span></div>
              <div className="flex justify-between items-center"><span className="text-[#a3a3a3]">Modals, panels</span><span className="font-mono text-white flex items-center gap-2"><span className="w-6 h-4 bg-[#f59e0b]/20 rounded-[12px]" /> 12px</span></div>
              <div className="flex justify-between items-center"><span className="text-[#a3a3a3]">Pill badges</span><span className="font-mono text-white flex items-center gap-2"><span className="w-6 h-4 bg-[#f59e0b]/20 rounded-full" /> 9999px</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Verdict Badges */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Verdict Badge System</h3>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-5">
          <p className="text-xs text-[#737373] mb-4">Signature component — used throughout dashboard and audit logs</p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/30 font-mono text-[11px] font-semibold uppercase px-2 py-0.5 rounded-[4px]">BLOCKED</span>
            <span className="bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30 font-mono text-[11px] font-semibold uppercase px-2 py-0.5 rounded-[4px]">APPROVED</span>
            <span className="bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 font-mono text-[11px] font-semibold uppercase px-2 py-0.5 rounded-[4px]">FLAGGED</span>
          </div>
        </div>
      </div>

      {/* What We Avoid */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">What We Avoid</h3>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "Purple/blue gradients",
              "Startup illustrations or neural network graphics",
              "Isometric tech art",
              "Light mode hero",
              "Confetti / onboarding celebrations",
              "Anything that looks like every other SaaS tool",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-[#a3a3a3]">
                <X className="w-3 h-3 text-[#ef4444] shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Pitch Section ─── */
function PitchSection() {
  const slides = [
    { num: "01", title: "Cover", desc: "RuleVault — Every AI decision, approved or blocked in milliseconds. Live terminal demo + EU AI Act countdown." },
    { num: "02", title: "The Problem", desc: "3 pain cards: Invisible Batch Problem, Audit Trail Gap, Scale Trap. €30M fine stats bar." },
    { num: "03", title: "The Insight", desc: "Bouncer vs CCTV comparison. Architecture diagram: AI Agent → RuleVault → APPROVED/BLOCKED." },
    { num: "04", title: "The Solution", desc: "3 steps: Define rules → Intercept decisions → Prove compliance. <100ms verdict latency." },
    { num: "05", title: "Market Opportunity", desc: "$109.9B TAM by 2034, 65.8% CAGR. ICP: EU banks/insurers/hospitals, CCO buyer, $50K-$500K deal." },
    { num: "06", title: "Competitive Landscape", desc: "Feature matrix: Fiddler/Aporia/WhyLabs/IBM — none intercept. RuleVault ✓ on all features." },
    { num: "07", title: "Product Demo", desc: "3 panels: Rule Builder, API in action (curl + JSON response), Audit Log court-record format." },
    { num: "08", title: "Business Model", desc: "Free ($0) → Lite ($1K/mo) → Pro ($50K/yr). Path to $10M ARR." },
    { num: "09", title: "Traction", desc: "Live product, <100ms latency validated, testimonials from CCO and Head of AI Governance." },
    { num: "10", title: "The Ask", desc: "$500K pre-seed. Milestones: Month 3 → $3K MRR, Month 12 → $500K ARR, Month 18 → $1M ARR." },
  ];

  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">Pitch Deck — RuleVault</h2>
          <DocLink href={DOC_LINKS.pitchDeck} label="Content Doc" />
        </div>
        <p className="text-sm text-[#737373] mb-4">10 slides · Arrow key navigation · Framer Motion transitions</p>
        <a
          href="/deck"
          className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#0d0d0d] font-semibold text-sm px-4 py-2 rounded-md hover:bg-[#d97706] transition"
        >
          <Presentation className="w-4 h-4" /> View Full Deck
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Slide overview */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Slide Overview</h3>
        <div className="space-y-2">
          {slides.map((slide) => (
            <div key={slide.num} className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4 flex items-start gap-4 hover:border-[#f59e0b]/30 transition">
              <span className="font-mono text-xl font-bold text-[#f59e0b] shrink-0">{slide.num}</span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white">{slide.title}</h4>
                <p className="text-xs text-[#a3a3a3] mt-1">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design notes */}
      <div>
        <h3 className="text-lg font-semibold text-[#f59e0b] mb-4">Design Notes</h3>
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-lg p-4 space-y-2 text-xs font-mono text-[#a3a3a3]">
          <p>Background: #0d0d0d · Accent: #f59e0b (amber)</p>
          <p>Display: Space Grotesk · Data: IBM Plex Mono</p>
          <p>Navigation: Arrow keys + swipe + click dots</p>
          <p>Transitions: Framer Motion slide (0.3s ease-out)</p>
          <p>Audience: Investors, enterprise CCOs, strategic partners</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Docs Page ─── */
export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "research": return <ResearchSection />;
      case "gtm": return <GtmSection />;
      case "marketing": return <MarketingSection />;
      case "brand": return <BrandSection />;
      case "pitch": return <PitchSection />;
      default: return <ResearchSection />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0d0d0d]">
        <div className="mx-auto flex max-w-7xl">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex w-64 shrink-0 border-r border-[#262626] flex-col sticky top-0 h-screen pt-20">
            <div className="px-5 py-6 flex-1">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#606060] mb-4">
                Documentation
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full rounded-md px-3 py-2.5 text-left text-sm transition flex items-center gap-2.5 ${
                      activeSection === section.id
                        ? "bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20"
                        : "text-[#a3a3a3] hover:bg-[#1a1a1a] hover:text-white border border-transparent"
                    }`}
                  >
                    {section.icon}
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#262626] space-y-1">
                <a
                  href="https://rulevault.ashketing.com"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#737373] hover:text-[#f59e0b] transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live Site
                </a>
                <a
                  href="https://github.com/ashtalksai/nullify-ai"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#737373] hover:text-[#f59e0b] transition"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href="/deck"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#737373] hover:text-[#f59e0b] transition"
                >
                  <Presentation className="w-3.5 h-3.5" /> Pitch Deck
                </a>
              </div>
            </div>
          </aside>

          {/* Mobile nav */}
          <div className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-[#0d0d0d] border-b border-[#262626] px-4 py-2.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 text-sm text-[#a3a3a3] w-full"
            >
              {mobileMenuOpen ? <XIcon className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>{sections.find(s => s.id === activeSection)?.title || "Research"}</span>
              <ChevronRight className={`w-3 h-3 ml-auto transition ${mobileMenuOpen ? "rotate-90" : ""}`} />
            </button>
            {mobileMenuOpen && (
              <nav className="mt-2 space-y-1 pb-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm flex items-center gap-2 ${
                      activeSection === section.id
                        ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                        : "text-[#a3a3a3] hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {section.icon}
                    {section.title}
                  </button>
                ))}
              </nav>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 px-4 py-8 pt-24 lg:pt-8 sm:px-8 lg:px-12 max-w-4xl">
            {renderContent()}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
