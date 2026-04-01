import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { articles } from "@/lib/site-data";

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-28 py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Latest Insights"
          title="Thoughtful writing on"
          accent="building better products"
          description="A few notes on architecture, design systems, developer experience, and security-minded software delivery."
          centered
        />
      </Reveal>

      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {articles.map((article, index) => (
          <Reveal key={article.title} delay={index * 0.06}>
            <a
              href={article.href}
              className="group block rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-rose-400/20 hover:bg-white/[0.07]"
            >
              <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                {article.category}
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{article.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{article.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-200 transition group-hover:text-rose-300">
                Read article
                <ArrowRight size={16} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
