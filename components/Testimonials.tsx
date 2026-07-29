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
            <figcaption className="mt-4 text-sm">
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
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
