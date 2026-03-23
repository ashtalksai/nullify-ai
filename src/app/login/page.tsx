"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Lightbulb, BarChart3 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden w-1/2 flex-col justify-between bg-[#0a0a0a] p-12 lg:flex">
        <Link href="/" className="font-sans text-xl font-bold italic text-[#f59e0b]">
          RuleVault
        </Link>

        <div>
          <h1 className="font-sans text-4xl font-bold leading-tight">
            Real-time AI
            <br />
            <span className="text-[#f59e0b]">Governance.</span>
          </h1>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-[#22c55e]" />
              <span className="text-sm text-[#a3a3a3]">
                Automated Compliance Checks: Stay ahead of regulatory changes.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 h-5 w-5 text-[#f59e0b]" />
              <span className="text-sm text-[#a3a3a3]">
                Explainable AI: Understand every decision your models make.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-5 w-5 text-[#22c55e]" />
              <span className="text-sm text-[#a3a3a3]">
                Risk Mitigation Dashboard: Proactively manage AI risks.
              </span>
            </div>
          </div>
        </div>

        <div />
      </div>

      {/* Right panel — form */}
      <div className="flex w-full flex-col items-center justify-center bg-[#0d0d0d] px-8 lg:w-1/2">
        <div className="w-full max-w-sm">
          <h2 className="font-sans text-2xl font-bold">Welcome back.</h2>

          {error && (
            <div className="mt-4 rounded-[4px] border border-[#ef4444]/30 bg-[#ef4444]/10 px-4 py-2 font-mono text-xs text-[#ef4444]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f59e0b] text-black font-semibold hover:bg-[#d97706] rounded-[4px]"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-[#737373]">
            <Link href="#" className="text-[#f59e0b] hover:underline">
              Forgot password?
            </Link>
          </p>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#262626]" />
            <span className="font-mono text-xs text-[#737373]">OR</span>
            <div className="h-px flex-1 bg-[#262626]" />
          </div>

          <Button
            variant="outline"
            className="w-full border-[#333] bg-[#1a1a1a] text-white hover:bg-[#262626] rounded-[4px]"
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

          <p className="mt-6 text-center text-sm text-[#737373]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#f59e0b] underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
