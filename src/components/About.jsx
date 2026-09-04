import { about, profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.1} className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <p className="flex items-center gap-1.5 pt-2 font-mono text-[13px] text-muted-2">
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl border border-line bg-surface/60 p-6">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-wide text-muted-2">
                Quick stats
              </p>
              <dl className="space-y-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-muted">{stat.label}</dt>
                    <dd className="font-display text-lg font-semibold text-gold">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
