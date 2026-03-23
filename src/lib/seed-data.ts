// Seed data for dashboard demo
export const DEMO_STATS = {
  decisionsToday: 8247,
  blockRate: 3.2,
  rulesActive: 14,
  latencyP99: 43,
};

const agents = ["Agent_7A34", "Agent_2B9C", "Agent_1X5F", "Agent_4D8E", "Agent_3G2H", "Agent_5K1L", "Agent_9P6R", "Agent_6J0S", "Agent_8F3V"];
const verdicts: string[] = ["APPROVED", "BLOCKED", "FLAGGED"];
const rules = [
  "RULE_109B: Fraud Pattern",
  "RULE_221A: High Value",
  "RULE_305C: Geo Risk",
  "RULE_418D: Blacklist",
  "Sensitive PII Flag",
  "Bias Risk Detected",
  "Suspicious Pattern Lvl 3",
  null,
];
const payloadTypes = [
  "loan_application",
  "insurance_claim",
  "patient_data_access",
  "customer_query",
  "transaction_check",
  "content-moderation",
  "resume_screening",
  "dynamic_price_req",
  "fraud-detection-v4",
  "user_post",
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateDecisions(count: number) {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => {
    const verdict = randomFrom(verdicts);
    const ruleMatched = verdict === "APPROVED" ? null : randomFrom(rules.filter((r): r is string => r !== null));
    return {
      id: `d_${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date(now - i * 1200).toISOString().replace("T", " ").slice(0, 23),
      agent: randomFrom(agents),
      verdict,
      payloadType: randomFrom(payloadTypes),
      ruleMatched: ruleMatched || "—",
      latency: Math.floor(Math.random() * 30 + 25),
    };
  });
}

export function generateRules() {
  return [
    { id: "1", name: "Block high-value transactions >K", active: true, hits: 14200, description: "Automatically block any single financial transaction exceeding K USD and trigger a high-priority alert for compliance review." },
    { id: "2", name: "Flag offshore transfers", active: true, hits: 5310, description: "Flag all transfers to offshore banking jurisdictions for manual review." },
    { id: "3", name: "Block after-hours medical access", active: true, hits: 1120, description: "Block access to patient records outside of authorized hours." },
    { id: "4", name: "Require 2FA for sensitive PII", active: true, hits: 8740, description: "Require two-factor authentication for any request accessing PII data." },
    { id: "5", name: "Monitor unusual login frequency", active: false, hits: 0, description: "Monitor and flag accounts with unusual login frequency patterns." },
    { id: "6", name: "Identify potential money laundering patterns", active: true, hits: 2045, description: "Detect and flag transaction patterns consistent with money laundering." },
    { id: "7", name: "Restrict access from high-risk geo-locations", active: true, hits: 678, description: "Block or flag access attempts from high-risk geographic regions." },
    { id: "8", name: "Alert on multiple failed password attempts", active: true, hits: 9560, description: "Alert security team on multiple failed authentication attempts." },
  ];
}

export function generateChartData() {
  return Array.from({ length: 24 }, (_, i) => ({
    hour: `${(24 - i).toString().padStart(2, "0")}:00`,
    violations: Math.floor(Math.random() * 80 + 10),
  })).reverse();
}

export function generateActiveAgents() {
  return [
    { name: "Agent_7A34", decisions: 1245, status: "active" },
    { name: "Agent_2B9C", decisions: 982, status: "active" },
    { name: "Agent_1X5F", decisions: 876, status: "active" },
  ];
}
