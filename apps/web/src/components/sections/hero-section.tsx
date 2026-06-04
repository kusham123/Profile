import Image from "next/image";
import { MapPin } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { siteConfig, stats, techStack } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="space-y-8">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-300">
              Full-stack engineer portfolio
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hello, I&apos;m{" "}
                <span className="bg-linear-to-r from-rose-300 via-rose-500 to-red-400 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </h1>
              <p className="max-w-2xl text-xl text-zinc-200 sm:text-2xl">{siteConfig.role}</p>
              <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {siteConfig.description} {siteConfig.heroBlurb}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-rose-500 to-red-400 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_35px_rgba(255,77,77,0.28)] transition duration-300 hover:-translate-y-px hover:shadow-[0_16px_50px_rgba(255,77,77,0.35)]"
            >
              Let&apos;s Work Together
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-rose-300">
              <MapPin size={18} />
            </span>
            {siteConfig.location}
          </div>
        </Reveal>

        <Reveal className="relative" delay={0.1}>
          <div className="relative mx-auto max-w-105">
            <div className="absolute inset-10 rounded-full bg-rose-500/15 blur-3xl" />
            <div className="relative rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-rose-400/30 bg-linear-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_0_50px_rgba(255,77,77,0.18)] sm:h-80 sm:w-80">
                <Image
                  src="/profile-placeholder.svg"
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  className="rounded-full object-cover p-3"
                  priority
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/35 p-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
