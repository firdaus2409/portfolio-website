import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.socials.linkedin,
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold text-fg sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            I'm actively looking for full-stack developer roles. If you have an opening
            or just want to talk shop, my inbox is open.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-surface/60 px-6 py-8 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <link.icon size={22} className="text-accent" />
                <span className="font-mono text-[13px] text-fg">{link.label}</span>
                <span className="text-[13px] text-muted">{link.value}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 flex items-center justify-center gap-1.5 font-mono text-[12px] text-muted-2">
            Based in {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
