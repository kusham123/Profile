import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="My"
          accent="Services"
          description="Secure engineering, premium UI delivery, and product-minded execution for startups, agencies, and SaaS teams."
          centered
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="group h-full rounded-[1.75rem] border border-white/10 bg-[#0f0f0f] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.34)] transition duration-300 hover:scale-[1.02] hover:border-rose-400/20 hover:shadow-[0_22px_60px_rgba(255,77,77,0.12)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10 text-rose-300">
                  <Icon size={24} />
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="leading-7 text-zinc-400">{service.description}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-200 transition group-hover:text-rose-300">
                  Learn more
                  <ArrowUpRight size={16} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
