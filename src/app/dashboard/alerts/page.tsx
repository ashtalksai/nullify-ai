"use client";

import { Bell, Mail, MessageSquare, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const alertTypes = [
  { name: "High-Risk Block", description: "When a high-priority rule blocks a decision", active: true, channel: "Slack + Email" },
  { name: "Anomaly Detection", description: "Unusual patterns in decision volume or block rate", active: true, channel: "Email" },
  { name: "Compliance Breach", description: "EU AI Act requirement violation detected", active: true, channel: "Slack + PagerDuty" },
  { name: "Agent Error", description: "Agent fails to respond or sends malformed payload", active: false, channel: "Slack" },
  { name: "Threshold Exceeded", description: "Daily decision limit approaching or exceeded", active: true, channel: "Email" },
];

const recentAlerts = [
  { id: 1, type: "High-Risk Block", message: "Agent_7A34 blocked 3 consecutive loan applications matching RULE_109B", time: "2 min ago", severity: "critical" },
  { id: 2, type: "Anomaly Detection", message: "Block rate increased 45% in last hour across all agents", time: "18 min ago", severity: "warning" },
  { id: 3, type: "Compliance Breach", message: "Agent_9P6R missing audit trail for 12 decisions — potential Article 12 violation", time: "1 hour ago", severity: "critical" },
  { id: 4, type: "Threshold Exceeded", message: "Free plan: 73/100 daily decisions used. Upgrade recommended.", time: "2 hours ago", severity: "info" },
  { id: 5, type: "High-Risk Block", message: "Offshore transfer flagged: $250K to Cayman Islands account via Agent_2B9C", time: "3 hours ago", severity: "critical" },
];

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-sans text-lg font-bold">Alert Configuration</h1>

      {/* Alert triggers */}
      <div className="rounded-[8px] border border-[#262626] bg-[#111111]">
        <div className="border-b border-[#262626] px-5 py-3">
          <h2 className="font-sans text-sm font-semibold">Trigger Types</h2>
        </div>
        <div className="divide-y divide-[#1a1a1a]">
          {alertTypes.map((alert) => (
            <div key={alert.name} className="flex items-center justify-between px-5 py-4">
              <div>
                <h3 className="text-sm font-medium">{alert.name}</h3>
                <p className="mt-0.5 font-mono text-[10px] text-[#737373]">{alert.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {alert.channel.includes("Slack") && <MessageSquare className="h-3.5 w-3.5 text-[#f59e0b]" />}
                  {alert.channel.includes("Email") && <Mail className="h-3.5 w-3.5 text-[#f59e0b]" />}
                  {alert.channel.includes("PagerDuty") && <Bell className="h-3.5 w-3.5 text-[#ef4444]" />}
                  <span className="font-mono text-[10px] text-[#737373]">{alert.channel}</span>
                </div>
                <Switch defaultChecked={alert.active} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert history */}
      <div className="rounded-[8px] border border-[#262626] bg-[#111111]">
        <div className="border-b border-[#262626] px-5 py-3">
          <h2 className="font-sans text-sm font-semibold">Alert History</h2>
        </div>
        <div className="divide-y divide-[#1a1a1a]">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 px-5 py-4">
              {alert.severity === "critical" ? (
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />
              ) : alert.severity === "warning" ? (
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
              ) : (
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-white">{alert.type}</span>
                  <span className="font-mono text-[10px] text-[#737373]">{alert.time}</span>
                </div>
                <p className="mt-1 font-mono text-[10px] text-[#a3a3a3]">{alert.message}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 border-[#333] bg-transparent text-[10px] text-[#737373] rounded-[4px]"
              >
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
