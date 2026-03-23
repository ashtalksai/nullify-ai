import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Platform: [
    { href: "/", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
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
            <p className="mt-3 text-sm text-[#737373]">
              Every AI decision, approved or blocked in milliseconds.
            </p>
            {/* Compliance badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-[4px] border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-2 py-1 font-mono text-[10px] text-[#f59e0b]">
                EU AI Act Aligned
              </span>
              <span className="rounded-[4px] border border-[#737373]/30 bg-[#737373]/10 px-2 py-1 font-mono text-[10px] text-[#737373]">
                SOC 2 in progress
              </span>
              <span className="rounded-[4px] border border-[#737373]/30 bg-[#737373]/10 px-2 py-1 font-mono text-[10px] text-[#737373]">
                HIPAA Ready
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#737373]">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#a3a3a3] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[#262626] pt-6">
          <p className="font-mono text-xs text-[#525252]">
            © {new Date().getFullYear()} RuleVault Inc. All rights reserved. Data stream active.
          </p>
        </div>
      </div>
    </footer>
  );
}
