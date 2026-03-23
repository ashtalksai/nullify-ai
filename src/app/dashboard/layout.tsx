"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  List,
  FileText,
  Bell,
  Settings,
} from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/rules", icon: List, label: "Rules" },
  { href: "/dashboard/decisions", icon: FileText, label: "Decisions" },
  { href: "/dashboard/alerts", icon: Bell, label: "Alerts" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0d0d0d]">
      {/* Sidebar */}
      <aside className="hidden w-60 flex-col border-r border-[#262626] bg-[#0a0a0a] lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-[#262626] px-6">
          <Image
            src="/images/logo-placeholder.png"
            alt="RuleVault"
            width={24}
            height={24}
          />
          <span className="font-sans text-lg font-bold italic text-[#f59e0b]">
            RuleVault
          </span>
        </div>
        <nav className="flex-1 px-3 py-4">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mb-1 flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                    : "text-[#a3a3a3] hover:bg-[#1a1a1a] hover:text-white"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-[#262626] bg-[#0d0d0d] px-6">
          {/* Mobile nav */}
          <div className="flex items-center gap-3 lg:hidden">
            <Image
              src="/images/logo-placeholder.png"
              alt="RuleVault"
              width={24}
              height={24}
            />
            <span className="font-sans font-bold italic text-[#f59e0b]">
              RuleVault
            </span>
          </div>

          <div className="hidden lg:block">
            <h1 className="font-sans text-lg font-bold">
              {sidebarLinks.find((l) => l.href === pathname)?.label || "Dashboard"}
            </h1>
            <p className="font-mono text-[10px] text-[#737373]">
              {new Date().toISOString().replace("T", " ").slice(0, 19)} UTC
            </p>
          </div>

          <Link href="/pricing">
            <button className="rounded-[4px] border border-[#f59e0b] bg-transparent px-4 py-1.5 font-mono text-xs font-semibold text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black transition-colors">
              Upgrade to Pro
            </button>
          </Link>
        </header>

        {/* Mobile bottom nav */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-[#262626] bg-[#0a0a0a] lg:hidden">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-1 flex-col items-center gap-1 py-3 text-[10px] ${
                  active ? "text-[#f59e0b]" : "text-[#737373]"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 pb-24 lg:pb-6">{children}</div>
      </main>
    </div>
  );
}
