import { testimonials } from "../content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 border-t border-ink/10">
      <h2 className="text-3xl font-semibold mb-8">{testimonials.heading}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.quotes.map((q, i) => (
          <figure
            key={i}
            className="p-6 rounded-2xl bg-ink/[0.03] border border-ink/10"
          >
            <blockquote className="text-ink/85 leading-relaxed">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-4 text-sm">
              {q.photo && (
                <img
                  src={q.photo}
                  alt={`Photo of ${q.author}`}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/50"
                />
              )}
              <div>
              {q.linkedin ? (
                <a
                  href={q.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  {q.author}
                </a>
              ) : (
                <span className="font-medium">{q.author}</span>
              )}
              <span className="text-ink/60"> · {q.role}</span>
              {q.date && (
                <span className="mt-1 block text-xs text-ink/45">{q.date}</span>
              )}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
