"use client";

import { useEffect, useRef, useState } from "react";

// A scroll-driven, cinematic "life journey" section. Four full-screen chapters
// — Freiburg → San Francisco → Düsseldorf → Berlin — rendered on a pinned
// canvas that pans city to city as you scroll, each with its own sunset hue,
// a glowing waypoint, an animated route, and drifting embers. Text overlays
// (crisp DOM, not canvas) fade in per chapter.

type City = {
  name: string;
  years: string;
  company: string;
  chapter: string;
  blurb: string;
  color: [number, number, number]; // sunset hue for this stop
};

const CITIES: City[] = [
  {
    name: "Freiburg",
    years: "2015 — 2018",
    company: "University of Freiburg",
    chapter: "The foundation",
    blurb:
      "M.Sc in Chemistry at the University of Freiburg — where the scientific foundation for everything that followed was laid.",
    color: [255, 202, 112],
  },
  {
    name: "Zurich",
    years: "2017 — 2018",
    company: "Empa",
    chapter: "Into the lab",
    blurb:
      "Master's thesis research at Empa — polymer chemistry and materials science: artificial muscles, thin films, and the science underneath everything I do.",
    color: [255, 168, 82],
  },
  {
    name: "San Francisco",
    years: "2019 — 2020",
    company: "Bayer",
    chapter: "Crossing over",
    blurb:
      "Bayer's CoLaborator biotech incubator and G4A digital-health accelerator in Silicon Valley — from the lab bench to building business.",
    color: [255, 108, 92],
  },
  {
    name: "Düsseldorf",
    years: "2021 — 2022",
    company: "Niterra",
    chapter: "Building ventures",
    blurb:
      "Venture building at Niterra's Venture Lab — creating companies from zero, including one exit (Nanell).",
    color: [214, 94, 178],
  },
  {
    name: "Berlin",
    years: "2023 — 2026",
    company: "Niterra · CyberProtonics (pre-seed) · ATLANT 3D (Series A)",
    chapter: "Now",
    blurb:
      "Venture building at Niterra, early-stage BD at CyberProtonics (pre-seed), and now leading BD & Channel Partnerships at ATLANT 3D (Series A) — turning deep tech into commercial traction.",
    color: [150, 122, 255],
  },
];

export function Journey() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0); // 0 .. CITIES.length-1
  const [active, setActive] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const n = CITIES.length;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;

    type Ember = { x: number; y: number; vy: number; vx: number; r: number; life: number };
    let embers: Ember[] = [];

    function seedEmbers() {
      embers = Array.from({ length: 70 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(0.2 + Math.random() * 0.6),
        vx: (Math.random() - 0.5) * 0.3,
        r: 0.6 + Math.random() * 2,
        life: Math.random(),
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedEmbers();
    }

    function updateProgress() {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const frac = scrollable > 0 ? scrolled / scrollable : 0;
      progressRef.current = frac * (n - 1);
      setActive(Math.round(progressRef.current));
    }

    const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

    function colorAt(p: number): [number, number, number] {
      const i = Math.min(Math.floor(p), n - 1);
      const j = Math.min(i + 1, n - 1);
      const f = p - i;
      const a = CITIES[i].color;
      const b = CITIES[j].color;
      return [lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f)];
    }

    // Screen position of a city node given the current camera progress p.
    function nodePos(idx: number, p: number) {
      const spacing = width * 0.82;
      const cx = width * 0.5;
      const cy = height * 0.52;
      const x = cx + (idx - p) * spacing;
      const y = cy + Math.sin(idx * 1.25) * height * 0.1;
      return { x, y };
    }

    function draw() {
      const p = progressRef.current;
      const [r, g, b] = colorAt(p);
      t += 0.016;

      // Base wash.
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(10, 10, 10, 1)";
      ctx.fillRect(0, 0, width, height);

      // Big sunset "sun" glow behind the active city.
      const active = nodePos(Math.round(p), p);
      const sunY = height * 0.42;
      const glow = ctx.createRadialGradient(
        active.x,
        sunY,
        0,
        active.x,
        sunY,
        Math.max(width, height) * 0.6
      );
      glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.42)`);
      glow.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.14)`);
      glow.addColorStop(1, "rgba(10, 10, 10, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Drifting embers in the current hue.
      for (const e of embers) {
        e.x += e.vx;
        e.y += e.vy;
        e.life += 0.005;
        if (e.y < -10 || e.life > 1) {
          e.x = Math.random() * width;
          e.y = height + 10;
          e.life = 0;
        }
        const a = 0.5 * Math.sin(e.life * Math.PI); // fade in/out over life
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0, a) * 0.6})`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // The route line connecting all cities.
      ctx.lineWidth = 1.5;
      for (let i = 0; i < n - 1; i++) {
        const a = nodePos(i, p);
        const c = nodePos(i + 1, p);
        const traveled = p >= i; // brighter once we've reached this leg
        ctx.strokeStyle = traveled
          ? `rgba(${r}, ${g}, ${b}, 0.5)`
          : "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        // gentle curve between nodes
        const mx = (a.x + c.x) / 2;
        ctx.quadraticCurveTo(mx, a.y, c.x, c.y);
        ctx.stroke();
      }

      // City nodes — the active one is large and pulsing.
      for (let i = 0; i < n; i++) {
        const pos = nodePos(i, p);
        const closeness = 1 / (1 + Math.abs(i - p) * 1.4);
        const [cr, cg, cb] = CITIES[i].color;
        const pulse = 1 + 0.15 * Math.sin(t * 2) * closeness;
        const radius = (4 + 26 * closeness) * pulse;

        // halo
        const halo = ctx.createRadialGradient(
          pos.x,
          pos.y,
          0,
          pos.x,
          pos.y,
          radius * 2.4
        );
        halo.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${0.5 * closeness})`);
        halo.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 245, 235, ${0.35 + 0.6 * closeness})`;
        ctx.arc(pos.x, pos.y, Math.max(2, radius * 0.32), 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    }

    let frame = 0;

    resize();
    updateProgress();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateProgress, { passive: true });

    if (reduceMotion) {
      draw();
      cancelAnimationFrame(frame);
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${CITIES.length * 100}vh` }}
      aria-label="My journey: Freiburg, San Francisco, Düsseldorf, Berlin"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />

        {/* Section label */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/40">
            The journey
          </p>
        </div>

        {/* Chapter text — all stacked, only the active one shown */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative max-w-xl w-full text-center">
            {CITIES.map((c, i) => (
              <div
                key={c.name}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 transition-all duration-700"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: `translateY(${active === i ? "-50%" : active > i ? "-70%" : "-30%"})`,
                  pointerEvents: "none",
                }}
              >
                <p className="text-sm font-medium tracking-widest uppercase text-accent">
                  {c.years}
                </p>
                <h2 className="mt-2 text-5xl md:text-7xl font-bold tracking-tight">
                  {c.name}
                </h2>
                <p className="mt-3 text-base md:text-lg font-medium text-accent">
                  {c.company}
                </p>
                <p className="mt-2 text-lg text-ink/60 italic">{c.chapter}</p>
                <p className="mt-5 text-base md:text-lg text-ink/80 leading-relaxed">
                  {c.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
          {CITIES.map((c, i) => (
            <span
              key={c.name}
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: active === i ? "28px" : "8px",
                backgroundColor:
                  active === i
                    ? `rgb(${c.color[0]}, ${c.color[1]}, ${c.color[2]})`
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
