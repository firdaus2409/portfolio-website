import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center font-mono text-[12px] text-muted-2 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
