import { hero } from "../content";

export function Hero() {
  // Desktop: portrait bleeds to the right screen edge; fade its left side so
  // it melts into the page next to the text.
  const sideMask = "linear-gradient(to right, transparent 0%, #000 40%)";
  // Mobile: compact portrait above the text, vignette-faded on all sides.
  const mobileMask =
    "radial-gradient(76% 80% at 76% 50%, #000 50%, transparent 100%)";

  return (
    <section className="relative overflow-hidden">
      {/* Portrait pinned to the right edge of the screen (desktop only) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] max-w-[760px] md:block"
        style={{ maskImage: sideMask, WebkitMaskImage: sideMask }}
      >
        <img
          src="/portrait.jpg"
          alt="Portrait of Mikel Mangold"
          className="h-full w-full object-cover object-right brightness-110"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        {/* White logo, top of the page */}
        <img
          src="/logo-white.png"
          alt="Mikel Mangold"
          className="mb-10 h-12 w-auto md:mb-14 md:h-14"
        />

        {/* Portrait on mobile (stacked above the text) */}
        <div className="mb-8 w-64 md:hidden">
          <div
            className="aspect-[4/5] w-full overflow-hidden"
            style={{ maskImage: mobileMask, WebkitMaskImage: mobileMask }}
          >
            <img
              src="/portrait.jpg"
              alt="Portrait of Mikel Mangold"
              className="h-full w-full object-cover object-right brightness-110"
            />
          </div>
        </div>

        {/* Text — constrained to the left so it never runs under the portrait */}
        <div className="md:max-w-md">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {hero.role} · {hero.location}
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-accent">{hero.name}</span>
          </h1>
          <p className="mt-6 text-xl text-ink/75 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
