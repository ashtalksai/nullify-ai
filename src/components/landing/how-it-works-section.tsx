"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Send Decision Payload",
    code: `$ curl -X POST https://api.rulevault.ai/v1/intercept \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer {API_KEY}" \\
  -d '{
    "agent_id": "loan_approval_bot_v2",
    "applicant_id": "U98234",
    "credit_score": 680,
    "loan_amount": 125000,
    "decision_type": "loan_application",
    "risk_score": 0.28
  }'

Payload transmitted. Timestamp 2025-11-27T18:15:322.
Awaiting processing...`,
  },
  {
    number: "2",
    title: "Rules Are Evaluated",
    code: `Evaluating ruleset "loan_approval_v3.1"...

RULE 01: "Minimum Credit Score" (credit_score >= 600)
  ✅ PASS: 680 >= 600

RULE 02: "Max DTI_Ratio" (debt_to_income_ratio < 0.40)
  ✅ PASS: 0.28 < 0.40

RULE 03: "Income Threshold" (income >= 30000)
  ✅ PASS: income=75000

RULE 04: "Loan Amount Limit" (loan_amount <= 200000)
  ✅ PASS: 125000 <= 200000

All critical rules passed.
> Processing: 43ms`,
  },
  {
    number: "3",
    title: "Get Verdict Instantly",
    code: `{
  "verdict": {
    "id": "dec_M4TBa5sMc3u1z",
    "timestamp": "2025-11-27T18:15:32.847",
    "outcome": "APPROVE",
    "confidence": 0.97,
    "rules_evaluated": 4,
    "rules_passed": 4,
    "processing_time": "43ms",
    "audit_trail": "generated"
  }
}

VERDICT: APPROVE

Processing time: 043ms. Audit trail generated.`,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-b border-[#262626] bg-[#0d0d0d]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          7. HOW IT WORKS
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-[8px] border border-[#262626] bg-[#111111]"
            >
              <div className="border-b border-[#262626] px-5 py-3">
                <h3 className="font-sans text-base font-semibold">
                  {step.number}. {step.title}
                </h3>
              </div>
              <div className="p-4">
                <div className="rounded-[4px] bg-[#0a0a0a] p-4">
                  {/* Terminal dots */}
                  <div className="mb-3 flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[10px] leading-relaxed text-[#a3a3a3] sm:text-[11px]">
                    {step.code}
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
