import type { Metadata } from "next";
import { book } from "../../content";

export const metadata: Metadata = {
  title: `${book.title} - Mikel Mangold`,
  description: book.description,
};

export default function BookPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <img src="/logo-white.png" alt="Mikel Mangold" className="h-10 w-auto" />
        <a href="/" className="text-sm text-ink/60 hover:text-accent transition">
          ← Back to home
        </a>
      </div>

      {/* Hero */}
      <header className="mt-14 md:mt-20">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          The Book
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          {book.title}
        </h1>
        <p className="mt-4 text-xl text-ink/70">{book.subtitle}</p>
      </header>

      {/* Cover + intro */}
      <div className="mt-12 grid gap-10 md:grid-cols-[15rem_1fr] md:gap-14 md:items-start">
        <div className="mx-auto w-48 md:w-full md:sticky md:top-10">
          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            className="w-full rounded-lg shadow-2xl shadow-black/60 ring-1 ring-ink/10"
          />
          <a
            href={book.page.order.href}
            className="mt-6 block text-center px-6 py-3 bg-accent text-paper rounded-full font-medium hover:opacity-90 transition"
          >
            {book.page.order.label}
          </a>
        </div>

        <div>
          {book.page.intro.map((para, i) => (
            <p
              key={i}
              className="text-lg text-ink/80 leading-relaxed mb-5 max-w-2xl"
            >
              {para}
            </p>
          ))}

          <ul className="mt-2 mb-8 space-y-2">
            {book.page.questions.map((q) => (
              <li key={q} className="flex gap-3 text-ink/85">
                <span className="text-accent">-</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>

          <blockquote className="border-l-2 border-accent pl-5 py-1 text-xl italic text-ink/90 max-w-2xl">
            &ldquo;{book.pullQuote}&rdquo;
          </blockquote>

          <a
            href={book.page.readMore.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
          >
            {book.page.readMore.label} →
          </a>

          {/* Praise */}
          <div className="mt-12 border-t border-ink/10 pt-8">
            <p className="text-sm uppercase tracking-wider text-ink/50">
              {book.praiseHeading}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {book.praise.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1 text-sm rounded-full border border-ink/15 bg-ink/5"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Podcast video */}
      <section className="mt-16 border-t border-ink/10 pt-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {book.page.podcast.heading}
        </h2>
        <p className="mt-3 text-ink/70 max-w-2xl">{book.page.podcast.caption}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {book.page.podcast.videos.map((video) => (
            <figure key={video.youtubeId}>
              <div className="aspect-video w-full overflow-hidden rounded-lg ring-1 ring-ink/10 shadow-2xl shadow-black/60">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink/70">
                {video.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-ink/10 pt-8 text-sm text-ink/50">
        <a href="/" className="hover:text-accent transition">
          ← Back to Mikel Mangold
        </a>
      </footer>
    </main>
  );
}
