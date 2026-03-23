import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Zap } from "lucide-react";

const differentiators = [
  {
    icon: ArrowRight,
    title: "Interceptor not Observer",
    description:
      "RuleVault sits directly in the decision path, actively blocking non-compliant actions in real-time, unlike passive monitoring tools that only report violations after they occur.",
  },
  {
    icon: Lock,
    title: "Immutable by Design",
    description:
      "All decisions and rule evaluations are cryptographically sealed and stored on an immutable ledger, providing an unalterable audit trail for regulatory scrutiny.",
  },
  {
    icon: Zap,
    title: "Compliance-Ready APIs",
    description:
      "Our APIs are engineered from the ground up with pre-built connectors for major compliance frameworks, simplifying integration and accelerating your path to compliance.",
  },
];

const team = [
  { name: "Anya Sharma", role: "Co-Founder & CEO" },
  { name: "Ben Carter", role: "Co-Founder & CTO" },
  { name: "Li Wei", role: "Head of AI Ethics" },
  { name: "David Chen", role: "Lead Compliance Architect" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
              HERO
            </p>
            <h1 className="font-sans text-4xl font-bold leading-tight sm:text-5xl">
              Built for the moment
              <br />
              <span className="text-[#f59e0b]">AI meets regulation.</span>
            </h1>
            <div className="mt-4 h-1 w-24 bg-[#f59e0b]" />
            <p className="mt-6 max-w-xl text-lg text-[#a3a3a3]">
              We built RuleVault because no one should have to choose between AI
              innovation and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
                  MISSION
                </p>
                <h2 className="font-sans text-2xl font-bold">
                  Why RuleVault exists
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#a3a3a3]">
                  <p>
                    The arrival of the EU AI Act marked a pivotal shift, mandating
                    accountability and transparency in algorithmic decision-making,
                    creating a new era of regulatory necessity.
                  </p>
                  <p>
                    We recognized a critical gap where existing tools were either
                    reactive or lacked the proactive, real-time controls needed to
                    truly mitigate risk before decisions are made.
                  </p>
                  <p>
                    RuleVault was forged to be an in-path interceptor, not a passive
                    observer, ensuring every AI decision is evaluated against your
                    rules before execution, not after.
                  </p>
                </div>
              </div>
              {/* Terminal info block */}
              <div className="rounded-[8px] border border-[#262626] bg-[#0a0a0a] p-6">
                <div className="mb-3 flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                  <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                  <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                </div>
                <pre className="font-mono text-xs leading-relaxed text-[#a3a3a3]">
                  <span className="text-[#22c55e]">&gt; info</span> RuleVault{"\n"}
                  <span className="text-[#22c55e]">&gt;</span> Founded 2026.{"\n"}
                  <span className="text-[#22c55e]">&gt;</span> HQ: Amsterdam, NL.{"\n"}
                  <span className="text-[#22c55e]">&gt;</span> Compliance frameworks: EU AI Act, HIPAA,{"\n"}
                  {"  "}SOC 2.
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
              DIFFERENTIATORS
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-[8px] border border-[#262626] bg-[#111111] p-6"
                >
                  <d.icon className="mb-4 h-6 w-6 text-[#f59e0b]" />
                  <h3 className="mb-2 font-sans text-base font-semibold">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#a3a3a3]">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-b border-[#262626] bg-[#0d0d0d]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#737373]">
              TEAM
            </p>
            <h2 className="mb-8 font-sans text-2xl font-bold">
              The team behind RuleVault.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 rounded-[8px] border border-[#262626] bg-[#111111] p-5"
                >
                  <div className="h-12 w-12 rounded-full bg-[#262626]" />
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] text-[#f59e0b]">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f59e0b]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="font-sans text-2xl font-bold text-black">
              Ready to intercept your first decision?
            </h2>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/signup">
                <Button className="rounded-[4px] border-2 border-black bg-transparent px-6 font-semibold text-black hover:bg-black hover:text-[#f59e0b]">
                  Start Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="rounded-[4px] border-2 border-black bg-black px-6 font-semibold text-[#f59e0b] hover:bg-transparent hover:text-black">
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
