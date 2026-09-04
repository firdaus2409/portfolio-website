import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="Work Experience" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[91px]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-[96px_1fr] sm:gap-6">
                  <div className="hidden sm:block pt-1 font-mono text-[12px] text-muted-2">
                    {job.start} - {job.end}
                  </div>

                  <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink sm:left-[85px]" />

                  <div className="pl-7 sm:pl-0">
                    <div className="sm:hidden mb-1 font-mono text-[12px] text-muted-2">
                      {job.start} - {job.end}
                    </div>
                    <div className="rounded-xl border border-line bg-surface/60 p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold text-fg">
                          {job.role}
                        </h3>
                      </div>
                      <p className="mt-0.5 text-sm text-accent">{job.company}</p>
                      {job.location && (
                        <p className="font-mono text-[12px] text-muted-2">{job.location}</p>
                      )}

                      <ul className="mt-4 space-y-2.5">
                        {job.points.map((point, j) => (
                          <li key={j} className="flex gap-2.5 text-[14px] leading-relaxed text-muted">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
