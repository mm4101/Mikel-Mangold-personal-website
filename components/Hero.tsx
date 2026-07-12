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
    <section className="relative flex min-h-[600px] flex-col justify-center overflow-hidden md:min-h-[560px]">
      {/* Portrait — embedded background behind the text */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/portrait.jpg"
          alt="Portrait of Mikel Mangold"
          className="h-full w-full object-cover object-[70%_25%] brightness-95 md:object-[right_20%]"
          style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}
        />
        <div className="absolute inset-0" style={{ background: sideScrim }} />
        <div className="absolute inset-0" style={{ background: bottomScrim }} />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        {/* White logo, top of the page */}
        <img
          src="/logo-white.png"
          alt="Mikel Mangold"
          className="mb-10 h-12 w-auto md:mb-14 md:h-14"
        />

        {/* Text — overlaid on the embedded portrait */}
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
