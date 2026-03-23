"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const useCases = [
  "Banking & Financial Services",
  "Insurance & Claims",
  "Healthcare & Clinical AI",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h1 className="font-sans text-3xl font-bold sm:text-4xl">
                Talk to our compliance team.
              </h1>
              <p className="mt-4 text-[#a3a3a3]">
                Get a personalized demo of RuleVault for your industry and
                compliance requirements. Response within 1 business day.
              </p>

              <div className="mt-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[#737373]">
                  Use case pre-fill
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCases.map((uc) => (
                    <button
                      key={uc}
                      className="rounded-[4px] border border-[#333] bg-[#1a1a1a] px-4 py-2 text-sm text-[#a3a3a3] transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
                    >
                      {uc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="rounded-[4px] border border-[#262626] bg-[#111111] p-4">
                  <span className="font-mono text-xs text-[#f59e0b]">📧 Email</span>
                  <p className="mt-1 font-mono text-sm text-white">
                    sales@rulevault.ai
                  </p>
                </div>
                <div className="rounded-[4px] border border-[#262626] bg-[#111111] p-4">
                  <span className="font-mono text-xs text-[#f59e0b]">📍 HQ</span>
                  <p className="mt-1 font-mono text-sm text-white">
                    Amsterdam, Netherlands
                  </p>
                </div>
                <div className="rounded-[4px] border border-[#262626] bg-[#111111] p-4">
                  <span className="font-mono text-xs text-[#f59e0b]">⏰ Response</span>
                  <p className="mt-1 font-mono text-sm text-white">
                    Within 1 business day
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[8px] border border-[#262626] bg-[#111111] p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="text-4xl">✅</span>
                  <h3 className="mt-4 font-sans text-xl font-bold">
                    Message sent.
                  </h3>
                  <p className="mt-2 text-sm text-[#a3a3a3]">
                    Our team will get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label className="text-xs text-[#a3a3a3]">First Name</Label>
                      <Input
                        required
                        className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-[#a3a3a3]">Last Name</Label>
                      <Input
                        required
                        className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-[#a3a3a3]">Work Email</Label>
                    <Input
                      type="email"
                      required
                      className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-[#a3a3a3]">Company</Label>
                    <Input
                      className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-[#a3a3a3]">Role</Label>
                    <select className="mt-1 w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] px-3 py-2 text-sm text-white">
                      <option>CCO / Compliance</option>
                      <option>Head of AI / ML</option>
                      <option>CTO / Engineering</option>
                      <option>Legal / Risk</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <Label className="text-xs text-[#a3a3a3]">Message</Label>
                    <textarea
                      rows={4}
                      required
                      className="mt-1 w-full rounded-[4px] border border-[#333] bg-[#1a1a1a] p-3 text-sm text-white outline-none focus:border-[#f59e0b]"
                      placeholder="Tell us about your compliance needs..."
                    />
                  </div>
                  <Button className="w-full bg-[#f59e0b] text-black font-semibold hover:bg-[#d97706] rounded-[4px]">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
