import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d0d0d]">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="font-sans text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 font-mono text-xs text-[#737373]">
            Last updated: March 23, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#a3a3a3]">
            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                1. Information We Collect
              </h2>
              <p>
                RuleVault processes <strong className="text-white">decision metadata only</strong> — we do NOT store raw payload data or personally identifiable information (PII) unless you explicitly configure payload retention in your settings.
              </p>
              <p className="mt-2">We collect:</p>
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li>Account information (name, email, company, role)</li>
                <li>Decision metadata (timestamps, verdict, rule matched, latency)</li>
                <li>Usage analytics (decisions per day, block rate, feature usage)</li>
                <li>Technical logs (IP addresses, browser type, session data)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                2. How We Use Your Information
              </h2>
              <p>
                Your data is used to provide the RuleVault service, including decision interception, audit logging, alert notifications, and compliance reporting. We do not sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                3. Data Retention
              </h2>
              <p>
                Retention periods depend on your plan:
              </p>
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li><strong className="text-white">Free:</strong> 30 days</li>
                <li><strong className="text-white">Lite:</strong> 90 days</li>
                <li><strong className="text-white">Pro:</strong> 7 years (EU AI Act compliant for high-risk AI systems)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                4. GDPR Rights
              </h2>
              <p>
                Under GDPR, you have the right to access, rectify, erase, restrict processing, and port your data. To exercise these rights, contact <span className="text-[#f59e0b]">privacy@rulevault.ai</span>.
              </p>
              <p className="mt-2">
                We support GDPR Article 17 (Right to Erasure) via our data deletion API. A Data Processing Agreement (DPA) is available on request for enterprise customers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                5. Data Security
              </h2>
              <p>
                All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Audit logs are cryptographically signed and stored on immutable ledgers. We are SOC 2 Type II in progress and HIPAA-ready for healthcare clients.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                6. EU Data Residency
              </h2>
              <p>
                All EU customer data is processed and stored in EU-based infrastructure (Frankfurt, Germany). Pro plan customers can choose their data residency region.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-sans text-lg font-semibold text-white">
                7. Contact
              </h2>
              <p>
                For privacy-related inquiries: <span className="text-[#f59e0b]">privacy@rulevault.ai</span>
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
