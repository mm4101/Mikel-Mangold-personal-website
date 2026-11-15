import { hero } from "../content";

export function Hero() {
  // Portrait sits *behind* the text as an embedded background on every screen
  // size (no side panel on desktop, no stacked block on mobile).
  // Frame the face toward the upper-right of the landscape photo, then fade the
  // image's own edges so it melts into the near-black page.
  const edgeMask =
    "radial-gradient(135% 115% at 80% 26%, #000 42%, transparent 100%)";
  // Scrim: dark on the left (where the copy lives) easing to clear on the right
  // so the portrait stays visible but the text stays readable.
  const sideScrim =
    "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.93) 32%, rgba(10,10,10,0.6) 64%, rgba(10,10,10,0.28) 100%)";
  // Soft bottom fade so the hero blends into the section that follows.
  const bottomScrim =
    "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0) 55%)";

  return (
    <section className="relative flex flex-col overflow-hidden md:min-h-[560px] md:justify-center">
      {/* Phones: portrait as its own band at the top, cropped so the whole
          face is in frame, fading into the page below. */}
      <div className="relative h-[400px] md:hidden">
        <img
          src="/portrait-mobile.jpg"
          alt="Portrait of Mikel Mangold"
          className="h-full w-full object-cover object-[center_12%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0) 45%), linear-gradient(to right, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0) 55%)",
          }}
        />
        <img
          src="/logo-white.png"
          alt="Mikel Mangold"
          className="absolute left-6 top-8 h-12 w-auto"
        />
      </div>

      {/* Desktop: portrait embedded as a background behind the text */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <img
          src="/portrait.jpg"
          alt="Portrait of Mikel Mangold"
          className="h-full w-full object-cover object-[70%_25%] brightness-95 md:object-[right_20%]"
          style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}
        />
        <div className="absolute inset-0" style={{ background: sideScrim }} />
        <div className="absolute inset-0" style={{ background: bottomScrim }} />
      </div>

      <div className="relative mx-auto -mt-6 w-full max-w-3xl px-6 pb-14 md:mt-0 md:pt-16 md:pb-24">
        {/* White logo, top of the page (on phones it sits on the photo above) */}
        <img
          src="/logo-white.png"
          alt="Mikel Mangold"
          className="hidden md:mb-14 md:block md:h-14 md:w-auto"
        />

        {/* Text — overlaid on the embedded portrait */}
        <div className="md:max-w-md">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {hero.role} · {hero.location}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-accent">{hero.name}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/75 leading-relaxed">
            {hero.headline}
          </p>
          <p className="mt-4 text-lg md:text-xl text-ink/75 leading-relaxed">
            {hero.dayNight.before}
            <a
              href={hero.dayNight.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              {hero.dayNight.linkLabel}
            </a>
            {hero.dayNight.after}
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
