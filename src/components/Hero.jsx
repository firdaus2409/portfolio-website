import { motion } from "framer-motion";
import { ArrowDown, ChevronDown, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { LinkedinIcon } from "./Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
        style={{ animation: "soft-drift 14s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center lg:px-8">
        {profile.availableForWork && (
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availabilityLabel}
          </motion.span>
        )}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] text-fg sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-4 flex h-9 items-center justify-center font-display text-xl text-muted sm:text-2xl"
        >
          <span className="text-gold">{role}</span>
          <span
            className="ml-1 inline-block h-6 w-[2px] bg-gold"
            style={{ animation: "caret-blink 1s step-end infinite" }}
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-5 max-w-xl text-balance text-[15px] leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-4 flex items-center gap-1.5 font-mono text-[13px] text-muted-2"
        >
          <MapPin size={14} />
          {profile.location}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={15} />
            Email me
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-fg transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowDown size={15} />
            Resume
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-2 transition-colors hover:text-accent"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
