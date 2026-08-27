"use client";

import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  Captions,
  Smartphone,
  Zap,
  Check,
  Scissors,
} from "lucide-react";

const features = [
  {
    title: "AI Clip Detection",
    description:
      "Find the strongest moments in your long-form videos automatically.",
    icon: Sparkles,
  },
  {
    title: "Smart Captions",
    description:
      "Generate clean, dynamic captions designed for short-form viewers.",
    icon: Captions,
  },
  {
    title: "Smart Reframing",
    description:
      "Automatically keep the important action centered for vertical videos.",
    icon: Smartphone,
  },
  {
    title: "Fast Workflow",
    description:
      "Upload once and turn a long video into a ready-to-post clip library.",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black tracking-tight">
          CLIP<span className="text-[#a3ff12]">TIME</span>
        </div>

        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#how" className="hover:text-white">
            How it works
          </a>
        </div>

        <Link
          href="/upload"
          className="rounded-full bg-[#a3ff12] px-5 py-3 text-sm font-bold text-black"
        >
          Start creating
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-20 text-center md:pt-32">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
          <Sparkles size={14} className="text-[#a3ff12]" />
          AI-powered video clipping
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-8xl">
          Your best moments.
          <br />
          <span className="text-[#a3ff12]">
            Automatically clipped.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
          Turn long videos, podcasts, streams and interviews into
          scroll-stopping short-form content in minutes.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/upload"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a3ff12] px-7 py-4 font-bold text-black"
          >
            Upload a video
            <ArrowRight size={18} />
          </Link>

          <a
            href="#how"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold"
          >
            <Play size={16} />
            See how it works
          </a>
        </div>

        <div
          id="how"
          className="mx-auto mt-20 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-2"
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[22px] bg-[#0d0d0d]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(163,255,18,.16),transparent_35%)]" />

            <div className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#a3ff12] text-black">
                <Play fill="currentColor" />
              </div>

              <div className="text-sm font-semibold text-white/40">
                LONG-FORM VIDEO
              </div>

              <div className="my-3 text-3xl font-black">
                → AI ANALYSIS →
              </div>

              <div className="text-sm font-semibold text-[#a3ff12]">
                READY-TO-POST SHORTS
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a3ff12]">
            Everything automated
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            From long-form to short-form.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-black/30 p-8"
                >
                  <Icon className="mb-8 text-[#a3ff12]" size={30} />

                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-white/50">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a3ff12]">
            Free to use
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            No subscription required.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/45">
            Clip Time is built to give creators powerful AI video tools
            without forcing them into an expensive subscription.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-md rounded-3xl border border-[#a3ff12]/40 bg-[#a3ff12]/[0.06] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Clip Time Free</h3>
            <Scissors className="text-[#a3ff12]" />
          </div>

          <div className="mt-5 text-5xl font-black">$0</div>

          <p className="mt-2 text-white/40">
            No credit card required.
          </p>

          <div className="mt-8 space-y-4 text-sm text-white/70">
            <p>
              <Check className="mr-2 inline text-[#a3ff12]" size={16} />
              AI clip detection
            </p>

            <p>
              <Check className="mr-2 inline text-[#a3ff12]" size={16} />
              Automatic captions
            </p>

            <p>
              <Check className="mr-2 inline text-[#a3ff12]" size={16} />
              Vertical video formatting
            </p>

            <p>
              <Check className="mr-2 inline text-[#a3ff12]" size={16} />
              Download your clips
            </p>
          </div>

          <Link
            href="/upload"
            className="mt-8 block rounded-full bg-[#a3ff12] py-4 text-center font-bold text-black"
          >
            Start creating
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row">
          <div className="font-black">
            CLIP<span className="text-[#a3ff12]">TIME</span>
          </div>

          <p className="text-sm text-white/30">
            Your best moments. Automatically clipped.
          </p>
        </div>
      </footer>
    </main>
  );
}
