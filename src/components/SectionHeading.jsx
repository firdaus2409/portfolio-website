import Reveal from "./Reveal";

export default function SectionHeading({ title }) {
  return (
    <Reveal className="mb-12">
      <h2 className="text-balance font-display text-3xl font-semibold text-fg sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
