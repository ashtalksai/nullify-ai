"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Copy, Key, RefreshCw } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <h1 className="font-sans text-lg font-bold">Settings</h1>

      {/* API Keys */}
      <div className="rounded-[8px] border border-[#262626] bg-[#111111] p-6">
        <h2 className="mb-4 flex items-center gap-2 font-sans text-sm font-semibold">
          <Key className="h-4 w-4 text-[#f59e0b]" /> API Keys
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-[4px] border border-[#262626] bg-[#0d0d0d] p-3">
            <span className="flex-1 font-mono text-xs text-[#a3a3a3]">
              rv_live_4a8b2c...d9e1f0
            </span>
            <Button variant="ghost" size="sm" className="h-7 text-[#737373]">
              <Copy className="h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[#333] bg-transparent text-xs text-[#a3a3a3] rounded-[4px]"
            >
              <RefreshCw className="mr-1 h-3.5 w-3.5" /> Rotate Key
            </Button>
            <Button
              size="sm"
              className="bg-[#f59e0b] text-black font-semibold rounded-[4px] text-xs"
            >
              Generate New Key
            </Button>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="rounded-[8px] border border-[#262626] bg-[#111111] p-6">
        <h2 className="mb-4 font-sans text-sm font-semibold">Profile</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="text-xs text-[#a3a3a3]">Company Name</Label>
            <Input
              defaultValue="Acme Financial"
              className="mt-1 border-[#333] bg-[#1a1a1a] text-white font-mono text-sm rounded-[4px]"
            />
          </div>
          <div>
            <Label className="text-xs text-[#a3a3a3]">Email</Label>
            <Input
              defaultValue="compliance@acmefinancial.com"
              className="mt-1 border-[#333] bg-[#1a1a1a] text-white font-mono text-sm rounded-[4px]"
            />
          </div>
        </div>
        <Button className="mt-4 bg-[#f59e0b] text-black font-semibold rounded-[4px] text-xs">
          Save Changes
        </Button>
      </div>

      {/* Preferences */}
      <div className="rounded-[8px] border border-[#262626] bg-[#111111] p-6">
        <h2 className="mb-4 font-sans text-sm font-semibold">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Failsafe Mode</p>
              <p className="font-mono text-[10px] text-[#737373]">
                Block all decisions when RuleVault is unreachable
              </p>
            </div>
            <select className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-white">
              <option>Fail-Closed (Block All)</option>
              <option>Fail-Open (Approve All)</option>
              <option>Fail-to-Queue</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Email Notifications</p>
              <p className="font-mono text-[10px] text-[#737373]">
                Receive daily compliance digest
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Data Residency</p>
              <p className="font-mono text-[10px] text-[#737373]">
                Where your audit data is stored
              </p>
            </div>
            <select className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-1.5 font-mono text-xs text-white">
              <option>EU (Frankfurt)</option>
              <option>US (Virginia)</option>
              <option>APAC (Singapore)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-[8px] border border-[#ef4444]/30 bg-[#111111] p-6">
        <h2 className="mb-4 font-sans text-sm font-semibold text-[#ef4444]">
          Danger Zone
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">Delete Account</p>
            <p className="font-mono text-[10px] text-[#737373]">
              Permanently delete your account and all associated data
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-[#ef4444]/30 bg-transparent text-xs text-[#ef4444] rounded-[4px]"
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
