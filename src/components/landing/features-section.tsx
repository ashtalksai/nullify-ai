"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Zap,
  FileCheck,
  LayoutDashboard,
  Bell,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Rule Builder",
    description:
      "Visual no-code policy editor. Drag-and-drop regulatory logic. Supports complex conditions, thresholds, and multi-jurisdictional rules.",
  },
  {
    icon: Zap,
    title: "Interceptor API",
    description:
      "Drop-in SDK for Python, Node.js, Java. Zero-impact integration. Intercepts decisions at the edge or in the cloud.",
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Log",
    description:
      "Cryptographically secured, tamper-proof records. Full decision lineage for every single interaction. Court-admissible evidence.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboard",
    description:
      "Live operational view. Monitor throughput, block rates, and policy violations. Bloomberg-style data visualization.",
  },
  {
    icon: Bell,
    title: "Alert System",
    description:
      "Instant notifications via Slack, PagerDuty, Email. Configurable triggers for high-risk flags, anomalies, or compliance breaches.",
  },
  {
    icon: ShieldCheck,
    title: "EU AI Act Workflows",
    description:
      "Pre-built templates for high-risk AI systems. Automated conformity assessments, risk management, and reporting capabilities.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-b border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          FEATURES
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-[8px] border border-[#262626] bg-[#111111] p-6 transition-colors hover:border-[#f59e0b]/30"
            >
              <feature.icon className="mb-4 h-6 w-6 text-[#f59e0b]" />
              <h3 className="mb-2 font-sans text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-[#a3a3a3]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
