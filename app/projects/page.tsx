import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="relative w-full px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-3 font-body text-xs font-medium uppercase tracking-[0.22em] text-white/50 transition-colors duration-500 hover:text-white"
        >
          <svg
            className="h-4 w-4 text-accent/85 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13 8H3M3 8L7 4M3 8L7 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>

        <div className="mb-14 max-w-3xl">
          <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.28em] text-accent/85">
            Complete Archive
          </p>
          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em] text-white">
            All Projects
          </h1>
          <p className="mt-7 max-w-2xl font-body text-base leading-7 text-white/55 md:text-lg md:leading-8">
            A focused archive of automotive concepts, industrial design,
            branding systems, and motion-led visual work by Steel Drake.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-[border-color,background-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              aria-label={`View project: ${project.title} - ${project.category}, ${project.year}`}
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-elevated">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-[0.82] contrast-[1.06] saturate-[0.9] transition-[filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035] group-hover:brightness-[0.94] group-hover:contrast-[1.12] group-hover:saturate-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-transparent" />
                  <span
                    className="absolute left-5 top-5 font-body text-[10px] font-medium uppercase tracking-[0.22em]"
                    style={{ color: project.accentColor }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                      {project.category}
                    </p>
                    <span className="font-body text-[10px] text-white/35">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 font-body text-sm leading-6 text-white/52">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.16em] text-white/42"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
