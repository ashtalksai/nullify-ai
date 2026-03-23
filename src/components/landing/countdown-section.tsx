"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-08-02T00:00:00Z").getTime();

function getTimeRemaining() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownSection() {
  const [time, setTime] = useState(getTimeRemaining());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="border-b border-[#f59e0b]/30 bg-gradient-to-r from-[#f59e0b]/10 via-[#f59e0b]/5 to-[#f59e0b]/10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-[#f59e0b]">
          EU AI ACT COUNTDOWN
        </p>
        <h2 className="font-sans text-2xl font-bold sm:text-3xl lg:text-4xl">
          August 2, 2026 — EU AI Act Enforcement
        </h2>
        <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4">
          {mounted ? (
            <>
              <CountdownUnit value={pad(time.days)} label="DAYS" />
              <span className="font-mono text-3xl text-[#f59e0b] sm:text-4xl">:</span>
              <CountdownUnit value={pad(time.hours)} label="HOURS" />
              <span className="font-mono text-3xl text-[#f59e0b] sm:text-4xl">:</span>
              <CountdownUnit value={pad(time.minutes)} label="MINUTES" />
              <span className="font-mono text-3xl text-[#f59e0b] sm:text-4xl">:</span>
              <CountdownUnit value={pad(time.seconds)} label="SECONDS" />
            </>
          ) : (
            <>
              <CountdownUnit value="XX" label="DAYS" />
              <span className="font-mono text-3xl text-[#f59e0b] sm:text-4xl">:</span>
              <CountdownUnit value="XX" label="HOURS" />
              <span className="font-mono text-3xl text-[#f59e0b] sm:text-4xl">:</span>
              <CountdownUnit value="XX" label="MINUTES" />
              <span className="font-mono text-3xl text-[#f59e0b] sm:text-4xl">:</span>
              <CountdownUnit value="XX" label="SECONDS" />
            </>
          )}
        </div>
        <p className="mt-4 font-mono text-xs text-[#f59e0b]">
          FINE AMOUNTS: UP TO <span className="font-bold">€30,000,000</span> OR{" "}
          <span className="font-bold">6% GLOBAL ANNUAL REVENUE</span>. REGULATORY
          ACTION IS IMMINENT.
        </p>
      </div>
    </section>
  );
}

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-mono text-3xl font-bold text-white sm:text-5xl">
        {value}
      </div>
      <div className="mt-1 font-mono text-[10px] tracking-wider text-[#737373]">
        {label}
      </div>
    </div>
  );
}
