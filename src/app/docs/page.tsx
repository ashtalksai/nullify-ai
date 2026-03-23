"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: [
      {
        title: "Quick Start Guide",
        body: `Welcome to RuleVault. Get your first AI decision intercepted in under 60 seconds.

**Step 1: Create an account**
Sign up at rulevault.ashketing.com/signup — no credit card required.

**Step 2: Create your first agent**
Navigate to Dashboard → Settings → Generate API Key. Name your agent (e.g., "loan_approval_bot").

**Step 3: Create a rule**
Go to Dashboard → Rules → New Rule. Define conditions like "IF amount > 100000 AND confidence < 0.95 THEN BLOCK".

**Step 4: Send your first decision**
\`\`\`bash
curl -X POST https://api.rulevault.ai/v1/intercept \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "loan_bot", "amount": 150000, "confidence": 0.8}'
\`\`\`

**Step 5: Check your dashboard**
Your decision will appear in the Recent Decisions table with verdict, rule matched, and latency.`,
      },
      {
        title: "API Authentication",
        body: `All API requests require a Bearer token. Generate keys in Dashboard → Settings.

**Headers:**
- \`Authorization: Bearer rv_live_YOUR_KEY\`
- \`Content-Type: application/json\`

Rate limits: Free (100/day), Lite (10K/day), Pro (unlimited).`,
      },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    content: [
      {
        title: "POST /v1/intercept",
        body: `The core interception endpoint. Send a decision payload, get a verdict back.

**Request:**
\`\`\`json
{
  "agent_id": "string (required)",
  "decision_type": "string (optional)",
  "payload": {
    // Your decision data — any JSON object
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "verdict": {
    "id": "dec_abc123",
    "outcome": "APPROVE | BLOCK | FLAG",
    "confidence": 0.97,
    "rules_evaluated": 4,
    "rules_passed": 4,
    "processing_time": "43ms",
    "audit_trail": "generated"
  }
}
\`\`\`

**Status Codes:** 200 (success), 401 (unauthorized), 429 (rate limited), 500 (server error).`,
      },
      {
        title: "GET /v1/decisions",
        body: `Retrieve decision history with filtering and pagination.

**Query Parameters:**
- \`agent_id\` — Filter by agent
- \`verdict\` — Filter by APPROVE, BLOCK, or FLAG
- \`from\` / \`to\` — Date range (ISO 8601)
- \`limit\` — Results per page (default: 25, max: 100)
- \`offset\` — Pagination offset`,
      },
      {
        title: "GET /v1/rules",
        body: `List all configured rules for your account.

Returns rule name, conditions, action type, priority, hit count, and active status.`,
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    content: [
      {
        title: "EU AI Act Overview",
        body: `The EU AI Act (Regulation 2024/1689) establishes requirements for AI systems operating in the EU. High-risk AI systems must implement:

- **Article 9:** Risk management system
- **Article 10:** Data governance
- **Article 12:** Record-keeping (audit trails)
- **Article 13:** Transparency
- **Article 14:** Human oversight
- **Article 15:** Accuracy, robustness, cybersecurity

RuleVault directly supports Articles 9, 12, 13, and 14 through real-time decision interception, immutable audit logging, and configurable human-in-the-loop workflows.

**Deadline:** August 2, 2026 for high-risk AI system compliance.
**Fines:** Up to €30M or 6% of global annual revenue.`,
      },
      {
        title: "Audit Trail Retention",
        body: `Pro plan provides 7-year retention with cryptographic integrity verification.

All audit records are:
- Cryptographically signed at creation
- Stored on immutable append-only ledgers
- Verifiable via our audit verification API
- Exportable in court-admissible formats (JSON, CSV, PDF)`,
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    content: [
      {
        title: "SDKs",
        body: `Official SDKs available for:

- **Python:** \`pip install rulevault\`
- **Node.js:** \`npm install @rulevault/sdk\`
- **Java:** Maven artifact \`ai.rulevault:sdk\`
- **Go:** \`go get github.com/rulevault/go-sdk\`

All SDKs support synchronous and async interception modes.`,
      },
      {
        title: "Webhooks & Alerts",
        body: `Configure webhooks to receive real-time notifications:

- **Slack:** Direct integration via OAuth
- **PagerDuty:** Event-driven alerts for critical blocks
- **Email:** Digest or real-time notification modes
- **Custom webhook:** POST to any URL with configurable payload`,
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    content: [
      {
        title: "System Architecture",
        body: `RuleVault operates as synchronous middleware in your AI decision pipeline.

**Flow:**
1. Your app sends decision payload via REST API
2. Rule engine evaluates against configured policies (<50ms p50)
3. Verdict returned inline — APPROVE, BLOCK, or FLAG
4. Full evaluation logged to immutable audit store
5. Alerts triggered based on configured rules

**Infrastructure:**
- Multi-region deployment (EU, US, APAC)
- Auto-scaling rule evaluation engine
- Append-only audit ledger with cryptographic signing
- 99.9% uptime SLA (Pro plan)`,
      },
      {
        title: "Data Flow & Security",
        body: `**In transit:** TLS 1.3 for all API communication
**At rest:** AES-256 encryption for all stored data
**Payload handling:** Decision payloads are evaluated in-memory and not persisted unless configured
**Key management:** HSM-backed key rotation every 90 days

RuleVault is SOC 2 Type II in progress and HIPAA-ready.`,
      },
    ],
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const current = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d]">
        <div className="mx-auto flex max-w-7xl">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 border-r border-[#262626] px-4 py-8 lg:block">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#737373]">
              Documentation
            </h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full rounded-[4px] px-3 py-2 text-left text-sm transition ${
                    activeSection === section.id
                      ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                      : "text-[#a3a3a3] hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Mobile section selector */}
          <div className="w-full lg:hidden px-4 py-4 border-b border-[#262626]">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-2 font-mono text-sm text-white"
            >
              {sections.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 py-8 sm:px-8 lg:px-12">
            <h1 className="font-sans text-2xl font-bold">{current.title}</h1>
            <div className="mt-8 space-y-10">
              {current.content.map((item) => (
                <div key={item.title}>
                  <h2 className="mb-4 font-sans text-lg font-semibold text-[#f59e0b]">
                    {item.title}
                  </h2>
                  <div className="prose-invert max-w-none text-sm leading-relaxed text-[#a3a3a3]">
                    {item.body.split("\n").map((line, i) => {
                      if (line.startsWith("```")) {
                        return null; // simplified — code blocks rendered as pre
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <p key={i} className="mt-3 font-semibold text-white">
                            {line.replace(/\*\*/g, "")}
                          </p>
                        );
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <p key={i} className="ml-4">
                            • {line.slice(2)}
                          </p>
                        );
                      }
                      if (line.trim() === "") return <br key={i} />;
                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
