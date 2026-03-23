"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    features: [
      "1 agent",
      "100 decisions/day",
      "30-day log retention",
      "Community support",
      "Basic rule templates",
    ],
    cta: "Start Free",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Lite",
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
    cta: "Start Lite Trial",
    href: "/signup?plan=lite",
    highlight: true,
  },
  {
    name: "Pro",
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
    href: "/contact",
    highlight: false,
  },
];

const comparisonRows = [
  { feature: "EU AI Act Compliance Audit Trail", free: false, lite: false, pro: true },
  { feature: "Real-time Decision Interception", free: true, lite: true, pro: true },
  { feature: "Number of Agents", free: "1", lite: "5", pro: "Unlimited" },
  { feature: "Decisions per Day", free: "100", lite: "10K", pro: "Unlimited" },
  { feature: "Log Retention Period", free: "30 days", lite: "90 days", pro: "7 YEARS" },
  { feature: "Rule Engine & Custom Rules", free: "Basic", lite: "Custom", pro: "Custom" },
  { feature: "Webhook Alerts", free: false, lite: true, pro: true },
  { feature: "API Access", free: false, lite: true, pro: true },
  { feature: "SSO/SAML Authentication", free: false, lite: false, pro: true },
  { feature: "Compliance Reports & Analytics", free: false, lite: false, pro: true },
  { feature: "Dedicated SLA", free: false, lite: false, pro: true },
  { feature: "Custom Integrations", free: false, lite: false, pro: true },
  { feature: "Support Level", free: "Community", lite: "Email", pro: "Priority" },
  { feature: "Data Residency Options", free: false, lite: false, pro: true },
  { feature: "On-premise Deployment", free: false, lite: false, pro: true },
];

const faqs = [
  {
    q: "What happens if I exceed my decision limit?",
    a: "An exceedance is an B2B AI decision interception. Unfulfilled decisions are queued. Therefore, the decision's max short information.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated for the remaining period.",
  },
  {
    q: "Do you offer enterprise discounts?",
    a: "Yes. Organizations with multiple business units or high-volume needs can contact sales for customized enterprise pricing with volume discounts.",
  },
  {
    q: "How does the 7-year retention work?",
    a: "The EU AI Act requires high-risk AI systems to maintain audit trails for compliance periods. Our Pro plan includes 7-year retention with cryptographic integrity verification, ensuring your records remain court-admissible throughout the retention period.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-sans text-3xl font-bold sm:text-4xl">
                Pricing that scales with your
                <br />
                compliance requirements.
              </h1>
              <p className="mt-4 text-[#a3a3a3]">
                Start free. Upgrade when you need to comply.
              </p>
            </div>

            {/* Toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span
                className={`cursor-pointer font-mono text-sm ${!annual ? "text-white" : "text-[#737373]"}`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative h-6 w-11 rounded-full transition-colors ${annual ? "bg-[#f59e0b]" : "bg-[#333]"}`}
              >
                <div
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${annual ? "translate-x-5" : "translate-x-0.5"}`}
                />
              </button>
              <span
                className={`cursor-pointer font-mono text-sm ${annual ? "text-[#f59e0b]" : "text-[#737373]"}`}
                onClick={() => setAnnual(true)}
              >
                Annual{" "}
                <span className="text-[#22c55e]">(Saves 20%)</span>
              </span>
            </div>

            {/* Plan cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
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
                  <div className="mt-3">
                    <span className="font-mono text-3xl font-bold">
                      {annual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="font-mono text-sm text-[#737373]">
                      /{annual && plan.name !== "Free" ? "mo (billed annually)" : "month"}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.href} className="mt-6 block">
                    <Button
                      className={`w-full rounded-[4px] font-semibold ${
                        plan.highlight
                          ? "bg-[#f59e0b] text-black hover:bg-[#d97706]"
                          : "bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#262626]"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center font-mono text-xs italic text-[#f59e0b]/70">
              EU AI Act requires 7-year audit trail retention for high-risk AI systems.
              Pro plan meets this requirement.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="py-3 text-left font-mono text-xs text-[#737373]">
                      Feature
                    </th>
                    <th className="py-3 text-center font-mono text-xs text-[#737373]">
                      Free
                    </th>
                    <th className="py-3 text-center font-mono text-xs text-[#f59e0b]">
                      Lite
                    </th>
                    <th className="py-3 text-center font-mono text-xs text-[#f59e0b]">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[#1a1a1a]"
                    >
                      <td className="py-3 text-sm text-[#a3a3a3]">
                        {row.feature}
                      </td>
                      {[row.free, row.lite, row.pro].map((val, i) => (
                        <td key={i} className="py-3 text-center">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="mx-auto h-4 w-4 text-[#22c55e]" />
                            ) : (
                              <X className="mx-auto h-4 w-4 text-[#525252]" />
                            )
                          ) : (
                            <span
                              className={`font-mono text-xs ${
                                val === "7 YEARS"
                                  ? "font-bold text-[#f59e0b]"
                                  : val === "Unlimited"
                                  ? "font-bold text-[#f59e0b]"
                                  : "text-[#a3a3a3]"
                              }`}
                            >
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  className="rounded-[8px] border border-[#262626] bg-[#111111] px-5"
                >
                  <AccordionTrigger className="text-left font-sans text-sm font-medium text-[#f59e0b] hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#a3a3a3]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
