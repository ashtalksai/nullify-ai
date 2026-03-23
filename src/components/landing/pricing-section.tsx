"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    subtitle: "Free forever",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    features: [
      "1 agent",
      "100 decisions/day",
      "30-day log retention",
      "Community support",
      "Basic rule templates",
      "API Access",
    ],
    cta: "Get Started",
    ctaHref: "/signup",
    highlight: false,
  },
  {
    name: "Lite",
    subtitle: "",
    monthlyPrice: "$2,000",
    yearlyPrice: "$1,600",
    features: [
      "5 agents",
      "10K decisions/day",
      "90-day retention",
      "Email support",
      "Custom rules",
      "Webhook alerts",
      "API access",
    ],
    cta: "Start Trial",
    ctaHref: "/signup?plan=lite",
    highlight: true,
  },
  {
    name: "Pro",
    subtitle: "",
    monthlyPrice: "$5,000",
    yearlyPrice: "$4,000",
    features: [
      "Unlimited agents",
      "Unlimited decisions",
      "7-year retention (EU mandated)",
      "Dedicated SLA",
      "SSO/SAML",
      "Custom integrations",
      "Compliance reports",
      "Priority support",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    highlight: false,
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="border-b border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          9. PRICING
        </p>

        {/* Toggle */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setAnnual(true)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition ${
              annual
                ? "bg-[#f59e0b] text-black font-semibold"
                : "text-[#737373]"
            }`}
          >
            Annual (Save 20%)
          </button>
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition ${
              !annual
                ? "bg-[#f59e0b] text-black font-semibold"
                : "text-[#737373]"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[8px] border p-6 ${
                plan.highlight
                  ? "border-[#f59e0b] bg-[#111111]"
                  : "border-[#262626] bg-[#111111]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#f59e0b] px-3 py-1 font-mono text-[10px] font-bold text-black">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-sans text-xl font-bold">{plan.name}</h3>
              {plan.subtitle && (
                <p className="font-mono text-xs text-[#737373]">{plan.subtitle}</p>
              )}
              <div className="mt-4">
                <span className="font-mono text-3xl font-bold text-white">
                  {annual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="font-mono text-sm text-[#737373]">
                  /{annual ? "mo (billed annually)" : "mo"}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[#a3a3a3]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.ctaHref} className="mt-6 block">
                <Button
                  className={`w-full rounded-[4px] font-semibold ${
                    plan.highlight
                      ? "bg-[#f59e0b] text-black hover:bg-[#d97706]"
                      : "bg-[#1a1a1a] text-white hover:bg-[#262626] border border-[#333]"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* EU fine note */}
        <p className="mt-8 text-center font-mono text-xs text-[#f59e0b]/70">
          EU AI Act requires 7-year audit trail retention for high-risk AI systems.
          <br />
          Pro plan meets this requirement.
        </p>
      </div>
    </section>
  );
}
