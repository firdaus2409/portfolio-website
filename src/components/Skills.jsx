import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -40 : 40, opacity: 0 }),
};

const columnsFor = (count) => {
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
};

const gridColsClass = { 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" };
const gridWidthClass = { 2: "max-w-md", 3: "max-w-xl", 4: "max-w-2xl" };

export default function Skills() {
  // [index, direction]: direction only affects which way the next
  // card slides in from, it isn't shown anywhere.
  const [[index, direction], setState] = useState([0, 0]);

  const go = (step) => {
    setState(([current]) => [(current + step + skills.length) % skills.length, step]);
  };

  const goTo = (target) => {
    setState(([current]) => [target, target > current ? 1 : -1]);
  };

  const group = skills[index];
  const cols = columnsFor(group.items.length);

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title="Skills" />

        <Reveal delay={0.1} className="flex flex-col items-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-4 sm:gap-8">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous skill category"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent sm:h-14 sm:w-14"
            >
              <ChevronLeft size={22} />
            </button>

            {/* `layout` lets this box smoothly resize to fit whichever
                category is showing, instead of jump-cutting or padding
                shorter categories out to match the tallest one. */}
            <motion.div
              layout
              transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
              className="w-full overflow-hidden rounded-2xl border border-line bg-surface/60"
            >
              <div className="relative overflow-hidden p-8 text-center sm:p-10">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={group.category}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) go(1);
                      else if (info.offset.x > 60) go(-1);
                    }}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <h3 className="mb-6 font-display text-2xl font-semibold text-accent sm:text-3xl">
                      {group.category}
                    </h3>
                    <div
                      className={`mx-auto grid ${gridWidthClass[cols]} ${gridColsClass[cols]} gap-2.5 sm:gap-3`}
                    >
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-line bg-ink px-3.5 py-2.5 text-sm text-fg sm:px-4 sm:py-3"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next skill category"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent sm:h-14 sm:w-14"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2.5">
            {skills.map((s, i) => (
              <button
                key={s.category}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.category}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-accent" : "w-2 bg-line"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
