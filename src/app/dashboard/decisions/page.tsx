"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { generateDecisions } from "@/lib/seed-data";
import { Download, ChevronLeft, ChevronRight, Copy, Shield } from "lucide-react";

export default function DecisionsPage() {
  const decisions = useMemo(() => generateDecisions(25), []);
  const [filter, setFilter] = useState<string>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = filter === "ALL"
    ? decisions
    : decisions.filter((d) => d.verdict === filter);

  const perPage = 15;
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-[#737373]">
            Home &gt; Audit Logs &gt; Decision Log
          </p>
        </div>
        <Button
          variant="outline"
          className="border-[#333] bg-transparent text-[#a3a3a3] rounded-[4px]"
        >
          <Download className="mr-1 h-4 w-4" /> Export Report
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#737373]">Date Range Picker</span>
          <input
            type="text"
            defaultValue="Mar 23, 2026 - Mar 23, 2026"
            className="ml-2 rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-white"
          />
        </div>
        <div>
          <span className="font-mono text-[10px] text-[#737373]">Agent filter</span>
          <select className="ml-2 rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-white">
            <option>All Agents (prod)</option>
          </select>
        </div>
        <div className="flex gap-1">
          <span className="font-mono text-[10px] text-[#737373] mr-2">Verdict filter</span>
          {["ALL", "BLOCKED", "APPROVED", "FLAGGED"].map((v) => (
            <button
              key={v}
              onClick={() => { setFilter(v); setPage(1); }}
              className={`rounded-[4px] px-3 py-1 font-mono text-[10px] font-bold transition ${
                filter === v
                  ? v === "BLOCKED"
                    ? "bg-[#ef4444] text-white"
                    : v === "APPROVED"
                    ? "bg-[#22c55e] text-black"
                    : v === "FLAGGED"
                    ? "bg-[#f59e0b] text-black"
                    : "bg-[#333] text-white"
                  : "bg-[#1a1a1a] text-[#737373] border border-[#333]"
              }`}
            >
              {v === "ALL" ? "⊕ ALL" : v === "BLOCKED" ? "🚫 BLOCKED" : v === "APPROVED" ? "✅ APPROVED" : "🚩 FLAGGED"}
            </button>
          ))}
        </div>
      </div>

      {/* Audit log table header */}
      <div className="rounded-[8px] border border-[#262626] bg-[#111111]">
        <div className="border-b border-[#262626] px-4 py-2">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#737373]">
            AUDIT LOG TABLE
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#262626]">
                {[
                  "TIMESTAMP",
                  "DECISION ID",
                  "AGENT",
                  "PAYLOAD TYPE",
                  "VERDICT",
                  "RULE MATCHED",
                  "LATENCY",
                  "ACTIONS",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2.5 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-[#737373]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paged.map((d) => (
                <>
                  <tr
                    key={d.id}
                    onClick={() =>
                      setExpandedId(expandedId === d.id ? null : d.id)
                    }
                    className="cursor-pointer border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors"
                  >
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[10px] text-[#a3a3a3]">
                      {d.timestamp}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[10px] text-[#a3a3a3]">
                      {d.id}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[10px] text-white">
                      {d.agent}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[10px] text-[#a3a3a3]">
                      {d.payloadType}
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`inline-flex items-center rounded-[4px] border px-2 py-0.5 font-mono text-[10px] font-bold ${
                          d.verdict === "APPROVED"
                            ? "bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30"
                            : d.verdict === "BLOCKED"
                            ? "bg-[#ef4444]/20 text-[#ef4444] border-[#ef4444]/30"
                            : "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30"
                        }`}
                      >
                        {d.verdict === "APPROVED" ? "✅" : d.verdict === "BLOCKED" ? "🚫" : "🚩"}{" "}
                        {d.verdict}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[10px] text-[#a3a3a3]">
                      {d.ruleMatched}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-[10px] text-[#a3a3a3]">
                      {d.latency}ms
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex gap-1">
                        <Copy className="h-3 w-3 text-[#737373] hover:text-white cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                  {expandedId === d.id && (
                    <tr key={`${d.id}-expanded`}>
                      <td colSpan={8} className="bg-[#0a0a0a] p-4">
                        <div className="grid gap-4 lg:grid-cols-3">
                          {/* JSON Payload */}
                          <div>
                            <h4 className="mb-2 font-mono text-[10px] font-bold text-[#f59e0b]">
                              DECISION RATIONALE & EVIDENCE
                            </h4>
                            <h5 className="mb-1 font-mono text-[10px] font-bold text-white">
                              FULL JSON PAYLOAD
                            </h5>
                            <pre className="rounded-[4px] bg-[#111111] p-3 font-mono text-[9px] text-[#a3a3a3]">
{`{
  "transaction_id": "tx_123abc456",
  "user_id": "usr_789xyz012",
  "amount": 15000.00,
  "currency": "USD",
  "merchant": "CryptoExchange Global",
  "location": "Unknown",
  "timestamp": "${d.timestamp.replace(" ", "T")}Z",
  "risk_score": 0.85
}`}
                            </pre>
                          </div>
                          {/* Rule Evaluation */}
                          <div>
                            <h5 className="mb-1 font-mono text-[10px] font-bold text-white">
                              RULE EVALUATION TRACE
                            </h5>
                            <pre className="rounded-[4px] bg-[#111111] p-3 font-mono text-[9px] text-[#22c55e]">
{`> RULE: ${d.ruleMatched !== "—" ? d.ruleMatched : "Standard Check"}
> STATUS: MATCHED
> EVALUATION:
  - Condition 1: amount > 10000
    (TRUE: 15000.00 > 10000)
  - Condition 2: merchant_category == 'Crypto'
    (TRUE: CryptoExchange Global)
  - Condition 3: location == 'Unknown'
    (TRUE: Unknown)
  - Condition 4: risk_score >= 0.8
    (TRUE: 0.85 >= 0.8)
> ACTION: ${d.verdict}, ALERT_FRAUD_TEAM`}
                            </pre>
                          </div>
                          {/* Decision Note */}
                          <div>
                            <h5 className="mb-1 font-mono text-[10px] font-bold text-white">
                              DECISION NOTE
                            </h5>
                            <p className="rounded-[4px] bg-[#111111] p-3 font-mono text-[9px] text-[#a3a3a3] leading-relaxed">
                              Decision {d.id} was {d.verdict.toLowerCase()} due to a high-value
                              transaction at a cryptocurrency exchange from an unknown
                              location with an elevated risk score, triggering the{" "}
                              &apos;{d.ruleMatched !== "—" ? d.ruleMatched : "Standard Security"}&apos; policy.
                            </p>
                            <div className="mt-3 flex items-center gap-1 text-[#f59e0b]">
                              <Shield className="h-3 w-3" />
                              <span className="font-mono text-[9px] font-bold">
                                COURT-ADMISSIBLE RECORD
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#262626] px-4 py-3">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="border-[#333] bg-transparent text-[#737373] rounded-[4px] h-7 w-7 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-mono text-xs text-[#737373]">
              1-{Math.min(perPage, filtered.length)} of {filtered.length.toLocaleString()} decisions
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page * perPage >= filtered.length}
              onClick={() => setPage(page + 1)}
              className="border-[#333] bg-transparent text-[#737373] rounded-[4px] h-7 w-7 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Immutable log notice */}
      <div className="flex items-center justify-center gap-2 rounded-[8px] border border-[#262626] bg-[#111111] px-4 py-3">
        <Shield className="h-4 w-4 text-[#f59e0b]" />
        <span className="font-mono text-[10px] text-[#a3a3a3]">
          🔒 Immutable log — tamper-proof by design. All records are cryptographically
          signed and stored in a decentralized ledger.
        </span>
      </div>
    </div>
  );
}
