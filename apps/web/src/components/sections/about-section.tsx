import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillHighlights, timeline } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,77,77,0.12),_transparent_55%)]" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
              <Image
                src="/profile-workspace.svg"
                alt="Developer workspace illustration"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="About Me"
              title="Crafting secure products with"
              accent="clarity and depth"
              description="I work across product design, frontend architecture, backend delivery, and cybersecurity with a focus on elegant execution and long-term maintainability."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="space-y-5">
                {skillHighlights.map((skill) => (
                  <div key={skill.label} className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-200">{skill.label}</span>
                      <span className="text-zinc-500">{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-rose-500 via-rose-400 to-red-300 shadow-[0_0_18px_rgba(255,77,77,0.3)]"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Experience Timeline</h3>
              <div className="mt-6 space-y-6">
                {timeline.map((item) => (
                  <div key={`${item.period}-${item.title}`} className="grid gap-4 sm:grid-cols-[140px_1fr]">
                    <div className="text-sm font-medium text-rose-300">{item.period}</div>
                    <div className="relative border-l border-white/10 pl-5">
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_14px_rgba(255,77,77,0.55)]" />
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-zinc-500">{item.company}</p>
                      <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
