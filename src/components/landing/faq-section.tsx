"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does RuleVault ensure EU AI Act compliance?",
    a: "RuleVault provides pre-built compliance templates aligned with EU AI Act requirements for high-risk AI systems. Our interceptor ensures every AI decision is evaluated against your compliance rules before execution, creating an immutable audit trail that satisfies Article 12 (Record-keeping) and Article 14 (Human oversight) requirements.",
  },
  {
    q: "Can RuleVault be deployed on-premise?",
    a: "Yes. Our Pro plan includes on-premise deployment options for organizations with data residency requirements. RuleVault can run within your VPC, on-premise infrastructure, or in any major cloud provider. We support air-gapped environments for defense and government clients.",
  },
  {
    q: "Explain the technical architecture and data flow.",
    a: "RuleVault operates as a synchronous middleware in your AI decision pipeline. Your application sends a decision payload via REST API. Our rule engine evaluates it against your configured policies in under 50ms on average. The verdict (APPROVE/BLOCK/FLAG) is returned inline, and the full evaluation is logged to an immutable audit store. No decision data is stored beyond your retention period.",
  },
  {
    q: "What is the failsafe behavior during an outage?",
    a: "RuleVault is designed with configurable failsafe modes. You choose: fail-open (approve all during outage — for non-critical paths), fail-closed (block all — for high-risk decisions), or fail-to-queue (buffer decisions for evaluation when service recovers). Pro plans include 99.9% uptime SLA with multi-region redundancy.",
  },
  {
    q: "How do you handle GDPR data privacy rights?",
    a: "RuleVault processes only decision metadata by default — we never store raw PII unless you explicitly configure it. We support GDPR Article 17 (Right to Erasure) via our data deletion API. All EU customer data is processed in EU-based infrastructure. DPA available on request for enterprise customers.",
  },
  {
    q: "What kind of audit logs and reporting are available?",
    a: "Every decision generates an immutable audit record containing: timestamp, agent ID, decision payload hash, rules evaluated, verdict, confidence score, and processing time. Records are cryptographically signed and stored for your configured retention period (up to 7 years on Pro). Export to CSV, JSON, or integrate with your existing SIEM via webhooks.",
  },
  {
    q: "How fast is the interception? Will it slow down my AI?",
    a: "Median interception latency is 43ms. P99 is under 100ms. For comparison, a typical database query takes 5-20ms. RuleVault adds negligible overhead to your AI pipeline while providing complete decision governance. Our SDK supports async evaluation for non-blocking use cases.",
  },
];

export function FAQSection() {
  return (
    <section className="border-b border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          FAQ
        </p>
        <div className="mx-auto max-w-3xl">
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
      </div>
    </section>
  );
}
