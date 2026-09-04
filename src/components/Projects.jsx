import { Download, ExternalLink, TrendingUp } from "lucide-react";
import { projects } from "../data/portfolio";
import { GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function linkIcon(label) {
  if (label === "GitHub") return GithubIcon;
  if (label.includes("Google Play") || label.includes("App Store")) return Download;
  return ExternalLink;
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="Featured Projects" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const liveLinks = (project.links ?? []).filter((link) => link.url);

            return (
              <Reveal key={project.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface/60 transition-colors hover:border-accent/40">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="aspect-video w-full border-b border-line object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-line bg-ink px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.impact && (
                      <p className="mt-4 flex items-center gap-1.5 font-mono text-[12px] text-gold">
                        <TrendingUp size={13} />
                        {project.impact}
                      </p>
                    )}

                    {liveLinks.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                        {liveLinks.map((link) => {
                          const Icon = linkIcon(link.label);
                          return (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[13px] text-fg transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/20"
                            >
                              <Icon size={14} className="text-accent" />
                              {link.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
