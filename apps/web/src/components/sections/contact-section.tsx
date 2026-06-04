import { Github, Linkedin, Mail, Send } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-data";

const socials = [
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail }
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-24 sm:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s Work"
              accent="Together"
              description="Whether you need a React frontend, a scalable Node.js backend, or help shipping a full-stack product, I&apos;d love to hear about it."
            />
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Socials</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300 transition hover:border-rose-400/20 hover:text-white"
                    >
                      <Icon size={16} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
              <div className="mt-5 space-y-2 text-sm text-zinc-400">
                <p>{siteConfig.email}</p>
                <p>{siteConfig.phone}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-zinc-300">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-400/35"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-zinc-300">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-400/35"
                />
              </label>
            </div>
            <label className="mt-5 block space-y-2">
              <span className="text-sm text-zinc-300">Message</span>
              <textarea
                rows={6}
                placeholder="Tell me about your project, goals, and timeline."
                className="w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-400/35"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-rose-500 to-red-400 px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(255,77,77,0.22)] transition hover:-translate-y-px"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
