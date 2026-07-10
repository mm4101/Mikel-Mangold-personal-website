import { hero } from "../content";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">
        {hero.role} · {hero.location}
      </p>
      <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
        Hi, I&apos;m <span className="text-accent">{hero.name}</span>
      </h1>
      <p className="mt-6 text-xl text-ink/75 leading-relaxed max-w-xl">
        {hero.headline}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={hero.ctaPrimary.href}
          className="inline-block px-6 py-3 bg-accent text-paper rounded-full font-medium hover:opacity-90 transition"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
        >
          {hero.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
