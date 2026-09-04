import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { education, languages } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="Education" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.08}>
                <div className="rounded-xl border border-line bg-surface/60 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span className="font-mono text-[12px] text-muted-2">{edu.year}</span>
                  </div>

                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-fg">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{edu.institution}</p>
                  {edu.detail && (
                    <p className="mt-1 font-mono text-[12px] text-muted-2">{edu.detail}</p>
                  )}

                  {edu.coursework.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded border border-line bg-ink px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-xl border border-line bg-surface/60 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-mono text-[13px] text-accent">
                <LanguagesIcon size={15} />
                Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang} className="text-[14px] text-muted">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
