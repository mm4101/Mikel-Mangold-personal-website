import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "../../../content";

// One page per entry in `caseStudies` (content.ts), served at /work/<slug>.
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} - Mikel Mangold`,
    description: study.subtitle,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <img src="/logo-white.png" alt="Mikel Mangold" className="h-10 w-auto" />
        <a
          href="/#projects"
          className="text-sm text-ink/60 hover:text-accent transition"
        >
          ← Back to home
        </a>
      </div>

      {/* Header */}
      <header className="mt-14 md:mt-20">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          {study.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
          {study.title}
        </h1>
        <p className="mt-4 text-xl text-ink/70">{study.subtitle}</p>
      </header>

      {/* Callout */}
      {study.callout && (
        <aside className="mt-10 rounded-xl border border-accent/40 bg-accent/10 p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            {study.callout.label}
          </p>
          <p className="mt-2 text-xl font-semibold">{study.callout.title}</p>
          <p className="mt-2 text-ink/75 leading-relaxed">{study.callout.text}</p>
          <a
            href={study.callout.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-5 py-2.5 bg-accent text-paper rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            {study.callout.cta} →
          </a>
        </aside>
      )}

      {/* Article */}
      <article className="mt-12">
        {study.intro.map((para, i) => (
          <p key={i} className="text-lg text-ink/80 leading-relaxed mb-5">
            {para}
          </p>
        ))}

        {study.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            {section.lead && (
              <p className="text-lg text-ink/80 leading-relaxed mb-5">
                {section.lead}
              </p>
            )}
            {section.logo && (
              <a
                href={section.logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 flex items-center gap-5 rounded-xl border border-ink/10 bg-ink/[0.04] px-6 py-5 transition hover:border-accent/50"
              >
                <img
                  src={section.logo.src}
                  alt={section.logo.alt}
                  className="h-8 w-auto"
                />
                <span className="h-8 w-px bg-ink/15" aria-hidden />
                <span className="text-sm text-ink/60">
                  {section.logo.caption}
                </span>
              </a>
            )}
            {section.steps && (
              <div className="mb-8">
                {/* Overview strip: numbered dots joined by a line (wider screens) */}
                <ol
                  className="hidden sm:grid relative mb-8"
                  style={{
                    gridTemplateColumns: `repeat(${section.steps.length}, minmax(0, 1fr))`,
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute top-5 h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20"
                    style={{
                      left: `${50 / section.steps.length}%`,
                      right: `${50 / section.steps.length}%`,
                    }}
                  />
                  {section.steps.map((step, i) => (
                    <li
                      key={step.title}
                      className="relative flex flex-col items-center text-center px-1"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper border border-accent text-accent font-semibold shadow-[0_0_18px_rgba(200,169,81,0.35)]">
                        {i + 1}
                      </span>
                      <span className="mt-3 text-xs font-medium uppercase tracking-wider text-ink/70 leading-snug">
                        {step.title}
                      </span>
                    </li>
                  ))}
                </ol>

                {/* One card per step, joined by a vertical line */}
                <ol className="relative space-y-4">
                  <span
                    aria-hidden
                    className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent via-accent/40 to-accent/10"
                  />
                  {section.steps.map((step, i) => (
                    <li key={step.title} className="relative flex gap-5">
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-paper text-lg font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 rounded-xl border border-ink/10 bg-ink/[0.04] p-5 backdrop-blur-sm transition hover:border-accent/50 hover:bg-accent/[0.06]">
                        <p className="text-xs font-medium uppercase tracking-wider text-accent">
                          Step {i + 1} of {section.steps!.length}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-ink/75 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {section.bullets && (
              <ul className="mb-5 space-y-3">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-ink/85 leading-relaxed">
                    <span className="text-accent">-</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.paragraphs?.map((para, i) => (
              <p key={i} className="text-lg text-ink/80 leading-relaxed mb-5">
                {para}
              </p>
            ))}
            {section.video && (
              <figure className="mt-6 mb-2">
                <div className="aspect-video overflow-hidden rounded-xl border border-ink/10 bg-black shadow-2xl shadow-black/60">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${section.video.id}`}
                    title={section.video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink/50">
                  {section.video.title}
                </figcaption>
              </figure>
            )}
          </section>
        ))}
      </article>

      {/* Sources */}
      {study.sources.length > 0 && (
        <div className="mt-12 border-t border-ink/10 pt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-ink/50 mb-4">
            Sources
          </p>
          <ul className="space-y-2">
            {study.sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {s.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer className="mt-16 py-10 border-t border-ink/10 text-sm text-ink/50">
        <a href="/#projects" className="hover:text-accent transition">
          ← Back to selected work
        </a>
      </footer>
    </main>
  );
}
