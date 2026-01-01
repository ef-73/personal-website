import Background from "../components/Background";
import ThemeToggle from "../components/ThemeToggle";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

function SectionTitle({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {note && <p className="mt-1 text-zinc-600 dark:text-zinc-400">{note}</p>}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100">
      <Background />

      {/* top nav */}
      <header className="sticky top-0 z-10 border-b border-zinc-200/60 bg-white/60 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-medium">Your Name</a>
          <nav className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* page */}
      <div id="top" className="mx-auto max-w-5xl px-5 py-12">
        {/* hero */}
        <Reveal>
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Robotics / Software / Whatever fits you</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              I build <span className="underline decoration-zinc-300 dark:decoration-zinc-700">useful</span> things.
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
              Two short sentences: what you’re into + what you’re currently building/learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-zinc-900"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-900"
              >
                Resume
              </a>
              <a
                href="mailto:you@example.com"
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-900"
              >
                Email Me
              </a>
            </div>
          </div>
        </Reveal>

        {/* projects */}
        <div className="mt-12">
          <Reveal>
            <SectionTitle id="projects" title="Projects" note="A few things I’ve shipped / built / explored." />
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-300">{p.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3 text-sm">
                    <a className="underline hover:opacity-80" href={p.links.demo}>Demo</a>
                    <a className="underline hover:opacity-80" href={p.links.code}>Code</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* about */}
        <div className="mt-12">
          <Reveal>
            <SectionTitle id="about" title="About" note="Keep it short, specific, and human." />
          </Reveal>
          <Reveal>
            <div className="mt-4 rounded-3xl border border-zinc-200 bg-white/70 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40">
              <p className="text-zinc-700 dark:text-zinc-300">
                A few lines: what you care about, what you’re good at, what you’re aiming toward.
              </p>
            </div>
          </Reveal>
        </div>

        {/* contact */}
        <div className="mt-12">
          <Reveal>
            <SectionTitle id="contact" title="Contact" note="Links that matter." />
          </Reveal>
          <Reveal>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-900" href="mailto:you@example.com">
                you@example.com
              </a>
              <a className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-900" href="#">
                GitHub
              </a>
              <a className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:hover:bg-zinc-900" href="#">
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <footer className="mt-16 pb-8 text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Your Name
        </footer>
      </div>
    </main>
  );
}
