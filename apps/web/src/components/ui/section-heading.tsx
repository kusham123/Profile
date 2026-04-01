import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", centered && "mx-auto max-w-2xl text-center")}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}{" "}
        {accent ? (
          <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-red-300 bg-clip-text text-transparent">
            {accent}
          </span>
        ) : null}
      </h2>
      <p className="text-sm leading-7 text-zinc-400 sm:text-base">{description}</p>
    </div>
  );
}
