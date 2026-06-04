import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-28 py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured"
          accent="Portfolio"
          description="A mix of product engineering, interface design, and secure platform work delivered for modern digital teams."
          centered
        />
      </Reveal>

      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent opacity-70 transition duration-300 group-hover:opacity-85" />
                <div className="absolute inset-x-4 bottom-4 flex translate-y-3 gap-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-sm text-white backdrop-blur-lg"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-sm text-white backdrop-blur-lg"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
              <div className="space-y-5 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="leading-7 text-zinc-400">{project.description}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
