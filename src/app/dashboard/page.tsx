"use client";

import { useMemo } from "react";
import { TrendingDown, TrendingUp, CheckCircle, Clock } from "lucide-react";
import {
  DEMO_STATS,
  generateDecisions,
  generateChartData,
  generateActiveAgents,
} from "@/lib/seed-data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function VerdictBadge({ verdict }: { verdict: string }) {
  const colors: Record<string, string> = {
    APPROVED: "bg-[#22c55e]/20 text-[#22c55e] border-[#22c55e]/30",
    BLOCKED: "bg-[#ef4444]/20 text-[#ef4444] border-[#ef4444]/30",
    FLAGGED: "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30",
  };
  return (
    <span
      className={`inline-flex items-center rounded-[4px] border px-2 py-0.5 font-mono text-[10px] font-bold ${
        colors[verdict] || ""
      }`}
    >
      {verdict === "APPROVED" && "✅ "}
      {verdict === "BLOCKED" && "🚫 "}
      {verdict === "FLAGGED" && "🚩 "}
      {verdict}
    </span>
  );
}

export default function DashboardPage() {
  const decisions = useMemo(() => generateDecisions(15), []);
  const chartData = useMemo(() => generateChartData(), []);
  const activeAgents = useMemo(() => generateActiveAgents(), []);

  const stats = [
    {
      label: "Decisions Today",
      value: DEMO_STATS.decisionsToday.toLocaleString(),
      icon: null,
      sparkline: true,
    },
    {
      label: "Block Rate",
      value: `${DEMO_STATS.blockRate}%`,
      icon: TrendingDown,
      sub: "vs. yesterday",
      iconColor: "#ef4444",
    },
    {
      label: "Rules Active",
      value: DEMO_STATS.rulesActive.toString(),
      icon: CheckCircle,
      iconColor: "#22c55e",
    },
    {
      label: "Latency p99",
      value: `${DEMO_STATS.latencyP99}ms`,
      icon: Clock,
      iconColor: "#f59e0b",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[8px] border border-[#262626] bg-[#111111] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#737373]">
                {stat.label}
              </span>
              {stat.icon && (
                <stat.icon
                  className="h-4 w-4"
                  style={{ color: stat.iconColor }}
                />
              )}
            </div>
            <div className="mt-2 font-mono text-3xl font-bold text-white">
              {stat.value}
            </div>
            {stat.sub && (
              <p className="mt-1 font-mono text-[10px] text-[#737373]">
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Decisions table */}
        <div className="lg:col-span-2 rounded-[8px] border border-[#262626] bg-[#111111]">
          <div className="border-b border-[#262626] px-5 py-3">
            <h2 className="font-sans text-base font-semibold">
              Recent Decisions
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  {["TIMESTAMP", "AGENT", "VERDICT", "RULE MATCHED", "LATENCY"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-2.5 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-[#737373]"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {decisions.map((d) => (
                  <tr
                    key={d.id}
                    className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors"
                  >
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[11px] text-[#a3a3a3]">
                      {d.timestamp}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-[11px] text-white">
                      {d.agent}
                    </td>
                    <td className="px-4 py-2.5">
                      <VerdictBadge verdict={d.verdict} />
                    </td>
                    <td className="px-4 py-2.5 font-mono text-[11px] text-[#a3a3a3]">
                      {d.ruleMatched}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-[11px] text-[#a3a3a3]">
                      {d.latency}ms
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Chart */}
          <div className="rounded-[8px] border border-[#262626] bg-[#111111] p-5">
            <h3 className="mb-4 font-sans text-sm font-semibold">
              Rule Violations
            </h3>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="violationGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 9, fill: "#737373" }}
                  axisLine={false}
                  tickLine={false}
                  interval={5}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "#737373" }}
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontFamily: "monospace",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="violations"
                  stroke="#f59e0b"
                  fill="url(#violationGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Active Agents */}
          <div className="rounded-[8px] border border-[#262626] bg-[#111111] p-5">
            <h3 className="mb-4 font-sans text-sm font-semibold">
              Active Agents
            </h3>
            <div className="space-y-3">
              {activeAgents.map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center justify-between rounded-[4px] border border-[#262626] bg-[#0d0d0d] px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-white">
                      {agent.name}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="font-mono text-xs text-[#737373]">
                    {agent.decisions.toLocaleString()} Decisions
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade banner */}
      <div className="rounded-[8px] bg-[#f59e0b] px-6 py-3 text-center font-mono text-sm font-semibold text-black">
        Free plan: 73 decisions remaining today. Upgrade for unlimited.
      </div>
    </div>
  );
}
