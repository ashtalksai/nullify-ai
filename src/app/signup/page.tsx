"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    role: "CCO",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Signup failed");
        return;
      }

      // Auto sign in after signup
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Account created. Please sign in.");
        router.push("/login");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = () => {
    const len = form.password.length;
    if (len === 0) return { label: "", color: "", width: "0%" };
    if (len < 6) return { label: "Weak", color: "#ef4444", width: "33%" };
    if (len < 10) return { label: "Medium", color: "#f59e0b", width: "66%" };
    return { label: "Strong", color: "#22c55e", width: "100%" };
  };

  const strength = passwordStrength();

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden w-1/2 flex-col justify-between bg-[#0a0a0a] p-12 lg:flex">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-placeholder.png" alt="RuleVault" width={28} height={28} />
          <span className="font-sans text-xl font-bold italic text-[#f59e0b]">
            RuleVault
          </span>
        </Link>

        <div>
          <h1 className="font-sans text-4xl font-bold leading-tight">
            Start intercepting AI decisions in{" "}
            <span className="text-[#f59e0b]">60 seconds.</span>
          </h1>
          <p className="mt-4 max-w-md text-[#a3a3a3]">
            Ensure compliance with the EU AI Act and global regulations through
            real-time monitoring and explainability.
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <div className="font-mono text-2xl font-bold text-[#f59e0b]">847ms</div>
            <div className="font-mono text-xs text-[#737373]">avg response</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-bold text-[#f59e0b]">99.9%</div>
            <div className="font-mono text-xs text-[#737373]">uptime</div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex w-full flex-col items-center justify-center bg-[#0d0d0d] px-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="font-sans text-2xl font-bold">Create your account.</h2>

          {error && (
            <div className="mt-4 rounded-[4px] border border-[#ef4444]/30 bg-[#ef4444]/10 px-4 py-2 font-mono text-xs text-[#ef4444]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label className="text-sm text-[#a3a3a3]">Full Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                required
              />
            </div>
            <div>
              <Label className="text-sm text-[#a3a3a3]">Work Email</Label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                required
              />
            </div>
            <div>
              <Label className="text-sm text-[#a3a3a3]">Password</Label>
              <Input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
                required
              />
              {form.password && (
                <div className="mt-2">
                  <div className="h-1 w-full rounded-full bg-[#262626]">
                    <div
                      className="h-1 rounded-full transition-all"
                      style={{
                        width: strength.width,
                        backgroundColor: strength.color,
                      }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between">
                    <span className="font-mono text-[10px]" style={{ color: "#ef4444" }}>
                      Weak
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: "#f59e0b" }}>
                      Medium
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: "#22c55e" }}>
                      Strong
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <Label className="text-sm text-[#a3a3a3]">Company</Label>
              <Input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="mt-1 border-[#333] bg-[#1a1a1a] text-white rounded-[4px]"
              />
            </div>
            <div>
              <Label className="text-sm text-[#a3a3a3]">Role</Label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="mt-1 w-full rounded-[4px] border border-[#333] bg-[#f59e0b] px-3 py-2 text-sm text-black"
              >
                <option value="CCO">CCO</option>
                <option value="Head of AI">Head of AI</option>
                <option value="CTO">CTO</option>
                <option value="Developer">Developer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex items-start gap-2 text-xs text-[#737373]">
              <input type="checkbox" required className="mt-0.5" />
              <span>
                I agree to the{" "}
                <Link href="/terms" className="text-[#f59e0b] underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#f59e0b] underline">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-[#333] bg-[#1a1a1a] text-white hover:bg-[#262626] rounded-[4px]"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#f59e0b] text-black font-semibold hover:bg-[#d97706] rounded-[4px]"
              >
                {loading ? "Creating..." : "Create Account"}
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-[#737373]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#f59e0b] underline">
              Log In.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
