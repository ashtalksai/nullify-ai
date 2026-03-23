"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TARGET_DATE = new Date("2026-08-02T00:00:00Z").getTime();

export function CTASection() {
  const [mounted, setMounted] = useState(false);
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const d = Math.max(0, TARGET_DATE - Date.now());
      setDiff({
        days: Math.floor(d / 86400000),
        hours: Math.floor((d / 3600000) % 24),
        minutes: Math.floor((d / 60000) % 60),
        seconds: Math.floor((d / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0d0d0d] to-[#111111]">
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
          11. FINAL CTA
        </p>
        <h2 className="font-sans text-3xl font-bold sm:text-4xl">
          August 2, 2026 is coming fast.
        </h2>
        {mounted && (
          <p className="mt-4 font-mono text-sm font-bold text-[#f59e0b]">
            {diff.days} DAYS | {diff.hours} HOURS | {diff.minutes} MINUTES |{" "}
            {diff.seconds} SECONDS
            <br />
            UNTIL EU AI ACT ENFORCEMENT
          </p>
        )}
        <p className="mx-auto mt-6 max-w-xl text-[#a3a3a3]">
          Secure your AI operations with compliant, auditable decision guardrails
          today.
        </p>
        <Link href="/signup" className="mt-8 inline-block">
          <Button className="rounded-[4px] bg-[#f59e0b] px-8 py-3 text-lg font-bold text-black hover:bg-[#d97706]">
            Start Free — No Credit Card Required
          </Button>
        </Link>
      </div>
    </section>
  );
}
