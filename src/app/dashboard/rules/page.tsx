"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { generateRules } from "@/lib/seed-data";
import { Plus } from "lucide-react";

export default function RulesPage() {
  const rules = useMemo(() => generateRules(), []);
  const [selectedId, setSelectedId] = useState(rules[0].id);
  const selected = rules.find((r) => r.id === selectedId) || rules[0];
  const [testResult, setTestResult] = useState<string | null>(null);

  const testPayload = JSON.stringify(
    {
      transaction_id: "TXN-987654321",
      user_id: "USR-12345",
      amount: 150000.0,
      currency: "USD",
      timestamp: "2024-10-27T14:30:00Z",
      location: "New York, USA",
      confidence: 0.85,
      metadata: {
        device_type: "mobile",
        ip_address: "192.168.1.1",
      },
    },
    null,
    2
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-sans text-lg font-bold">Active Rules</h1>
          <p className="font-mono text-xs text-[#737373]">
            {rules.filter((r) => r.active).length} active rules
          </p>
        </div>
        <Button className="bg-[#f59e0b] text-black font-semibold hover:bg-[#d97706] rounded-[4px]">
          <Plus className="mr-1 h-4 w-4" /> New Rule
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Rule list */}
        <div className="lg:col-span-2 space-y-2">
          {rules.map((rule) => (
            <button
              key={rule.id}
              onClick={() => {
                setSelectedId(rule.id);
                setTestResult(null);
              }}
              className={`w-full rounded-[8px] border p-4 text-left transition-colors ${
                selectedId === rule.id
                  ? "border-[#f59e0b] bg-[#f59e0b]/5"
                  : "border-[#262626] bg-[#111111] hover:border-[#333]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{rule.name}</span>
                <Switch checked={rule.active} />
              </div>
              <p className="mt-1 font-mono text-[10px] text-[#737373]">
                {rule.hits.toLocaleString()} hits
              </p>
            </button>
          ))}
        </div>

        {/* Rule editor */}
        <div className="lg:col-span-3 rounded-[8px] border border-[#262626] bg-[#111111] p-6 space-y-6">
          <h2 className="font-sans text-base font-semibold">
            Edit Rule: {selected.name}
          </h2>

          <div>
            <Label className="text-xs text-[#a3a3a3]">Rule Name</Label>
            <Input
              defaultValue={selected.name}
              className="mt-1 border-[#333] bg-[#1a1a1a] text-white font-mono text-sm rounded-[4px]"
            />
          </div>

          <div>
            <Label className="text-xs text-[#a3a3a3]">Description</Label>
            <textarea
              defaultValue={selected.description}
              className="mt-1 w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] p-3 font-mono text-sm text-[#a3a3a3] outline-none focus:border-[#f59e0b]"
              rows={2}
            />
          </div>

          {/* Condition builder */}
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-xs text-[#a3a3a3]">Condition builder</Label>
              <Button
                variant="outline"
                size="sm"
                className="border-[#333] bg-transparent text-xs text-[#a3a3a3] rounded-[4px]"
              >
                + Add Condition
              </Button>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 rounded-[4px] border border-[#262626] bg-[#0d0d0d] p-3">
                <span className="rounded bg-[#f59e0b] px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                  IF
                </span>
                <select className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-2 py-1 font-mono text-xs text-white">
                  <option>amount</option>
                  <option>credit_score</option>
                  <option>risk_score</option>
                </select>
                <select className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-2 py-1 font-mono text-xs text-white">
                  <option>&gt;</option>
                  <option>&lt;</option>
                  <option>==</option>
                </select>
                <Input
                  defaultValue="100,000"
                  className="h-8 w-28 border-[#333] bg-[#1a1a1a] font-mono text-xs text-white rounded-[4px]"
                />
              </div>
              <div className="flex items-center gap-2 rounded-[4px] border border-[#262626] bg-[#0d0d0d] p-3">
                <span className="rounded bg-[#22c55e] px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                  AND
                </span>
                <select className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-2 py-1 font-mono text-xs text-white">
                  <option>confidence</option>
                  <option>amount</option>
                </select>
                <select className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-2 py-1 font-mono text-xs text-white">
                  <option>&lt;</option>
                  <option>&gt;</option>
                </select>
                <Input
                  defaultValue="0.95"
                  className="h-8 w-28 border-[#333] bg-[#1a1a1a] font-mono text-xs text-white rounded-[4px]"
                />
              </div>
            </div>
          </div>

          {/* Action & Alerting */}
          <div>
            <Label className="text-xs text-[#a3a3a3]">Action & Alerting</Label>
            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-xs text-[#737373]">Action Type</span>
              <div className="flex gap-2">
                {["BLOCK", "FLAG", "APPROVE"].map((action) => (
                  <button
                    key={action}
                    className={`rounded-[4px] px-3 py-1 font-mono text-xs font-bold ${
                      action === "BLOCK"
                        ? "bg-[#ef4444] text-white"
                        : "bg-[#1a1a1a] text-[#737373] border border-[#333]"
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="font-mono text-xs text-[#737373]">
                  Alert on trigger
                </span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Test Rule */}
          <div className="rounded-[8px] border border-[#262626] bg-[#0d0d0d] p-4">
            <h3 className="mb-3 font-sans text-sm font-semibold">Test Rule</h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <Label className="font-mono text-[10px] text-[#737373]">
                  JSON Payload
                </Label>
                <textarea
                  defaultValue={testPayload}
                  className="mt-1 w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] p-3 font-mono text-[10px] text-[#a3a3a3] outline-none h-40"
                />
              </div>
              <div>
                <Label className="font-mono text-[10px] text-[#737373]">
                  Test Result
                </Label>
                {testResult ? (
                  <div className="mt-1 rounded-[4px] border border-[#ef4444]/30 bg-[#ef4444]/10 p-3">
                    <span className="rounded-[4px] bg-[#ef4444] px-4 py-1 font-mono text-lg font-bold text-white">
                      BLOCK
                    </span>
                    <p className="mt-3 font-mono text-[10px] text-[#a3a3a3]">
                      Matched Condition:{" "}
                      <span className="text-white">amount &gt; 100,000</span>
                      <br />
                      AND{" "}
                      <span className="text-[#22c55e]">
                        confidence &lt; 0.95
                      </span>
                    </p>
                    <p className="mt-2 font-mono text-[10px] text-[#737373]">
                      Execution Time: 12ms
                    </p>
                  </div>
                ) : (
                  <div className="mt-1 flex h-40 items-center justify-center rounded-[4px] border border-[#262626] bg-[#1a1a1a]">
                    <span className="font-mono text-xs text-[#737373]">
                      Run a test to see results
                    </span>
                  </div>
                )}
              </div>
            </div>
            <Button
              onClick={() => setTestResult("BLOCK")}
              className="mt-4 w-full bg-[#f59e0b] text-black font-semibold hover:bg-[#d97706] rounded-[4px]"
            >
              Run Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
