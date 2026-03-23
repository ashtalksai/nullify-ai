import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d]">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-sans text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 font-mono text-xs text-[#737373]">
            Last updated: March 23, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#a3a3a3]">
            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using RuleVault (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                2. Acceptable Use
              </h2>
              <p>You agree to use RuleVault only for lawful purposes, including:</p>
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li>Intercepting and evaluating AI-generated decisions against compliance rules</li>
                <li>Maintaining audit trails for regulatory compliance</li>
                <li>Configuring rules and alerts for your AI systems</li>
              </ul>
              <p className="mt-2">You may NOT:</p>
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li>Use the Service to circumvent regulations or facilitate illegal activities</li>
                <li>Attempt to reverse-engineer, decompile, or extract source code</li>
                <li>Use the API to overload or disrupt the Service</li>
                <li>Share API keys or account credentials with unauthorized parties</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                3. Data Ownership
              </h2>
              <p>
                <strong className="text-white">You own your data.</strong> All decision payloads, rule configurations, and audit logs belong to you. RuleVault processes your data solely to provide the Service. We do not use your data for training, selling, or any purpose beyond service delivery.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                4. Service Level Agreements (SLA)
              </h2>
              <p>SLA tiers by plan:</p>
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li><strong className="text-white">Free:</strong> Best effort, no SLA guarantee</li>
                <li><strong className="text-white">Lite:</strong> 99.5% uptime, standard support (email, 24h response)</li>
                <li><strong className="text-white">Pro:</strong> 99.9% uptime, dedicated SLA, priority support (4h response), incident post-mortems</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                5. Liability Limitations
              </h2>
              <p>
                RuleVault is a decision-governance tool, not a legal compliance guarantee. While we provide the infrastructure for AI decision interception and audit logging, ultimate compliance responsibility lies with you. RuleVault&apos;s total liability is limited to the amount paid for the Service in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                6. Failsafe Behavior
              </h2>
              <p>
                In the event of a Service outage, your configured failsafe mode determines behavior: fail-closed (block all), fail-open (approve all), or fail-to-queue. RuleVault is not liable for decisions made during an outage under your chosen failsafe configuration.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                7. Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of the Netherlands. Pro plan customers may elect EU jurisdiction for dispute resolution. Any disputes shall be resolved through binding arbitration in Amsterdam, Netherlands.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                8. Termination
              </h2>
              <p>
                You may terminate your account at any time. Upon termination, your data will be retained for your configured retention period, after which it will be permanently deleted. You may request immediate data deletion via our API or by contacting <span className="text-[#f59e0b]">legal@rulevault.ai</span>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                9. Contact
              </h2>
              <p>
                For legal inquiries: <span className="text-[#f59e0b]">legal@rulevault.ai</span>
              </p>
              <p className="mt-1">
                RuleVault Inc. — Amsterdam, Netherlands
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
