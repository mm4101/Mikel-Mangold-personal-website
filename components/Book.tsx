import { book } from "../content";

export function Book() {
  return (
    <section id="book" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8">{book.heading}</h2>

      <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-12 md:items-start">
        {/* Cover */}
        <div className="mx-auto w-44 md:w-full">
          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            className="w-full rounded-lg shadow-2xl shadow-black/60 ring-1 ring-ink/10"
          />
        </div>

        {/* Details */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            {book.title}
          </h3>
          <p className="mt-2 text-accent font-medium">{book.subtitle}</p>

          <p className="mt-5 text-ink/75 leading-relaxed max-w-2xl">
            {book.description}
          </p>

          <blockquote className="mt-6 border-l-2 border-accent pl-4 text-ink/85 italic max-w-2xl">
            &ldquo;{book.pullQuote}&rdquo;
          </blockquote>

          <div className="mt-6">
            <p className="text-sm uppercase tracking-wider text-ink/50">
              {book.praiseHeading}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
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

          <a
            href={book.cta.href}
            className="mt-8 inline-block px-6 py-3 bg-accent text-paper rounded-full font-medium hover:opacity-90 transition"
          >
            {book.cta.label} →
          </a>
        </div>
      </div>
    </section>
  );
}
