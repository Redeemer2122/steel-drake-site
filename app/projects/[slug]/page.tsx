import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

const sectionEyebrow =
  "font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35";

const metadataLabel =
  "font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-white/32";

const metadataValue = "mt-2 font-body text-sm leading-6 text-white/76";

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

  const galleryItems = project.gallery?.filter((item) => item.src) ?? [];
  const processItems =
    project.process?.filter((step) => step.title && step.description) ?? [];
  const services = project.services?.filter(Boolean) ?? [];
  const credits =
    project.credits?.filter((credit) => credit.role && credit.name) ?? [];

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-bg-primary px-5 py-20 text-white md:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      <div
        className="pointer-events-none absolute -right-28 top-24 h-[34rem] w-[34rem] rounded-full blur-[170px]"
        style={{ backgroundColor: `${project.accentColor}1F` }}
      />
      <div className="pointer-events-none absolute -left-36 top-[42rem] h-96 w-96 rounded-full bg-accent/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Project navigation"
          className="mb-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-white/10 pb-6 md:mb-20"
        >
          <Link
            href="/#works"
            className="group inline-flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.24em] text-white/62 transition-colors duration-500 hover:text-white"
          >
            <svg
              className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              style={{ color: project.accentColor }}
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
            className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35 transition-colors duration-500 hover:text-white/70"
          >
            View All Projects
          </Link>
        </nav>

        <section className="grid gap-12 py-4 md:py-7 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,1fr)_22.5rem]">
          <div className="min-w-0 max-w-full">
            <div className="mb-10 flex flex-wrap items-center gap-3 font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45 md:mb-12">
              <span style={{ color: project.accentColor }}>
                {project.category}
              </span>
              <span className="h-px w-10 bg-white/18" />
              <span>{project.year}</span>
            </div>
            <h1 className="w-full max-w-full font-display text-[clamp(3rem,6.4vw,6rem)] font-black uppercase leading-[0.98] tracking-[-0.055em] text-white">
              {project.title}
            </h1>
          </div>

          <div className="min-w-0 border-l border-white/10 pl-6 lg:mt-5">
            <p className={sectionEyebrow}>Case Study</p>
            <p className="mt-5 font-body text-lg leading-8 text-white/68">
              {project.description}
            </p>
          </div>
        </section>

        <section className="mt-12 overflow-hidden border border-white/10 bg-bg-elevated shadow-[0_46px_150px_rgba(0,0,0,0.58)] md:mt-16">
          <div className="relative aspect-[4/5] min-h-[520px] sm:aspect-[16/11] md:aspect-[16/8]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover brightness-[0.82] contrast-[1.12] saturate-[0.9]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/82 via-bg-primary/5 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/45 via-transparent to-bg-primary/10" />
            <div className="absolute bottom-0 left-0 right-0 grid gap-6 border-t border-white/10 bg-black/28 p-5 backdrop-blur-md md:grid-cols-[1fr_auto] md:p-8">
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/12 bg-white/[0.035] px-3.5 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-white/56"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38 md:text-right">
                Industrial presentation board
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-10 border-b border-white/10 pb-14 md:mt-20 md:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)] md:pb-20">
          <div>
            <p className={sectionEyebrow}>Overview</p>
            <p className="mt-5 max-w-4xl font-body text-2xl leading-10 text-white/72 md:text-[2rem] md:leading-[1.45]">
              {project.description}
            </p>
          </div>

          <dl className="grid gap-7 border-l border-white/10 pl-6">
            <div>
              <dt className={metadataLabel}>Category</dt>
              <dd className={metadataValue}>{project.category}</dd>
            </div>
            <div>
              <dt className={metadataLabel}>Year</dt>
              <dd className={metadataValue}>{project.year}</dd>
            </div>
            {services.length > 0 ? (
              <div>
                <dt className={metadataLabel}>Services</dt>
                <dd className="mt-3 flex flex-col gap-2 font-body text-sm leading-6 text-white/72">
                  {services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </dd>
              </div>
            ) : null}
            <div>
              <dt className={metadataLabel}>Tags</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[11px] font-medium uppercase tracking-[0.16em] text-white/48"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        {galleryItems.length > 0 ? (
          <section className="mt-16 md:mt-24">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-10">
              <div>
                <p className={sectionEyebrow}>Gallery</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-none tracking-[-0.055em] text-white md:text-6xl">
                  Presentation Boards
                </h2>
              </div>
              <p className="max-w-sm font-body text-sm leading-6 text-white/45">
                Large-format visual frames built for cinematic industrial
                storytelling.
              </p>
            </div>

            <div className="grid gap-5 md:gap-6">
              {galleryItems.map((item, index) => (
                <figure
                  key={`${item.src}-${index}`}
                  className="group overflow-hidden border border-white/10 bg-white/[0.025]"
                >
                  <div
                    className={
                      index === 0
                        ? "relative aspect-[16/10] min-h-[360px] md:aspect-[16/7]"
                        : "relative aspect-[16/11] min-h-[320px] md:aspect-[16/8]"
                    }
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover brightness-[0.78] contrast-[1.12] saturate-[0.88] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/18" />
                  </div>
                  {item.caption ? (
                    <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-white/42 md:px-6">
                      <span>{item.caption}</span>
                      <span style={{ color: project.accentColor }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {processItems.length > 0 || credits.length > 0 ? (
          <section className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:mt-24 md:grid-cols-2 md:pt-16">
            {processItems.length > 0 ? (
              <div>
                <p className={sectionEyebrow}>Process</p>
                <div className="mt-7 grid gap-6">
                  {processItems.map((step, index) => (
                    <article
                      key={step.title}
                      className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/10 pb-6 last:border-b-0"
                    >
                      <span
                        className="font-body text-xs font-semibold tracking-[0.18em]"
                        style={{ color: project.accentColor }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-black uppercase tracking-[-0.035em] text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 font-body text-sm leading-7 text-white/55">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {credits.length > 0 ? (
              <div>
                <p className={sectionEyebrow}>Credits</p>
                <dl className="mt-7 grid gap-5">
                  {credits.map((credit) => (
                    <div
                      key={`${credit.role}-${credit.name}`}
                      className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-5"
                    >
                      <dt className={metadataLabel}>{credit.role}</dt>
                      <dd className="font-body text-sm text-white/72">
                        {credit.name}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </section>
        ) : null}
      </div>
    </main>
  );
}
