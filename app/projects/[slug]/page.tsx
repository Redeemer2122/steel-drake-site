import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Steel Drake",
    };
  }

  return {
    title: `${project.title} | Steel Drake`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-bg-primary px-6 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div
        className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full blur-[140px]"
        style={{ backgroundColor: `${project.accentColor}22` }}
      />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/#works"
            className="group inline-flex items-center gap-3 font-body text-xs font-medium uppercase tracking-[0.22em] text-white/60 transition-colors duration-500 hover:text-white"
          >
            <svg
              className="h-4 w-4 text-accent/85 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 8H3M3 8L7 4M3 8L7 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Projects
          </Link>

          <Link
            href="/projects"
            className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 transition-colors duration-500 hover:text-white/55"
          >
            View All Projects
          </Link>
        </div>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.45fr)] lg:items-end">
          <div>
            <p
              className="mb-5 font-body text-xs font-medium uppercase tracking-[0.3em]"
              style={{ color: project.accentColor }}
            >
              Project Detail
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(3rem,8vw,7.25rem)] font-black leading-[0.88] tracking-[-0.07em] text-white">
              {project.title}
            </h1>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <dl className="grid grid-cols-2 gap-5">
              <div>
                <dt className="font-body text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Category
                </dt>
                <dd className="mt-2 font-body text-sm text-white/80">
                  {project.category}
                </dd>
              </div>
              <div>
                <dt className="font-body text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Year
                </dt>
                <dd className="mt-2 font-body text-sm text-white/80">
                  {project.year}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-elevated shadow-[0_40px_140px_rgba(0,0,0,0.5)] md:mt-16">
          <div className="relative aspect-[16/10] min-h-[360px] md:aspect-[16/8]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover brightness-[0.86] contrast-[1.08] saturate-[0.92]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/75 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/35 via-transparent to-bg-primary/20" />
          </div>
        </div>

        <section className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:mt-16 md:grid-cols-[minmax(0,0.65fr)_minmax(280px,0.35fr)] md:pt-12">
          <div>
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.24em] text-white/35">
              Description
            </p>
            <p className="max-w-3xl font-body text-xl leading-9 text-white/68 md:text-2xl md:leading-10">
              {project.description}
            </p>
          </div>

          <div>
            <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.24em] text-white/35">
              Tags
            </p>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-body text-[10px] uppercase tracking-[0.16em] text-white/48"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
